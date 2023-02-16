import React, { useState } from 'react'

const List = (props) => {
    const {list, setList} = props;
    const [input, setInput] = useState({name: '', isComplete: false});

    const handleChange = (e) => {
        setInput({name: e.target.value, isComplete: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, input]);
        setInput({name: '', isComplete: false});
    };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input.name} onChange={handleChange} />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }

export default List;