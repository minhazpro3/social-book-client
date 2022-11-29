import { Card, Dropdown } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedsCard = () => {
  const { user } = useFirebase();
  const [allFeeds, setAllFeeds] = useState([]);

  console.log(allFeeds.data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/user")
      .then((res) => res.json())
      .then((data) => {
        setAllFeeds(data.data);
        setLoading(false);
      });
  }, []);

  const deleteHandler = (id) => {
    const confirmT = window.confirm("Are you sure to delete ?");
    if (confirmT) {
      fetch(`http://localhost:5000/api/v1/user/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
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

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="row">
            {allFeeds?.map((feed) => (
              <div key={feed._id} className="col-12">
                <Card className="w-100 my-3">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="w-50"
                      variant="top"
                      src={feed?.image}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title> ✍ Article</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="fs-3 mt-4">
                        {feed.description}
                      </Card.Text>
                      <p className="fs-4 mb-5 ">
                        {" "}
                        <Dropdown>
                          <Dropdown.Toggle
                            className="fs-4 "
                            variant="white"
                            id="dropdown-basic"
                            size="sm"
                          >
                            ...
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => deleteHandler(feed._id)}
                            >
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Event
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Education
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Jobs
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </p>
                    </div>
                    <Card.Text className="fs-4 opacity-50 ">
                      I'have worked in UX for the better part of a decade. From
                      now on, I plan to rei...
                    </Card.Text>
                    <div className="container">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center gap-3">
                          <div>
                            <img src={"profile"} alt="" />
                          </div>
                          <p className="mt-2 fs-4">Sharthak Kamra</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center  gap-4">
                          <p className="fs-5 mt-2">👁 1.4k views</p>

                          <div className="d-flex justify-content-center align-items-center">
                            <img width={20} height={20} src={"share"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsCard;
