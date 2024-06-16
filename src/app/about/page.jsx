import React from 'react';

const getTime = async () => {
    const res = await fetch("http://localhost:3000/time", {cache: 'no-store'})
    // {next: {revalidate: 5}} re caching after 5 seconds
    const data = await res.json();
    return data.currentTime;
}

const page = async () => {
    const currentTime = await getTime();
    return (
        <div>
            <h3>About Page</h3>
            <p className='text-3xl text-red-400 mt-12'>Time: {currentTime} </p>
        </div>
    );
};

export default page;