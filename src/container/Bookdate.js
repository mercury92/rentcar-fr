import React, { useState } from "react";
import { Form, DatePicker, TimePicker, Button, Col } from "antd";
import Bookcar from "../container/Bookcar";


const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

function Bookdate({ date, setDate }) {
  const onFinish = (fieldsValue) => {

    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    setDate({
      startDate: values["range-time-picker"][0],
      endDate: values["range-time-picker"][1],
    });

  };

  return (
    <>
      <Col span={8}>
        <div>
          <h1> Select date</h1>
        </div>
        <Form
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish}
        >
          <Form.Item name="range-time-picker" {...rangeConfig}>
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <div style={{ width: "100%" }}>
            <Button 
              type="primary"
              htmlType="submit"
              style={{ justifyContent: "flex-end" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Col>
      <Col span={12}>
        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.5929067730845!2d100.07134321473855!3d9.544051593164674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f0668ebe2e17%3A0x4c5cecd53de734d4!2sSamui%20SP%20Group%20car-bike%20Rental!5e0!3m2!1sth!2sth!4v1597376467852!5m2!1sth!2sth"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </Col>
   
    <Col span={20}>
   <Bookcar date={date}  />
    </Col>
    </>
  );
}

export default Bookdate;
