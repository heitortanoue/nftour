import { useState, useEffect } from 'react';
export default function FloatingIcon({
	img,
	position,
	size = 1
}: {
	img: string;
	position: [x: number, y: number];
	size?: number;
}) {
	const sizeInPx = `${size * 4}rem`;
	const fontSize = `${size * 2}rem`;

	const [delay, setDelay] = useState(0);

	// doing this on the client side because of the random delay
	useEffect(() => {
		const newDelay = Math.random() * 2;
		setDelay(newDelay);
	}, []);

	return (
		<div
			className="absolute bg-white rounded-full items-center justify-center
            animate-float ease-in-out infinite flex z-[1]"
			style={{
				left: `${position[0]}rem`,
				top: `${position[1]}rem`,
				width: sizeInPx,
				height: sizeInPx,
				animationDelay: `${delay}s`
			}}
		>
			<img src={img} alt="icon" className="w-full h-full rounded-full" />
		</div>
	);
}
