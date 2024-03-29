import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITodo } from '../types/types';

export const TodoItemPage: FC = () => {
	const [todo, setTodo] = useState<ITodo | null>(null);
	const navigate = useNavigate();
	const params = useParams();

	console.log(params);

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		try {
			const res = await axios.get<ITodo>(
				`https://jsonplaceholder.typicode.com/todos/${params.todoId}`
			);
			setTodo(res.data);
		} catch (e) {
			throw e;
		}
	}

	return (
		<div>
			<button onClick={() => navigate('/todos')}>BACK</button>
			<h1>
				{todo?.id}. {todo?.title}
			</h1>
			<input type='checkbox' checked={todo?.completed} />
		</div>
	);
};
