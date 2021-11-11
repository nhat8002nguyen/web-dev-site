import CategorySection from 'components/shop/categorySection';
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from 'hooks';
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import { shopData } from '../../dummyData';

const FeaturedProducts = () => {
  useDocumentTitle('Featured Products | Salinaka');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading,
    error
  } = useFeaturedProducts();

	const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content shop-page">
			<section className="shop-header background-header">
				<h1 className="text-white">Featured</h1>
				<p className="text-white text-thin">Shop - Featured</p>
			</section>
			<section className="shop-container">
				<section className="shop-categories-wrapper">
					{shopData?.productDivisions?.map(item => <CategorySection key={item.id} {...item}/>)}
				</section>
				<section className="product-list-wrapper">
					<AppliedFilters filteredProductsCount={store.filteredProducts.length} />
					<ProductList {...store}>
						<ProductGrid products={featuredProducts} />
					</ProductList>
				</section>
			</section>
    </main>
  );
};

export default FeaturedProducts;
