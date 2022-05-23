import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import MainHomePage from '../components/MainHomePage';

function HomePage() {

    useEffect(()=> {document.title = 'kinoman'},[])
    return (
        <main className='main'>
            <MainHomePage/>
        </main>
    )
}

export default HomePage;
