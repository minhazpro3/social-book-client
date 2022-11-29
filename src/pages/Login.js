import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useFirebase from "../Hooks/useFirebase";

export const Login = () => {
  const { setUser, setIsLoading, loginEmailPassword, resetPassword } =
    useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/home";
  const [warning, setWarning] = useState(false);
  const onSubmit = async (data) => {
    await loginEmailPassword(data.email, data.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {
        setWarning(true);
      })
      .finally(() => setIsLoading(false));
  };

  // const resetPass = (user) => {
  //   console.log(user.email);
  //   resetPassword(user.email);
  // };

  // <div className="d-flex justify-content-center my-5 py-5">
  //     <Spinner animation="grow" />
  //   </div>
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
          {/* <div className="d-flex justify-content-center">{"signError"}</div> */}
          <div className="d-flex justify-content-center">
            {" "}
            <p className="text-white">
              New user <Link to="register">Register</Link>
            </p>
            <p className="text-white ms-2 ">
              <button to="forget-password" className=" ">
                Forget
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
