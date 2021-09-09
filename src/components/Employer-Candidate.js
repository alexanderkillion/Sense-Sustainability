import React from 'react';

function EmployerCandidate() {
    return (
        <div className="Employer-Candidate">
            <div className="img1">
                <div>
                    <h1>Employer</h1>
                    <h4>Start posting your jobs</h4>
                    <button className="styledButton">Signup</button>
                </div>
            </div>
            <div className="img2">
                <div>
                    <h1>Candidate</h1>
                    <h4>Start posting your resume</h4>
                    <button className="styledButton">Signup</button>
                </div>
            </div>
        </div>
    );
}

export default EmployerCandidate;
