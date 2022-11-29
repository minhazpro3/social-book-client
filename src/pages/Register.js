import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useAuth from "./../Hooks/useAuth";
import useFirebase from "./../Hooks/useFirebase";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user, setUser, createUser, updateName, setIsLoading } = useFirebase();
  const [warning, setWarning] = useState(true);
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/home";
  const onSubmit = async (data) => {
    if (data.password === data.password2) {
      await createUser(data.email, data.password)
        .then((userCredential) => {
          // setUser(userCredential.user);

          console.log(userCredential.user);
          navigate(url);
          setIsLoading(true);
        })
        .catch((error) => {
          setWarning(false);
        })
        .finally(() => setIsLoading(false));
    } else {
      setWarning(false);
      setFormError(true);
    }
    updateName(data.name);
  };
  return (
    <div className="container  ">
      <div className="d-flex justify-content-center">
        <div
          className="my-5  d-inline-block rounded-top"
          style={{ backgroundColor: "#8080ff" }}
        >
          <h2 className="text-white py-4 px-3">Register Now !!!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 px-3">
              <input
                className="w-100  rounded-pill px-2 border-0 py-1 form-control bg-muted "
                {...register("name")}
                required
                placeholder="User name"
                type="text"
              />
              <br />
              <input
                className="w-100 mt-2 rounded-pill px-2 border-0 py-1 form-control bg-muted "
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
                className=" w-100  rounded-pill px-2 border-0 py-1 form-control bg-muted "
                {...register("password2")}
                required
                placeholder="Confirm Password"
                type="password"
              />
              <br />

              <input
                style={{ backgroundColor: "#7733ff" }}
                className="w-100  text-white rounded-pill px-2 border-0 py-1 form-control bg-muted"
                type="submit"
              />
            </div>
            {formError ? (
              <div className="d-flex justify-content-center">
                {" "}
                <small className=" text-uppercase text-danger px-2 py-2 text-center">
                  Doesn't match password
                </small>
              </div>
            ) : (
              ""
            )}
          </form>
          <div className="d-flex justify-content-center"> </div>
          <div className="d-flex justify-content-center">
            {" "}
            <p className="text-white">
              Do you have an account. <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
