import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../Hooks/useFirebase";

const UpdatePost = ({ show, handleClose, id }) => {
  const { user } = useFirebase();
  const [imgUrl, setImgUrl] = useState();
  const [btnHide, setBtnHide] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData1 = {
      description: data.description,
      image: imgUrl,
    };

    axios
      .put(
        `https://social-app-server-production.up.railway.app/api/v1/user/${id}`,
        formData1
      )
      .then((res) => {
        console.log(res.data.data.acknowledged);
        if (res.data.data.acknowledged) {
          alert("success");
          reset();
          setBtnHide(true);
        }
      });
  };

  const setImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("key", "d45a4ad9a09ad1464075aa3c82125b64");
    formData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        if (res.data) {
          alert("image updated");
          setImgUrl(res.data.data.url);
          setBtnHide(false);
        }
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4 className="px-2  text-success font-bold  bg-opacity-25 py-2">
            Update post !
          </h4>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Hey <span className="text-success">{user?.displayName}</span>
          </h4>
          <div className=" ">
            <div className=" ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <textarea
                    {...register("description")}
                    className="w-100 px-2"
                    type="text"
                    required
                    placeholder="What's on your mind ?"
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="my-2">
                  <input
                    {...register("image")}
                    type="file"
                    accept="image/*"
                    required
                    placeholder="Upload file"
                    onChange={setImage}
                  />
                </div>
                <div>
                  <input
                    className="btn btn-success px-4 w-100"
                    disabled={btnHide ? true : false}
                    type="submit"
                    value="Update"
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

export default UpdatePost;
