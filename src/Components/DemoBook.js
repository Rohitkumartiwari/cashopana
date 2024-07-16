import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";
const DemoBook = ({ setTab, allFormData }) => {
  const {list}=useContext(MyContext);
  console.log(list, "list");
  return (
    <div className="demobook-wrapper px-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-3">
          <span className="demo-title">Demo</span>Book Dashboard
        </h3>
        <div>
          <button className="add-ranch" onClick={() => setTab(2)}>
            Add Ranch
          </button>
        </div>
      </div>

<table className="table">
        <thead>
          <tr>
            <th scope="col">Ranch Name</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Contact Email</th>
            <th scope="col">Contact Mobile</th>
            <th scope="col">Zipcode</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        {allFormData?.length>0? 
        <tbody>
          {allFormData?.map((item, index) => {
            return (
              <tr key={index}>
                <td scope="row">Ranch{index + 1}</td>
                <td>{item?.contactPerson}</td>
                <td>{item?.email}</td>
                <td>{item?.phoneNumber}</td>
                <td>{item?.zipCode}</td>
                <td>{item?.city}</td>
                <td>{item?.state}</td>
              </tr>
            );
          })}
        </tbody>:<p className="text-center py-2">Kindly Add Ranch</p>}
      </table>
     
    </div>
  );
};

export default DemoBook;
