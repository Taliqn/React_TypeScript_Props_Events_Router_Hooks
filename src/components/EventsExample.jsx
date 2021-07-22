import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef(null)
    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    return (
        <div>
            <input value = {value} onChange={onchangeHandler} type  = 'text' placeholder='упровляемый'/>
            <input ref={inputRef} type  = 'text' placeholder='неупровляемый'/>
            <button onClick={clickHandler}>button</button>

        </div>
    )
}

export default EventsExample;