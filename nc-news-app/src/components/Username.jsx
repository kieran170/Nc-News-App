import React from 'react';

const Username = (props) => {
    return (
        <div>
            {props.username !== '' ? <><p className='username-text'>User: {props.username}</p> <button className='username-button' onClick={props.logout}>Logout</button> </>: <button onClick={props.login} >Login</button>}
        </div>
    );
};

export default Username;