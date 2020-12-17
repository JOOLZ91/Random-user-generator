import React from "react";

const ButtonFetchUsers = (props) => {
  return (
    <>
      <header>
        <div className="header">Welcome to random user generator!</div>
        <div className="line">
          <p className="head">
            Generate 5 users for filling databases and testing web API's in
            seconds without leaving the page
          </p>
        </div>
        <div className="footer">Copyright Filip Ruszala</div>
      </header>
      <div className="wrapper">
        <button className="btn" onClick={props.click}>
          Click here!
        </button>
      </div>
    </>
  );
};

export default ButtonFetchUsers;
