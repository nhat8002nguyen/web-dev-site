import React from 'react';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { useDocumentTitle, useRecommendedProducts, useScrollTop } from 'hooks';
import bannerImg from 'images/banner-girl-1.png';
import CategorySection from 'components/shop/categorySection';
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import { shopData } from '../../dummyData';

const RecommendedProducts = () => {
  useDocumentTitle('Recommended Products | Salinaka');
  useScrollTop();

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading,
    error
  } = useRecommendedProducts();

	const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content shop-page">
			<section className="shop-header background-header">
				<h1 className="text-white">Recommended</h1>
				<p className="text-white text-thin">Shop - Recommended</p>
			</section>
			<section className="shop-container">
				<section className="shop-categories-wrapper">
					{shopData?.productDivisions?.map(item => <CategorySection key={item.id} {...item}/>)}
				</section>
				<section className="product-list-wrapper">
					<AppliedFilters filteredProductsCount={store.filteredProducts.length} />
					<ProductList {...store}>
						<ProductGrid products={recommendedProducts} />
					</ProductList>
				</section>
			</section>
    </main>
  );
};

export default RecommendedProducts;
