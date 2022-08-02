import React from 'react'
import cl from './Loader.module.css'
import LinearProgress from '@mui/material/LinearProgress';

function Loader() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={cl.loaderWrapper}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default Loader
