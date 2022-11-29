import React, { useState } from "react";
import CreatePost from "./CreatePost";
import profileImg from "../images/image.png";
import useFirebase from "../Hooks/useFirebase";

const Feeds = () => {
  const [show, setShow] = useState(false);
  const { user } = useFirebase();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="w-50 shadow-lg pe-5">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="w-25 d-flex justify-content-center">
              <img className="w-50" src={profileImg} alt="" />
            </div>
            <div className="w-75">
              <input
                className="w-100 px-2"
                placeholder={`What is on your mind?${user?.displayName}`}
                onClick={handleShow}
                type="button "
              />
            </div>
          </div>
        </div>
      </div>
      <CreatePost show={show} handleClose={handleClose} />
    </div>
  );
};

export default Feeds;
