import React, { FC, useState } from 'react';

export enum CardVariants {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	children: React.ReactNode | React.ReactChild;
	variant: CardVariants;
	onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({
	width,
	height,
	children,
	variant,
	onClick,
}) => {

	const [state, setState] = useState(0);

	return (
		<div
			onClick={() => onClick(state)}
			style={{
				width,
				height,
				border: variant === CardVariants.outlined ? '1px solid teal' : 'none',
				background: variant === CardVariants.primary ? 'lightgray' : '',
			}}
		></div>
	);
};
