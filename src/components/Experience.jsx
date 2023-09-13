import React from 'react';
import Html from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Experience = () => {
	const tech = [
		{
			id: 1,
			src: Html,
			title: 'HTML',
		},
		{
			id: 2,
			src: Javascript,
			title: 'JAVASCRIPT',
		},
		{
			id: 3,
			src: ReactImage,
			title: 'REACT',
		},
		{
			id: 4,
			src: Github,
			title: 'GITHUB',
		},
		{
			id: 5,
			src: Tailwind,
			title: 'TAILWINDCSS',
		},
	];
	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-extralight border-b-4 border-gray-500 p-2 inline">
						Experience
					</p>
					<p className="py-6">This are the technologies I've worked with</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{tech.map(({ id, src, title }) => (
						<div
							key={id}
							className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
						>
							<img src={src} className="w-20 mx-auto" alt="" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
