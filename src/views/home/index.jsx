import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerImg from 'images/banner-girl.png';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('Salinaka | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(3);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money in your pocket.
              Glasses, sunglasses, and contacts—we’ve got your eyes covered.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        <div className="display">
          <div className="display-header">
						<h1>New Arrivals</h1>
						<p >
							Some of our customers say that they trust us and buy out product without any
							hesitation because they beleive us and always happy to buy our product.
						</p>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
				<div className="display">
					<div className="ads">
						<div className="ads-images">
							<div className="ads-image1">
								<img src="images/ads-image1.png" alt=""/>
							</div>
							<div className="ads-image2">
								<img src="images/ads-image2.png" alt=""/>
							</div>
						</div>
						<div className="ads-content">
							<h3>Prodide the best</h3>
							<h2>Furniture For You</h2>
							<p>
								Modern furniture refers to furniture produced from the late 19th
								century through the present that is influenced by modernism. Post-World War II 
								ideals of cutting excess, commodification, and practicality of materials in design 
								heavily influenced the aesthetic of the furniture.
							</p>
							<p>
								It was a tremendous departure from all furniture design that had gone
								before it. Ther was an opposition to the decorative arts, which included Art 
								Nouveau, Neoclassical, and Victorian styles.
							</p>
						</div>
					</div>
				</div>
        
      </div>
    </main>
  );
};

export default Home;
