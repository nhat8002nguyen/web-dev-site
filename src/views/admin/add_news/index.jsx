import React, { Fragment, useState } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import { useFormik } from "formik";
import { newsService } from "services/newsService";
import { useDispatch } from "react-redux";
import { addNewsAction } from "redux/actions/newsAction";
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
    onSubmit: (values) => {
      addNewsAction(values);
    },
  });
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
          <Input name="title" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="BannerURL">
          <Input name="bannerUrl" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="MediaURL">
          <Input name="mediaURL" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="descr" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Hot">
          <InputNumber name="hot" max={1} min={0} />
        </Form.Item>
        <Form.Item label="Content">
          <Input.TextArea name="content" onChange={formik.handleChange} />
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
