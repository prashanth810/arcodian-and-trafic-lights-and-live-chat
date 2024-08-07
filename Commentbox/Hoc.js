import React from 'react'

const Hoc = (Component) => {

    const objs = {
        name: 'prashu',
        role: 'Web Develoepr....',
        company: 'Publishment'
    }
    return (
        <div>
            <Component value={objs} />
        </div>
    )
}

export default Hoc
