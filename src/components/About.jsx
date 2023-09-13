import React from 'react';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-extralight inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-20 font-light">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
					optio! Laborum beatae laudantium totam similique minima! Illo qui
					voluptatum quis veniam vitae ratione adipisci amet sunt saepe
					possimus, fugit earum accusantium, error temporibus, pariatur aut
					impedit ut quas ad repellat. Eveniet aperiam ipsum dolor minima
					dolorum quidem architecto consequatur quisquam!
				</p>
				<br />
				<p className="text-xl font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					cumque autem id! Impedit ipsum laborum, rem recusandae voluptates
					atque, harum, magni nihil ipsa fugit quis laudantium eligendi voluptas
					animi blanditiis culpa eos voluptate dolore itaque velit! Porro in, a
					soluta laudantium, nisi repudiandae ipsum possimus cumque dolorem
					nihil temporibus atque?
				</p>
			</div>
		</div>
	);
};

export default About;
