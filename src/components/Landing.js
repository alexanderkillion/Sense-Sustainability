import React from 'react';

function Landing() {
    return (
        <div className='Landing'>
            <>
            <p>Find your dream job</p>
            <p>Pick a career that doesn't need escaping from!</p>
            <form className='LandingForm' onSubmit={''}>
                <input
                    name=""
                    value={''}
                    onChange={''}
                    type=""
                    placeholder="Key Words"
                />
                <input
                    name=""
                    value={''}
                    onChange={''}
                    type=""
                    placeholder="Location"
                />
                <button type="submit">
                    Search
                </button>
            </form>
            <a></a>
            </>
        </div>
    )
}

export default Landing;
