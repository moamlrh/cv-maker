import { ACTIONS } from "./Actions";

const initialState = {
  cvMakerTitle: "Personal details",
  templateURL:''
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.cvMakerTitle:
      return { ...state, cvMakerTitle: payload };
    case ACTIONS.setURLTemplateSelected:
      return {...state, templateURL: payload}
    default:
      return state;
  }
};

const experienceState = {
  textarea: "",
};

export const experiencesReducer = (
  state = experienceState,
  { type, payload }
) => {
  switch (type) {
    case ACTIONS.setExperienceValueDis:
      return { ...state, textarea: payload };
    default:
      return state;
  }
};
