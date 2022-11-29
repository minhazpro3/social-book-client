import React from "react";
import { Button, Modal } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";

const CreatePost = ({ show, handleClose }) => {
  const { user } = useFirebase();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4 className="px-2  text-success font-bold  bg-opacity-25 py-2">
            Create post !
          </h4>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Hey <span className="text-success">{user?.displayName}</span>
          </h4>
          <div className=" ">
            <div className=" ">
              <form>
                <div>
                  <textarea
                    className="w-100 px-2"
                    type="text"
                    placeholder="What's on your mind ?"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="my-2">
                  <input type="file" placeholder="Upload file" />
                </div>
                <div>
                  <input
                    className="btn btn-success px-4 w-100"
                    type="submit"
                    value="Post"
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" disabled={true} onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={true} onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePost;
