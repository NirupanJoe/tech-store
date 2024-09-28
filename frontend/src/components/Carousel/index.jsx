import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageSlide = ({ image }) =>
	<div className="flex flex-col items-center">
		<img src={ image } alt={ image } className="w-full h-auto"/>
	</div>;

const MainSwiper = ({ images, thumbsSwiper }) =>
	<Swiper
		spaceBetween={ 10 }
		navigation={ true }
		thumbs={ { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } }
		modules={ [Navigation, Thumbs] }
		className="mb-2 h-1/2"
	>
		{ images.map((image, i) =>
			<SwiperSlide key={ i } className="self-center">
				<ImageSlide image={ image }/>
			</SwiperSlide>) }
	</Swiper>;

const ImageThumbnail = ({ image }) =>
	<div className="flex flex-col items-center">
		<img
			src={ image }
			alt={ image }
			className="w-full h-auto object-contain cursor-pointer"
		/>
	</div>;

const ThumbnailSwiper = ({ images, setThumbsSwiper }) =>
	<Swiper
		onSwiper={ setThumbsSwiper }
		spaceBetween={ 10 }
		slidesPerView={ 3 }
		freeMode={ true }
		watchSlidesProgress={ true }
		modules={ [Thumbs] }
		className="thumbs-swiper h-30"
	>
		{ images.map((image, i) =>
			<SwiperSlide key={ i } className="self-center">
				<ImageThumbnail image={ image }/>
			</SwiperSlide>) }
	</Swiper>;

const Carousel = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="max-w-3xl mx-auto">
			<MainSwiper images={ images } thumbsSwiper={ thumbsSwiper }/>
			<ThumbnailSwiper images={ images } setThumbsSwiper={ setThumbsSwiper }/>
		</div>
	);
};

export default Carousel;