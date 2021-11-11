import React from 'react';

export default function SubscribeView() {


	return (
		<div className="subscribe-view">
			<h3 className='app-font-family'>Các <span>Offers</span> đặc biệt cho người đăng ký</h3>
			<h1 className='app-font-family'>Nhận giảm giá ngay lập tức cho thành viên</h1> 
			<p className="text-thin">
				Đăng ký bản tin của chúng tôi và nhận tất cả tin tức mới nhất về các sản phẩm, chương trình khuyến mãi, ưu đãi 
				và giảm giá mới nhất
			</p>
			<div className="subscribe-form">
				<input type="email" placeholder='Enter your email here'></input>
				<div id='subscribe-btn'>ĐĂNG KÝ</div>
			</div>
		</div>

	)
}