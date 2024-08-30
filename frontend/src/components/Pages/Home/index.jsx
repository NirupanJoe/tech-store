import MetaData from '../../../MetaData';
import Products from './Products';

const Home = () =>
	<main className=" mx-auto px-4 py-8">
		<MetaData title="Buy Best Products | Home "/>
		<section className="mb-12">
			<Products/>
		</section>
	</main>;

export default Home;
