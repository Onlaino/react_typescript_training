import React, { FC } from 'react';
import { ITodo } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';

interface TodoItemProps {
	todo: ITodo;
	onClick: (todo: ITodo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
	const params = useParams();
	const navigate = useNavigate();
	console.log(params);
	return (
		<div>
			<button onClick={() => onClick(todo)}></button>
			<input type='checkbox' checked={todo.completed} />
			{todo.id}. {todo.title}
		</div>
	);
};
