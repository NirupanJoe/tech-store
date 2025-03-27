import { Fragment } from 'react';
import KeywordList from './KeywordList';
import config from '../../../actions/config';

const PopularKeywords = (props) =>
	<Fragment>
		<h3 className="font-semibold mb-2 mt-3">Popular Keywords</h3>
		<KeywordList keywords={ config.popularKeywords } { ...props }/>
	</Fragment>;

export default PopularKeywords;
