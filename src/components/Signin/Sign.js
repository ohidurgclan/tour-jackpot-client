import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Sign = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <>
            <h2>Please Sign In</h2>
            <button onClick={signInUsingGoogle}> Google Signin</button>
        </>
    );
};

export default Sign;