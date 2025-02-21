import React, { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
 addMessage:(title: string)=> void
}

export const FullInput = (props:FullInputPropsType) => {
    let [title, setTitle] = useState('')
     
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=> {
       setTitle(event.currentTarget.value)
    }
   
    const onChangeButtonHandler = ()=> {
        props.addMessage(title)
    }

	return (
		<div>
			<input value={title} onChange={onChangeInputHandler}/>
			<button onClick={onChangeButtonHandler}>+</button>
		</div>
	);
};
