import React, { useState } from 'react';
import './App.css';
import { Input } from './component/Input';
import { Button } from './component/Button';

function App() {
	let [message, setMessage] = useState([
		{ message: 'message1' },
		{ message: 'message2' },
		{ message: 'message3' },
	]);

	let [title, setTitle] = useState('');

	const addMessage = (title: string) => {
		let newMessage = { message: title };
		setMessage([newMessage, ...message]);
	};
	const collBackButtonHandler = () => {
		addMessage(title);
		setTitle('');
	};

	return (
		<div className={'App'}>
			<Input setTitle={setTitle} title={title} />
			<Button name={'+'} callBack={collBackButtonHandler} />
			{message.map((element, index) => {
				return <div key={index}>{element.message}</div>;
			})}
		</div>
	);
}

export default App;
