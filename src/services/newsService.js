import axios from "axios";

export class NewsService {
  getNewsList = () => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/news/read.php`,
      method: "GET",
    });
  };

  addNews = (formData) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/news/create.php`,
      method: "POST",
      data: formData,
    });
  };
  deleteNews = (id) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/news/delete.php`,
      method: "DELETE",
      data: {
        id: id,
      },
    });
  };

  getNewsDetail = (id) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/news/read_single.php?id=${id}`,
      method: "GET",
    });
  };

  editNews = (formData) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/news/update.php`,
      method: "PUT",
      data: formData,
    });
  };
}

export const newsService = new NewsService();
