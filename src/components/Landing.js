import React from 'react';

import StartNowSection from './StartNowSection';
import EmployerCandidate from './Employer-Candidate'
import JobSection from './JobSection';
import ReviewSection from './ReviewSection';

function Landing() {

    const onChangeHandler = () => {}

    const submitHandler = () => {}

    return (
        <>
            <div className='Landing'>
                <div className='darkenImage'>

                <h1 className='white-font'>Find your dream job</h1>
                <p className='white-font'>Pick a career that doesn't need escaping from!</p>
                    <form className='LandingForm' onSubmit={submitHandler}>
                            <input
                                className='hero-inputs'
                                name=""
                                value={''}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Key Words"
                            />
                            <input
                                className='hero-inputs'
                                name=""
                                value={''}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Location"
                            />
                            <select
                                name=""
                                value={''}
                                onChange={onChangeHandler}
                                defaultValue='Choose a category...'
                            >
                                <option>Choose a category...</option>
                                <option>Agriculture</option>
                                <option>Education</option>
                                <option>Forestry</option>
                                <option>Botany</option>
                                <option>Climate</option>
                                <option>Wildlife</option>
                                <option>Invasive Species</option>
                                <option>Wildfire</option>
                                <option>Policy</option>
                                <option>Social Science</option>
                            </select>
                            <button type="submit" className='styledButton'>
                                Search
                            </button>
                        
                    </form>
                <a href='' className='white-font underLine'>Advanced Search</a>
                </div>
            </div>
            <StartNowSection />
            <EmployerCandidate />
            <JobSection />
            <ReviewSection  />
        </>
    )
}

export default Landing;