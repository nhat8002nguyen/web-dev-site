import { ArrowRightOutlined } from '@ant-design/icons';
import { ImageLoader, MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerImg from 'images/banner-girl.png';
import adsChair from 'images/ads-chair.png';
import adsSalon from 'images/ads-salon.png';
import React from 'react';
import { Link } from 'react-router-dom';
import {HomeBlogShowCase, SubscribeView} from 'components/home';


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
        <div className="banner" style={{backgroundColor: "white"}}>
          <div className="banner-desc">
						<h2 className="app-font-family">BỘ MỚI 2021</h2>
            <h1 className="app-font-family">
							Mấu nội thất ghế gỗ
            </h1>
            <br />
            <Link to={SHOP} className="button">
              Mua sắm ngay&nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src="https://cdn.shopify.com/s/files/1/0657/8313/products/CH07_Shell_Chair-001.jpg?v=1571259704" alt="" /></div>
        </div>
        <div className="display">
          <div className="display-header">
						<h1 className="app-font-family">Hàng mới</h1>
						<p >
							Một số khách hàng của chúng tôi nói rằng họ tin tưởng chúng tôi và mua sản phẩm mà không hề do dự vì họ 
							tin tưởng chúng tôi và luôn hài lòng khi mua sản phẩm của chúng tôi.
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
              skeletonCount={3}
            />
          )}
        </div>
				<div className="banner">
					<div className="ads-images">
						<div className="ads-img ads-chair">
							<img src="https://shop.static.ingka.ikea.com/revamp/desk-chairs-for-home_20653.jpg" all=""></img>
						</div>
					</div>
					<div className="banner-desc">
						<h3 style={{marginBottom: 0}} className="app-font-family">Cung cấp tốt nhất</h3>
						<h2 className="app-font-family"><strong>Nội thất cho bạn</strong></h2>
						<p>
							Nội thất hiện đại là đồ nội thất được sản xuất từ cuối thế kỷ 19 đến nay chịu ảnh hưởng của chủ nghĩa hiện 
							đại. Những lý tưởng sau Thế chiến II về việc cắt giảm dư thừa, hàng hóa và tính thực dụng của vật liệu 
							trong thiết kế đã ảnh hưởng rất nhiều đến thẩm mỹ của đồ nội thất.
						</p>
						<p>
							Đó là một sự khởi đầu to lớn so với tất cả các thiết kế đồ nội thất trước đó. Có một sự phản đối đối với 
							nghệ thuật trang trí, bao gồm các phong cách Tân nghệ thuật, Tân cổ điển và Victoria.
						</p>
						<Link to="#" className="button">
              Đọc thêm&nbsp;
              <ArrowRightOutlined />
            </Link>
					</div>
				</div>
				<div className="display">
					<div className="display-header">
						<h1 className="app-font-family">Blog mới nhất</h1>
						<p>
							Một số khách hàng của chúng tôi nói rằng họ tin tưởng chúng tôi và mua sản phẩm của chúng tôi mà không hề 
							do dự vì họ tin chúng tôi và luôn hài lòng khi mua sản phẩm của chúng tôi.
						</p>
					</div>
					<HomeBlogShowCase />
					<SubscribeView />
				</div>
        
      </div>
    </main>
  );
};

export default Home;
