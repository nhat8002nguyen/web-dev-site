import React from 'react';

import { blogs } from "./BlogData";
import BlogItem from './BlogItem';


const HomeBlogShowCase = ({inView}, ref) => {

	return (
		<div className={`product-display-grid ${inView ? "products-animation" : ""}`} ref={ref}>
			{blogs.map(blog => <BlogItem key={blog.id} {...blog}/>)}
		</div>
	)
}

export default React.forwardRef(HomeBlogShowCase);