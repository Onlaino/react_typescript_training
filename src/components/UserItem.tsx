import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div
			onClick={() => onClick(user)}
			style={{ padding: 15, border: '1px solid teal', marginTop: 10 }}
		>
			{user.id} {user.name} проживает в городе {user.address.city} по улице{' '}
			{user.address.street}
		</div>
	);
};
