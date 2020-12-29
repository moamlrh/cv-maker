import React, { useState } from "react";
import {
  ArrowDownward,
  ArrowUpward,
  PersonOutline,
} from "@material-ui/icons";
import { setExperienceValueDis } from "../../../../Redux/Actions";
import { connect } from "react-redux";
import Hobby from "./Hobby";

const Interests = ({item}) => {
  const [showEditor, setShowEditor] = useState(false);
  const [showHobby, setShowHobby] = useState(false);
  const addAnotherHobby = (e) => {
    setShowEditor(true);
  };
  const handleClickShow = (e) => {
    setShowHobby(!showHobby);
  };
  return (
    <div>
      <div className="interests">
        <div className="title">
          <div onClick={handleClickShow}>
            <PersonOutline />
            <h3>{item.title}</h3>
          </div>
          <div>
            <ArrowUpward />
            <ArrowDownward />
          </div>
        </div>
        {
          showHobby && <Hobby setShowEditor={setShowEditor} showEditor={showEditor} addAnotherHobby={addAnotherHobby} />
        }
      </div>
    </div>
  );
};
const mapState = (state) => ({
  textareaValue: state.experiencesReducer.textarea,
});

const mapDispatch = (dispatch) => ({
  setExperienceValue: (value) => dispatch(setExperienceValueDis(value)),
});
export default connect(mapState, mapDispatch)(Interests);
