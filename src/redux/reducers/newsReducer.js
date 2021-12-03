const initialState = {
  newsList: [
    {
      id: 1,
      hot: false,
      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/24/ke-tu-tivi-go-cong-nghiep(1).jpg",
      mediaURL:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/25/ve-sinh-tu-bep-go-cong-nghiep(1).jpeg",
      title:
        "Mẫu tủ bếp gỗ công nghiệp giá rẻ, chất lượng được chuộng hiện nay",
      content:
        "Nhắc đến những món đồ nội thất trong không gian bếp, cái tên tủ bếp là một món đồ được đề cập đầu tiên. Điều này cho chúng ta thấy sức ảnh hưởng và tầm quan trọng  của tủ bếp trong tổ ấm của gia đình. Tủ bếp là nơi bảo quản và chứa đựng những thực phẩm khô cũng như những món đồ dùng tiện ích trong phòng bếp như nồi, niêu, xoong, chảo, bát đĩa...vv. Bên cạnh công năng chính, tủ bếp gỗ công nghiệp còn góp phần mang đến sự sang trọng và lịch sự cho không gian căn bếp.",
      descr:
        "Nâng tầm đẳng cấp cho không gian sống bằng những mẫu tủ bếp gỗ công nghiệp sang trọng. Sở hữu 1 kiểu dáng thiết kế đặc biệt, độc đáo và mới mẻ, tủ bếp gỗ An Cường luôn cuốn hút được sự quan tâm và chú ý của đông đảo quý khách hàng.",
      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 2,
      hot: false,

      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/24/ve-sinh-tu-bep-go-cong-nghiep.jpg",
      mediaURL:
        "https://cdn.shopify.com/s/files/1/0077/2970/9137/articles/blog_1.png?v=1549080721",
      title: "Hậu quả của việc không vệ sinh tủ bếp",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",

      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 3,
      hot: false,

      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/18/giuong-ngu-go-cong-nghiep-cho-be(5)_1.jpg",
      mediaURL:
        "https://cdn.shopify.com/s/files/1/0077/2970/9137/articles/blog_3.png?v=1549080721",
      title: "Chiêm ngưỡng top 40+ tủ quần áo gỗ công nghiệp cho bé ",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",

      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 4,
      hot: false,
      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/22/cua-go-cong-nghiep-loi-xanh(24).jpg",
      mediaURL:
        "https://cdn.shopify.com/s/files/1/0077/2970/9137/articles/blog_2.png?v=1549080721",
      title: "Top 25 mẫu cửa gỗ công nghiệp lõi xanh giá rẻ chất lượng",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",
      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 5,
      hot: false,

      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/24/ve-sinh-tu-bep-go-cong-nghiep.jpg",
      mediaURL:
        "https://cdn.shopify.com/s/files/1/0077/2970/9137/articles/blog_5.png?v=1549080721",
      title: "Standard dummy text ever since",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",

      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 6,
      hot: false,

      banner:
        "https://thietkenoithat.com/Portals/0/xNews/uploads/2021/11/24/ve-sinh-tu-bep-go-cong-nghiep.jpg",
      mediaURL:
        "https://cdn.shopify.com/s/files/1/0077/2970/9137/articles/blog_7.png?v=1549080721",
      title: "Standard dummy text ever since",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",

      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 7,
      hot: true,

      banner:
        "https://mcdn2.coolmate.me/uploads/November2021/maxresdefault-160771422156097410885.jpg",
      mediaURL:
        "https://lh5.googleusercontent.com/a_9nWSMDE5Yhcoajfh-aHZdJNp-w6mvt1OIpYGrm3aSOEyVCx6NuhB4CpDNZmPl3UDyl-zUb4A738WsuPPWpvUAllM-SlW6gEXpnfLQNVQZ5flFkuUrGIlhqtY7dSxWFoYSlpUQF",
      title: "Ngày 12/12 là ngày gì? Những điều cần biết về ngày 12/12",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",
      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
    {
      id: 8,
      hot: true,

      banner:
        "https://mcdn2.coolmate.me/uploads/November2021/maxresdefault-160771422156097410885.jpg",
      mediaURL:
        "https://lh5.googleusercontent.com/a_9nWSMDE5Yhcoajfh-aHZdJNp-w6mvt1OIpYGrm3aSOEyVCx6NuhB4CpDNZmPl3UDyl-zUb4A738WsuPPWpvUAllM-SlW6gEXpnfLQNVQZ5flFkuUrGIlhqtY7dSxWFoYSlpUQF",
      title: "Ngày 12/12 là ngày gì? Những điều cần biết về ngày 12/12",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",
      content2:
        "Đứng trên lập trường của 1 người tiêu dùng bạn sẽ lựa chọn mẫu nội thất tủ bếp nào cho không gian nấu ăn của gia đình? Nếu vẫn còn phân vân với những mẫu tủ bếp nào cho không gian ấm cúng, đoàn tụ của gia đình. Hãy tham khảo và cân nhắc những mẫu tủ bếp gỗ An Cường hiện đại, sang trọng, giá tốt được thiết kế thi công sản xuất bởi Morehome.",

      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },

    {
      id: 9,
      hot: true,

      banner:
        "https://mcdn2.coolmate.me/uploads/November2021/maxresdefault-160771422156097410885.jpg",
      mediaURL:
        "https://lh5.googleusercontent.com/a_9nWSMDE5Yhcoajfh-aHZdJNp-w6mvt1OIpYGrm3aSOEyVCx6NuhB4CpDNZmPl3UDyl-zUb4A738WsuPPWpvUAllM-SlW6gEXpnfLQNVQZ5flFkuUrGIlhqtY7dSxWFoYSlpUQF",
      title: "Ngày 12/12 là ngày gì? Những điều cần biết về ngày 12/12",
      content:
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. We are the of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia quuntur magni dolores eos.Some of our customer say’s that they trust us and buy our product without any gitation because they can Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      descr:
        "Ngày 12/12 là một trong những ngày được các tín đồ mua sắm mong chờ dịp cuối năm. Vậy ngày 12/12 là ngày gì? Cùng Coolmate tìm hiểu nhanh những điều cần biết về ngày 12/12 nhé!",
      author: "Diana Demo Admin",
      date: "01 February, 2019",
    },
  ],
  newsDetail: {},
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NEWS":
      let cloneNews = payload;
      return { ...state, newsDetail: cloneNews };
    default:
      return { ...state };
  }
};
