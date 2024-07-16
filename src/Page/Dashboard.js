import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DemoBook from "../Components/DemoBook";
import AddRanchForm from "./AddRanchForm";
import NoteList from "../Components/NoteList";
import TaskList from "../Components/TaskList";
import { MdNotificationsActive } from "react-icons/md";
import img from "../images/portrait-fashionable-woman-oversized-sweater-removebg-preview.png"
const Profile = () => {
  const [allFormData, setAllFormData] = useState([]);
  const [tab, setTab] = useState(1);

  const onSave = (data) => {
    setAllFormData((prevData) => [...prevData, data]);
    setTab(1);
  };

  return (
    <>
      <div className="container py-1 ">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h4>
            <span className="demo-title">Demo</span>Book
          </h4>
          <div className="d-flex gap-3 align-items-center">
            <MdNotificationsActive size={25} color="red"/>
            <div>
             <div className="d-flex align-items-center gap-1">
              <div style={{borderRadius:"50%"}}>
              <img src={img} width={50} height={30} />
              </div>
             
              <div>
               <p style={{fontSize:"15px",fontWeight:600}} className="mb-0">Moni Roy</p>
                <p className="mb-0" style={{fontSize:"10px"}}>Admin</p>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-2 profile_sidebar px-0">
            <div className="border_right">
              <div className="px-2">
                <Link to="#" style={{ color: "black" }}>
                  <p
                    className={`mb-0 py-3  ${
                      tab == 1 ? "active" : "text-black"
                    }`}
                    onClick={() => setTab(1)}
                  >
                    {" "}
                    Dashboard
                  </p>
                </Link>

                <Link to="#" style={{ color: "black" }}>
                  <p
                    className={`mb-0 py-3 ${
                      tab == 6 ? "active" : "text-black"
                    }`}
                    onClick={() => setTab(6)}
                  >
                    {" "}
                    Note Lists
                  </p>
                </Link>

                <Link to="#" style={{ color: "black" }}>
                  <p
                    className={`mb-0 py-3 ${
                      tab == 9 ? "active" : "text-black"
                    }`}
                    onClick={() => setTab(9)}
                  >
                    {" "}
                    Task Lists
                  </p>
                </Link>

                <Link to="#" style={{ color: "black" }}>
                  <p
                    className={`mb-0 py-3 ${
                      tab == 7 ? "active" : "text-black"
                    }`}
                    onClick={() => setTab(7)}
                  >
                    {" "}
                    Users
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-10 px-0">
            {tab === 1 ? (
              <DemoBook setTab={setTab} allFormData={allFormData} />
            ) : tab === 2 ? (
              <AddRanchForm setData={onSave} setTab={setTab} />
            ) : tab === 6 ? (
              <NoteList />
            ) : tab === 9 ? (
              <TaskList />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
