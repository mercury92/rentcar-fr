import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import { Card, Col, Row, Button, InputNumber } from "antd";
import { withRouter } from "react-router-dom";
import localStorageService from "../services/localStorageService";



function Bookcar(props) {
  const { date } = props;
  console.log(date);
  const [cars, setCars] = useState([]);
  // const [amout, setAmout] = useState(1);

  

  const fetchData = async () => {
    try{
       console.log(date.startDate);
       console.log(date.endDate);
        const Cars = await axios.get(`/booking/${date.startDate}/${date.endDate}`);
    setCars(Cars.data);
    console.log(Cars.data)
   
    console.log("bookcar fecthdata")
    } catch(err){
      console.log(err)
    }
  
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  function onChange(value) {
    // setAmout(value);
  }

  const submitAll = async (car) => {
    const token = localStorageService.getToken();

    if (token) {
      await axios.post("/booking", {
        // amout,
        start_date: date.startDate,
        end_date: date.endDate,
        car_number: car.car_number,
        status: "PENDING",
      });
      // props.history.push("/bill");
    } else {
      props.history.push("/login");
    }
  };
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
           {cars.length?cars.map((car, index) => (
            <Col span={8} key={index}>
              <Card hoverable title={car.car_name} description={car.car_brand}>
                <div>{car.car_number}</div>
                <div>
                  <div>{car.car_brand}</div>
                  <div>
                    <img src={car.picture} width="200px" />
                  </div>

                </div>

                <div>
                  <Button type="primary" onClick={() => submitAll(car)}>
                    rent
                  </Button>
                </div>
              </Card>
            </Col>
          )) : <Col>non found</Col>
          } 
        </Row>
      </div>
      ,
    </div>
  );
}

export default withRouter(Bookcar);
