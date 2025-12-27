import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status ===404 ){
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oops! Page not found</h3>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return <Wrapper>
    <div>
      <h2>Oops! An unexpected error has occurred</h2>
    </div>
  </Wrapper>
  
};

export default Error;
