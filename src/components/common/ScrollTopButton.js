import React from 'react';
import {UpCircleOutlined} from '@ant-design/icons'
import { useScrollTop } from 'hooks';

export default function ScrollTopButton() {
	const handleClick = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	
	return (
		<UpCircleOutlined style={{fontSize: 30}} className="scroll-top-button" onClick={handleClick}/>
	)
}