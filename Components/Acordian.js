import React, { useEffect, useState } from 'react'

const Acordian = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getapi();
    }, []);

    const getapi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((resu) => {
                setData(resu.slice(0, 10));
                // setStatus(resu[0].id)
            })
    }

    const handleopen = (id) => {
        setStatus(status === id ? 'true' : id)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className='acordian_title'> Acordian </h2>
            {data.map((val, i) => {
                return (
                    <div className='acordian' style={{ width: '98%', padding: '8px 0px', border: '2px solid red' }}>
                        <div className='title' style={{ backgroundColor: 'black', color: 'white', padding: '6px 10px', cursor: 'pointer' }}
                            onClick={() => handleopen(i)}
                        >
                            <p> {val.title} </p>
                        </div>
                        <div className='boddy' style={{ padding: '3px 8px' }}>
                            {status === i ? <p> {val.body} </p> : ''}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Acordian
