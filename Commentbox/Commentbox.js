import React, { useState, useRef, useEffect } from 'react';

const CommentBox = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([
        { name: 'Add a comment..' }
    ]);

    const commentsEndRef = useRef(null);

    const collectInput = (e) => {
        setInput(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            alert('pls enter comment...')
        }
        else {
            setData([...data, { name: input }]);
            setInput('');
        }
    };

    const scrollToBottom = () => {
        commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [data]);

    const commentStyles = {
        width: '50%',
        height: '100px',
        backgroundColor: 'lightgray',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '10px',
    };
    const formstyles = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        margin: '0px auto'
    }
    const inputstyles = {
        width: '100%'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4> Comment Box </h4>
            <form onSubmit={submit} >
                <input
                    type='text'
                    value={input}
                    onChange={collectInput}
                    placeholder='Comment here...'
                />
                <button type="submit">Submit</button>
            </form>

            <div style={commentStyles}>
                {data.map((val, i) => (
                    <p key={i}>{val.name}</p>
                ))}
                <div ref={commentsEndRef} />
            </div>
        </div>
    );
};

export default CommentBox;
