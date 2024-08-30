/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */

import { Carousel as FlowbiteCarousel } from 'flowbite-react';

const slides = [
	{
		text: 'Slide 1: This is the first slide text.',
		image: 'https://via.placeholder.com/500x300',
	},
	// {
	// 	text: 'Slide 2: This is the second slide text.',
	// 	image: 'https://via.placeholder.com/500x300',
	// },
	// {
	// 	text: 'Slide 3: This is the third slide text.',
	// 	image: 'https://via.placeholder.com/500x300',
	// },
];

const LeftControl = () =>
	<button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
		</svg>
	</button>;

const RightControl = () =>
	<button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
		</svg>
	</button>;

const Carousel = ({ data = slides }) =>
	<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
		<FlowbiteCarousel leftControl={ <LeftControl/> } rightControl={ <RightControl/> }>
			{
				data.map(({ text, image }, index) =>
					<div
						key={ index }
						className="flex w-full h-80 bg-white dark:bg-gray-200 rounded-lg overflow-hidden shadow-md"
					>
						<div className="bg-white mx-auto dark:bg-gray-200 w-[90%] flex items-center justify-center">
							<div className="w-1/2 bg-red-500">
								<div className="bottom-10 left-10 text-white">
									<h1 className="text-4xl font-bold mb-4">Gear up for 2024</h1>
									<p className="text-xl mb-4">Nebula S24 Series | Nebula Book4 Series</p>
									<button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
										Buy now
									</button>
								</div>
							</div>
							<div className="w-1/2 h-full">
								<img
									src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
									alt="Slide"
									className="object-cover h-full w-full"
								/>
							</div>
						</div>
					</div>)
			}
		</FlowbiteCarousel>
	</div>;

export default Carousel;

{ /* <div className="w-1/2 p-10 flex items-center justify-center">
							<div className="absolute bottom-10 left-10 text-white">
								<h1 className="text-4xl font-bold mb-4">Gear up for 2024</h1>
								<p className="text-xl mb-4">Nebula S24 Series | Nebula Book4 Series</p>
								<button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
									Buy now
								</button>
								<p className="text-xl font-semibold">{ text }</p>
							</div>
						</div>
						<div className="w-1/2 h-full">
							<img
								src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
								alt="Slide"
								className="object-cover h-full w-full"
							/>
						</div> */ }
