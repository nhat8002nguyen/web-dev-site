import React, { Fragment, useCallback, useState } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { newsService } from "services/newsService";
import { useDispatch } from "react-redux";
import { addNewsAction } from "redux/actions/newsAction";

const validationSchema = yup.object().shape({
  title: yup.string().required("Yêu cầu nhập tên bài viết"),
  bannerUrl: yup
    .string()
    .required("Yêu cầu url hình ảnh")
    .url("url không hợp lệ"),
  content: yup.string().required("Yêu cầu nhập nội dung bài viết "),
  mediaURL: yup.string().required("Yêu cầu nhập url").url("url không hợp lệ"),
});

const AddNews = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      bannerUrl: "",
      mediaURL: "",
      descr: "",
      hot: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAllTouched();
      addNewsAction(values);
    },
  });

  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);
  return (
    <Fragment>
      <h3 className="text-center"> Thêm tin mới</h3>
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
        <Form.Item label="Title">
          <Input name="title" onChange={formik.handleChange} />{" "}
          {formik.touched.title ? (
            <p className="text-danger">{formik.errors.title}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="BannerURL">
          <Input name="bannerUrl" onChange={formik.handleChange} />
          {formik.touched.bannerUrl ? (
            <p className="text-danger">{formik.errors.bannerUrl}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="MediaURL">
          <Input name="mediaURL" onChange={formik.handleChange} />
          {formik.touched.mediaURL ? (
            <p className="text-danger">{formik.errors.mediaURL}</p>
          ) : null}
        </Form.Item>
        <Form.Item label="Description">
          <Input name="descr" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Hot">
          <InputNumber name="hot" max={1} min={0} />
        </Form.Item>
        <Form.Item label="Content">
          <Input.TextArea name="content" onChange={formik.handleChange} />{" "}
          {formik.touched.content ? (
            <p className="text-danger">{formik.errors.content}</p>
          ) : null}
        </Form.Item>

        <Form.Item label="Thêm">
          <Button type="primary" htmlType="submit">
            Đồng ý
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default AddNews;
