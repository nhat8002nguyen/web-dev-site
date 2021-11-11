import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useHomeShowCaseInView() {
	const {ref: titleRef, inView: titleInView} = useInView({threshold: 0});
	const {ref: descRef, inView: descInView} = useInView({threshold: 0});
	const {ref: showCaseRef, inView: showCaseInView} = useInView({threshold: 0});

	return [{titleRef, titleInView}, {descRef, descInView}, {showCaseRef, showCaseInView}];
}