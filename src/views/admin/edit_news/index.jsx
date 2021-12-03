import React, { useState, Fragment, useEffect } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import { useFormik } from "formik";
import { newsService } from "services/newsService";
import { useDispatch } from "react-redux";
import { getNewsDetailAction } from "redux/actions/newsAction";
import { history } from "routers/AppRouter";

function EditNews(props) {
  let [newsDetail, setNewsDetail] = useState({});

  const { id } = props.match.params;
  useEffect(() => {
    newsService
      .getNewsDetail(id)
      .then((res) => {
        console.log(res.data);
        setNewsDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      id: newsDetail.id,
      title: newsDetail.title,
      bannerUrl: newsDetail.bannerUrl,
      mediaURL: newsDetail.mediaURL,
      descr: newsDetail.descr,
      hot: newsDetail.hot,
      content: newsDetail.content,
    },
    onSubmit: (values) => {
      newsService
        .editNews(values)
        .then((res) => {
          alert("Chỉnh sửa thành công");
          history.push("/admin/news");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Fragment>
      <h3 className="mt-5">Edit News</h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Mã tin">
          <Input
            name="id"
            value={formik.values.id}
            disabled
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Title">
          <Input
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="BannerURL">
          <img src={formik.values.bannerUrl} alt="bannerURL" />
          <Input
            value={formik.values.bannerUrl}
            name="bannerUrl"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="MediaURL">
          <img src={formik.values.mediaURL} alt="mediaURL" />

          <Input
            value={formik.values.mediaURL}
            name="mediaURL"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            value={formik.values.descr}
            name="descr"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Hot">
          <InputNumber value={formik.values.hot} name="hot" max={1} min={0} />
        </Form.Item>
        <Form.Item label="Content">
          <Input.TextArea
            value={formik.values.content}
            name="content"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Thêm">
          <Button type="primary" htmlType="submit">
            Đồng ý
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default EditNews;
