import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useJobContext, ACTIONS } from '../context/JobContext';

const Job = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useJobContext();
    const { jobs, loading, error } = state;
    const [searchLocation, setSearchLocation] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            dispatch({ type: ACTIONS.SET_LOADING, payload: true });
            try {
                const response = await axios.get('http://localhost:3000/jobs');
                dispatch({ type: ACTIONS.SET_JOBS, payload: response.data });
                setFilteredJobs(response.data);
            } catch (err) {
                dispatch({ type: ACTIONS.SET_ERROR, payload: err.message });
            } finally {
                dispatch({ type: ACTIONS.SET_LOADING, payload: false });
            }
        };

        fetchJobs();
    }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = jobs.filter(job => 
            job.location.toLowerCase().includes(searchLocation.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setSearchLocation(value);
        
        const filtered = jobs.filter(job => 
            job.location.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    if (loading) return <div className="text-center p-5">Loading...</div>;
    if (error) return <div className="text-center p-5 text-danger">Error: {error}</div>;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN');
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Job Finder</h1>
            
            <div className="row justify-content-center mb-5">
                <div className="col-md-6">
                    <form onSubmit={handleSearch} className="d-flex gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter location (e.g., New York, Remote)"
                            value={searchLocation}
                            onChange={handleLocationChange}
                        />
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center mb-4">
                <p className="text-muted">
                    Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
                    {searchLocation && ` in "${searchLocation}"`}
                </p>
            </div>

            <div className="row">
                {filteredJobs.map((job) => (
                    <div key={job.jobId} className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 
                                        className="mb-0 job-title" 
                                        onClick={() => handleJobClick(job.jobId)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {job.title}
                                    </h5>
                                    <span className="badge bg-light text-primary">
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <h6 className="company-name">
                                        <i className="bi bi-building me-2"></i>
                                        {job.company}
                                    </h6>
                                    <div className="text-muted">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {job.location}
                                    </div>
                                </div>

                                <p className="card-text">{job.description}</p>

                                <div className="mb-3">
                                    <h6>Requirements:</h6>
                                    <ul>
                                        {job.requirements.map((req, index) => (
                                            <li key={index}>{req}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="salary-info mb-3">
                                    <span className="badge bg-success p-2">
                                        Salary: {formatCurrency(job.salary.amount)}/year
                                    </span>
                                </div>

                                <div className="dates text-muted small">
                                    <div>Posted Date: {formatDate(job.postedDate)}</div>
                                    <div>Application Deadline: {formatDate(job.applicationDeadline)}</div>
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Job;