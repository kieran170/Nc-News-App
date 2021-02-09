import React from 'react';
import {Link} from '@reach/router'

const ErrorDisplayer = ({msg = 'Page Not Found'}) => {
    return (
        <>
            <h1 className='error-message'>{msg}</h1>
            <Link className='error-link' to='/' >Get your news, Here!</Link>
        </>
    );
};

export default ErrorDisplayer;