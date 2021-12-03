import axios from "axios";

export class ContactService {
  getContactList = () => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/information/read.php`,
      method: "GET",
    });
  };

  deleteContact = (id) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/information/delete.php`,
      method: "DELETE",
      data: {
        id: id,
      },
    });
  };

  getContactDetail = (id) => {
    return axios({
      url: `http://localhost/php_rest_myblog/api/information/read_single.php?id=${id}`,
      method: "GET",
    });
  };
}
export const contactService = new ContactService();
