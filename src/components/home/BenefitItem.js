import React from 'react';
import * as AntdIcon from '@ant-design/icons';

export default function BenefitItem(props) {
	const { id, title, description, antdIcon } = props;
	const BenefitIcon = antdIcon ? AntdIcon[antdIcon] : AntdIcon["AndroidOutlined"];

	return (
		<div className="benefit">
			<BenefitIcon className="benefit-icon" size={30} />
			<div className="benefit-text">
				<h3 className="app-font-family">{title?.length > 30 ? title.substring(0, 30) : title}</h3>
				<p className="app-font-family">{description?.length > 100 ? description.substring(0, 100)+"..." : description}</p>
			</div>
		</div>
	)
}