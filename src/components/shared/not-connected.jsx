import React from 'react';

const NotConnected = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[15%]'>
            <h1 className='text-4xl font-semibold text-white'>You are Not Connected.</h1>
            <p>You need to connect your wallet to use this feature.</p>
        </div>
    );
};

export default NotConnected;