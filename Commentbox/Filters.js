import React, { useState } from 'react'

const Filters = () => {
    const [obj, setObj] = useState({
        first: 'abcd',
        secondname: 'xyz',
        address: {
            firstadd: 'ggg',
            secondadd: 'rrr'
        }
    })

    const handleclick = () => {
        setObj({ ...obj, address: { ...obj.address, secondadd: 'Test-3' } })
    }
    return (
        <div>

            <h2> {obj.first}</h2>
            <h2> {obj.secondname}</h2>
            <h2> {obj.address.firstadd}</h2>
            <h2> {obj.address.secondadd}</h2>
            <button onClick={handleclick}> Change </button>
        </div>
    )
}

export default Filters
