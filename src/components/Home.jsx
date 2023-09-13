import React from 'react';
import second from '../assets/HeroImage.png';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-medium text-white">
						I'm a Full Stack Developer
					</h2>
					<p className="text-gray-500 font-light py-4 max-w-md leading-6">
						Versatile and communicative, I am passionate about exploring my
						creativity and have a goal-oriented vision of work. I am looking for
						an organisation that gives me time and resources to learn and grow,
						with a strong culture and big challenges. Before changing careers, i
						spent the last 15 years working in communication, for culture and
						business, with strategy, creativity and joy as my drive.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 ny-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg shadow-blue-500/50"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowRight size={15} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={second}
						alt="my-profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full shadow-lg shadow-blue-500/50"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
