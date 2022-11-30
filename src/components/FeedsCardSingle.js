import React, { useRef } from "react";
import { Card, Dropdown } from "react-bootstrap";
import UpdatePost from "./UpdatePost";

const FeedsCardSingle = ({
  show,
  handleClose,
  feed,
  deleteHandler,
  setShow,
  setComment,
  setComment1,
  comment1,
  comment,
  like,
  setLike,
  commentSubmit,
}) => {
  return (
    <div className="col-12">
      <Card className="w-100 my-3">
        <div className="d-flex justify-content-center">
          <Card.Img className="w-50" variant="top" src={feed?.image} />
        </div>
        <Card.Body>
          <UpdatePost id={feed._id} show={show} handleClose={handleClose} />

          <Card.Title> ✍ Article</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="fs-3 mt-4">{feed.description}</Card.Text>
            <p className="fs-4 mb-5 ">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  className="fs-4 "
                  variant="white"
                  id="dropdown-basic"
                  size="sm"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => deleteHandler(feed._id)}>
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShow(true)}>
                    Update
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </p>
          </div>
          <Card.Text className="fs-4 opacity-50 ">
            I'have worked in UX for the better part of a decade. From now on, I
            plan to rei...
          </Card.Text>
          <div className="d-flex justify-content-around">
            {" "}
            <button
              onClick={() => setLike(!like)}
              className={`${like ? "border-0 btn btn-primary" : "border-0 "}`}
            >
              Like
            </button>
            <button onClick={() => setComment(!comment)} className="border-0 ">
              Comment
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {comment && (
              <input
                type="text"
                onKeyDown={(e) => commentSubmit(e.target.value)}
              />
            )}
          </div>
          {/* <div className="container">
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
                    </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeedsCardSingle;
