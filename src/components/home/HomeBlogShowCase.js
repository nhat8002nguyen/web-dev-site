import React from 'react';

import { blogs } from "./BlogData";
import BlogItem from './BlogItem';


export default function HomeBlogShowCase() {

	return (
		<div className="product-display-grid">
			{blogs.map(blog => <BlogItem key={blog.id} {...blog}/>)}
		</div>
	)
}