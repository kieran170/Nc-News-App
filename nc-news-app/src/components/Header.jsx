import React from 'react';
import {Link} from '@reach/router'
import Username from './Username';

const Header = () => {
    return (
        <header className='header'>
            <Link to={'/'} id='homepage' className='trending-topic-button-home'>🏠</Link>
            <Link to='/' className='header-link'>NC NEWS</Link>
        </header>
    );
};

export default Header;