import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Spinner } from "react-bootstrap";

const Forget = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {};

  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-center">
        <div
          className="my-5  d-inline-block rounded-top"
          style={{ backgroundColor: "#8080ff" }}
        >
          <h2 className="text-white py-4 px-3">
            If you want <br /> forget password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 px-3">
              <input
                className=" w-100 my-2 rounded-pill px-2 border-0 py-1 form-control bg-muted "
                {...register("email")}
                required
                placeholder="Enter used email"
                type="email"
              />
              <br />

              <input
                style={{ backgroundColor: "#7733ff" }}
                className="w-100  text-white rounded-pill px-2 border-0 py-1 form-control bg-muted"
                type="submit"
              />
            </div>
          </form>

          <div className="d-flex justify-content-center">
            {" "}
            <p className="text-white">
              Remember password. <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
