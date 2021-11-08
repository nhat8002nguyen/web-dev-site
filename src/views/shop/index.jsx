/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import CategorySection from 'components/shop/categorySection';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import { shopData } from '../../dummyData';

const Shop = () => {
  useDocumentTitle('Shop | Salinaka');
  useScrollTop();

	

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content shop-page">
			<section className="shop-header background-header">
				<h1 className="text-white">Chair</h1>
				<p className="text-white text-thin">Home - Chair</p>
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
