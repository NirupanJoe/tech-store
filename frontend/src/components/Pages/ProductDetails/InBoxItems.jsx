import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const InBoxItems = () =>
	<div>
		<h2 className="font-semibold mb-2">In-box items</h2>
		<LazyLoadImage
			alt="In-box-items"
			effect="blur"
			wrapperProps={ { style: { transitionDelay: '0.5s' }} }
			src="/assets/in-box-items.png"
		/>
	</div>;

export default InBoxItems;
