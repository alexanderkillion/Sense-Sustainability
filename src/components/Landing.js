import React from 'react';

function Landing() {

    const onChangeHandler = () => {}

    const submitHandler = () => {}

    return (
        <div className='Landing'>
            <div className='darkenImage'>

            <p>Find your dream job</p>
            <p>Pick a career that doesn't need escaping from!</p>
            <form className='LandingForm' onSubmit={submitHandler}>
                    <input
                        name=""
                        value={''}
                        onChange={onChangeHandler}
                        type=""
                        placeholder="Key Words"
                    />
                    <input
                        name=""
                        value={''}
                        onChange={onChangeHandler}
                        type=""
                        placeholder="Location"
                    />
                    <button type="submit">
                        Search
                    </button>
                
            </form>
            <a></a>
            </div>
        </div>
    )
}

export default Landing;
