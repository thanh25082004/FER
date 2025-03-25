import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

const JobDetail = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const { state } = useJobContext();
    const { jobs } = state;
    
    const job = jobs.find(job => job.jobId === jobId);

    if (!job) {
        return (
            <div className="container py-5 text-center">
                <h2>Job not found</h2>
                <button 
                    className="btn btn-primary mt-3"
                    onClick={() => navigate('/')}
                >
                    Back
                </button>
            </div>
        );
    }

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
            <button 
                className="btn btn-outline-primary mb-4"
                onClick={() => navigate('/')}
            >
                <i className="bi bi-arrow-left me-2"></i>
                Back
            </button>

            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mb-0">{job.title}</h2>
                        <span className="badge bg-light text-primary">
                            {job.employmentType}
                        </span>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <h4 className="company-name mb-3">
                                <i className="bi bi-building me-2"></i>
                                {job.company}
                            </h4>
                            <p className="text-muted">
                                <i className="bi bi-geo-alt me-2"></i>
                                {job.location}
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="salary-info mb-2">
                                <span className="badge bg-success p-2 fs-6">
                                    Salary: {formatCurrency(job.salary.amount)}/year
                                </span>
                            </div>
                            <div className="dates text-muted">
                                <div>Posted: {formatDate(job.postedDate)}</div>
                                <div>Deadline: {formatDate(job.applicationDeadline)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Job Description</h5>
                        <p>{job.description}</p>
                    </div>

                    <div className="mb-4">
                        <h5>Requirements</h5>
                        <ul>
                            {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <button className="btn btn-primary btn-lg w-100">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail; 