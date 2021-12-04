import React, {  useEffect, useState } from "react";
import {newsService}from "../../services/newsService"
// import { blogs } from "./BlogData";
import BlogItem from './BlogItem';


const HomeBlogShowCase = ({inView}, ref) => {
	let [blog,setBlog] = useState([])
	useEffect(()=>{
		newsService.getNewsList().then((res)=>setBlog(res.data)).catch((err)=>{console.log(err)})
	},[])
		
	return (
		<div className={`product-display-grid ${inView ? "products-animation" : ""}`} ref={ref}>
			{blog.slice(0,3).map(blog => <BlogItem key={blog.id} {...blog}/>)}
		</div>
	)
}

export default React.forwardRef(HomeBlogShowCase);