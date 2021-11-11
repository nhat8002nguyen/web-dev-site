/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import CategorySection from 'components/shop/categorySection';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectByKeyword, selectFilter } from 'selectors/selector';
import { shopData } from '../../dummyData';
import { useParams, useHistory } from 'react-router-dom';

const Shop = () => {
  useDocumentTitle('Shop | Salinaka');
  useScrollTop();
	const { location: { pathname } } = useHistory();
	const { keyword } = useParams();

  const store = useSelector((state) => ({
    filteredProducts: keyword
			? selectByKeyword(state.products.items, keyword) 
			: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

	const updateShopTitleFrom = (path) => {
		return path.lastIndexOf('/') > 0 
			? `${path.substring(1, path.lastIndexOf('/'))} - ${path.substring(path.lastIndexOf('/')+1)}`
			: path.substring(1);
	}

	const showCategoryNameFrom = (path) => {
		return path.lastIndexOf('/') > 0
			? capitallize(path.substring(path.lastIndexOf('/')+1))
			: "Shop";
	}

	const capitallize = (s) => {
		return s.slice(0,1).toUpperCase() + s.slice(1);
	}

  return (
    <main className="content shop-page">
			<section className="shop-header background-header">
				<h1 className="text-white">{showCategoryNameFrom(pathname)}</h1>
				<p className="text-white text-thin">{updateShopTitleFrom(pathname)}</p>
			</section>
			<section className="shop-container">
				<section className="shop-categories-wrapper">
					{shopData?.productDivisions?.map(item => <CategorySection key={item.id} {...item}/>)}
				</section>
				<section className="product-list-wrapper">
					<AppliedFilters filteredProductsCount={store.filteredProducts.length} />
					<ProductList {...store}>
						<ProductGrid products={store.filteredProducts} />
					</ProductList>
				</section>
			</section>
    </main>
  );
};

export default Shop;
