import React, { useState } from "react";
import { ArrowDownward, ArrowUpward, PersonOutline } from "@material-ui/icons";
import { setExperienceValueDis } from "../../../../Redux/Actions";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";

const ResumeObjective = ({ setExperienceValue, textareaValue }) => {
  const [showEditor, setShowEditor] = useState(false);
  const handleChange = (content) => {
    setExperienceValue(content);
  };
  const handleClickShow = (e) => {
    setShowEditor(!showEditor);
  };
  return (
    <div>
      <div className="resume-objective">
        <div className="title">
          <div onClick={handleClickShow}>
            <PersonOutline />
            <h3>Resume objective</h3>
          </div>
          <div>
            <ArrowUpward />
            <ArrowDownward />
          </div>
        </div>

        {showEditor && (
          <Editor
            id="editor-text"
            initialValue={textareaValue}
            init={{
              height: 200,
            }}
            onEditorChange={handleChange}
          />
        )}
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
export default connect(mapState, mapDispatch)(ResumeObjective);
