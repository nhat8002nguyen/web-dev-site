import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SHOP } from 'constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { applyFilter } from 'redux/actions/filterActions';

export default function CategorySection(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id, name, types } = props;

	const { filter } = useSelector((state) => ({
    filter: state.filter,
  }));

	const handleItemClick = (type) => {
		const name = type.pathName;
		if (name === "featured" || name === "recommended") {
			history.replace(`/shop/${name}`);
		} else {
			dispatch(applyFilter({...filter, brand: name}));
		}
	}

	return (
		<div className="category-section-wrapper">
			<div className="category-name">
				<h3 className="text-thin">{name}</h3>
			</div>
			<div className="category-item-list">
				{types.map(
					type => <p onClick={() => handleItemClick(type)} key={type.id} className="category-item">
						{`${type.name} (${type.quantity})`}
					</p>
				)}
			</div>
		</div>
	)
}