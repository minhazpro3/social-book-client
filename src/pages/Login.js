import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-center">
        <div
          className="my-5  d-inline-block rounded-top"
          style={{ backgroundColor: "#8080ff" }}
        >
          <h2 className="text-white py-4 px-3">Please Login !!!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 px-3">
              <input
                className="w-100  rounded-pill px-2 border-0 py-1 form-control bg-muted "
                {...register("email")}
                required
                placeholder="E-mail"
                type="email"
              />
              <br />

              <input
                className=" w-100 my-2 rounded-pill px-2 border-0 py-1 form-control bg-muted "
                {...register("password")}
                required
                placeholder="Password"
                type="password"
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
              Don't have an account. <Link to="register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
