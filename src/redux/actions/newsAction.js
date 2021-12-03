import { history } from "routers/AppRouter";

const { newsService } = require("services/newsService");

export const addNewsAction = (formData) => {
  newsService
    .addNews(formData)
    .then((res) => {
      alert("Thêm thành công");
      history.push("/admin/news");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteNewsAction = (id) => {
  newsService
    .deleteNews(id)
    .then((res) => {
      alert("Xóa thành công");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
