import React from 'react';

const ErrorDisplayer = ({msg = 'Page Not Found'}) => {
    return (
        <h1 className='error-message'>{msg}</h1>
    );
};

export default ErrorDisplayer;