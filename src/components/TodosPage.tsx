import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from './List';
import { TodoItem } from './TodoItem';
import { useNavigate } from 'react-router-dom';

export const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		try {
			const res = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			setTodos(res.data);
		} catch (e) {
			throw e;
		}
	}

	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => (
				<TodoItem
					onClick={(todo) => navigate(`/todos/${todo.id}`)}
					todo={todo}
					key={todo.id}
				/>
			)}
		/>
	);
};
