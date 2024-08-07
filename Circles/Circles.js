import React, { useState } from 'react';
import './st.css';

const Circles = () => {
    const [status, setstatus] = useState({
        check1: false,
        check2: false,
        check3: false
    })
    return (
        <div className='main'>
            <div>
                <div>
                    <label> Select All</label>
                    <input type='checkbox' checked={status.check1 && status.check2 && status.check3} onChange={() => setstatus({
                        check1: !status.check1,
                        check2: !status.check2,
                        check3: !status.check3
                    })} />
                </div>
                <div>
                    <label> 1</label>
                    <input type='checkbox' checked={status.check1} onChange={() => setstatus({ ...status, check1: !status.check1 })} />
                </div>
                <div>
                    <label> 2</label>
                    <input type='checkbox' checked={status.check2} onChange={() => setstatus({ ...status, check2: !status.check2 })} />
                </div>
                <div>
                    <label> 3 </label>
                    <input type='checkbox' checked={status.check3} onChange={() => setstatus({ ...status, check3: !status.check3 })} />
                </div>
            </div>

        </div>
    )
}

export default Circles
