import React from "react";
import { connect } from "react-redux";
import Stepper from "./utili";
import "./Index.scss";

const index = ({ cvMakerTitle }) => {
  console.log(cvMakerTitle)
  return (
    <div className="container">
      <h1>{cvMakerTitle}</h1>
      <Stepper />
    </div>
  );
};

const mapState = (state) => ({
  cvMakerTitle: state.appReducer.cvMakerTitle,
});

export default connect(mapState)(index);
