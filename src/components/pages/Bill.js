import React,{useEffect,useState} from 'react'
import axios from "../../config/axios";

function Bill(props) {
    const [bill,setBill] = useState([]);
    const fetchdata = async () => {
        const mydata = await axios.get("/profile/bill");
        setBill(mydata.data.myBillList)
        console.log(mydata.data);
      };
    
      useEffect(() => {
        fetchdata();
      }, []);


    return (
        <div>
          {bill.map((bill,index)=>{ 
              return <div key={index}>
              bill no:{bill.bill_no}<br/>
              car number:{bill.car_number}<br/>
              start date:{bill.start_date}<br/>
              end date:{bill.end_date}<br/>
              bill total:{bill.total}<br/>
              {/* amout:{bill.amout} */}
              </div>
          })}
        </div>
    )
}

export default Bill
