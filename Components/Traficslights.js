import React, { useEffect, useState } from 'react';
import './Trafic.css';

const Traficslights = () => {
    const [light, setLight] = useState('green');

    useEffect(() => {
        let timer;

        if (light === 'green') {
            timer = setTimeout(() => {
                setLight('orange');
            }, 5000);
        }
        else if (light === 'orange') {
            timer = setTimeout(() => {
                setLight('red');
            }, 3000)
        }
        else if (light === 'red') {
            timer = setTimeout(() => {
                setLight('green')
            }, 4000);
        }
        return () => clearTimeout(timer)

    }, [light]);

    return (
        <div className='main'>
            <h2>Trafic Light</h2>

            <div className='green' style={{ width: '50px', height: '50px', backgroundColor: light === 'green' ? 'green' : 'gray', borderRadius: '50%' }}>

            </div>


            <div className='orange' style={{ width: '50px', height: '50px', backgroundColor: light === 'orange' ? 'orange' : 'gray', borderRadius: '50%' }}>

            </div>

            <div className='red' style={{ width: '50px', height: '50px', marginBottom: '20px', backgroundColor: light === 'red' ? 'red' : 'gray', borderRadius: '50%' }}>

            </div>


        </div>
    )
}

export default Traficslights
