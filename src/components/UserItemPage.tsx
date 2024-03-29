import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../types/types';


export const UserItemPage: FC = () => {
	const params = useParams<Record<string, string>>();
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const res = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users/' + params.userId
			);
			setUser(res.data);
		} catch (e) {
			throw e;
		}
	}

	return (
		<div>
			<button onClick={() => navigate('/users')}>back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>{user?.email}</div>
			<div>
				Проживает в городе {user?.address.city} по адресу {user?.address.street}
			</div>
		</div>
	);
};
