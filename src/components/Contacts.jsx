import React from 'react';

const Contacts = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
		>
			<div class-name="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-8">
					<p className="text-4xl font-extralight inline border-b-4 border-gray-500">
						Contact
					</p>
					<p className="py-6">Submit the form below to get in touch with me</p>
				</div>
				<div className="flex justify-center items-center">
					<form
						action="https://getform.io/f/cf50851c-fdb0-42d5-bdcd-ebe82732f052"
						method="POST"
						className="flex flex-col w-full md:w-1/2"
					>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 rounded-medium text-white focus:outline-none"
						/>
						<input
							type="text"
							name="e-mail"
							placeholder="Enter your e-mail"
							className="my-4 p-2 bg-transparent border-2 rounded-medium text-white focus:outline-none"
						/>
						<textarea
							name="message"
							placeholder="Enter your message"
							rows="10"
							className="p-2 bg-transparent border-2 rounded-medium text-white focus:outline-none"
						/>
						<button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover-scale-110 duration-300">
							Let's talk
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
