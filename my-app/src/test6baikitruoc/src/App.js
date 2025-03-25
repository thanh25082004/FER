import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SSRProvider } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import { JobProvider } from './context/JobContext';
import Job from './components/Job';
import JobDetail from './components/JobDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
    return (
        <JobProvider>
            <ThemeProvider>
                <SSRProvider>
                    <Router>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Job />} />
                                <Route path="/job/:jobId" element={<JobDetail />} />
                            </Routes>
                        </Suspense>
                    </Router>
                </SSRProvider>
            </ThemeProvider>
        </JobProvider>
    );
};

export default App;

