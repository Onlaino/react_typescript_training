import React, { FC, useRef, useState } from 'react';

export const EventExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);


	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};

	const dragHendler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('drag');
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('DROP')
	};

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	return (
		<div>
			<input value={value} onChange={changeHandler} type='Управляемый' />
			<input ref={inputRef} type='НЕ Управляемый' />
			<button onClick={clickHandler}>TEXT</button>
			<div
				onDrag={dragHendler}
				draggable
				style={{ width: 200, height: 200, background: 'red' }}
			></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				
				style={{ width: 200, height: 200, background: isDrag ? 'blue': 'red', marginTop: 15 }}
			></div>
		</div>
	);
};
