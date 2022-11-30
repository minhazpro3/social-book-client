import { Card, Dropdown } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdatePost from "./UpdatePost";
import FeedsCardSingle from "./FeedsCardSingle";

const FeedsCard = () => {
  const { user } = useFirebase();
  const [allFeeds, setAllFeeds] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(false);
  const { comment1, setComment1 } = useState("");

  console.log(allFeeds);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://social-app-server-production.up.railway.app/api/v1/user")
      .then((res) => res.json())
      .then((data) => {
        setAllFeeds(data.data);
        setLoading(false);
      });
  }, []);

  const deleteHandler = (id) => {
    const confirmT = window.confirm("Are you sure to delete ?");
    if (confirmT) {
      fetch(
        `https://social-app-server-production.up.railway.app/api/v1/user/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.data.acknowledged) {
            console.log(id);
            setAllFeeds(allFeeds?.filter((x) => x._id !== id));
          }
        });
    }
  };

  const commentSubmit = (e) => {
    setComment1(e);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="row">
            {allFeeds?.map((feed) => (
              <FeedsCardSingle
                key={feed?._id}
                show={show}
                handleClose={handleClose}
                feed={feed}
                setShow={setShow}
                deleteHandler={deleteHandler}
                setComment={setComment}
                setComment1={setComment}
                setLike={setLike}
                like={like}
                comment1={comment1}
                comment={comment}
                commentSubmit={commentSubmit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsCard;
