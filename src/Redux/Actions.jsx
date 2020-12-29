export const ACTIONS = {
  cvMakerTitle: "CVMAKERTITLE",
  setExperienceValueDis: "setExperienceValueDis",
  setURLTemplateSelected: "setURLTemplateSelected",
};

export const changeCvMakerTitle = (title) => ({
  type: ACTIONS.cvMakerTitle,
  payload: title,
});
export const setExperienceValueDis = (value) => ({
  type: ACTIONS.setExperienceValueDis,
  payload: value,
});
export const setURLTemplateSelected = (url) => ({
  type: ACTIONS.setURLTemplateSelected,
  payload: url,
});
