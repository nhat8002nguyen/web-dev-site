import React from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function CategorySection(props) {
	const history = useHistory();
	const { id, name, types } = props;

	return (
		<div className="category-section-wrapper">
			<div className="category-name">
				<h3 className="text-thin">{name}</h3>
			</div>
			<div className="category-item-list">
				{types.map(
					type => <Link key={type.id} className="category-item" 
						to={`${history.location.pathname}/${type.pathName}`}>{`${type.name} (${type.quantity})`}
					</Link>
				)}
			</div>
		</div>
	)
}