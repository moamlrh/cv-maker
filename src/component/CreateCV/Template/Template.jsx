import React, { useState } from "react";
import "./Template.scss";
import img1 from "../../../utils/images/1.png";
import img4 from "../../../utils/images/4.jpg";
import img2 from "../../../utils/images/2.jpg";
import img3 from "../../../utils/images/3.png";
import img5 from "../../../utils/images/5.png";
import img6 from "../../../utils/images/6.jpg";
import img7 from "../../../utils/images/7.jpg";
import img8 from "../../../utils/images/8.jpg";
import img9 from "../../../utils/images/9.jpg";
import { CheckCircle } from "@material-ui/icons";
import { setURLTemplateSelected } from "../../../Redux/Actions";
import { connect } from "react-redux";

const templates = [
  { id: 1, title: "Audcland", img: img1, selected: true },
  { id: 2, title: "Princeton", img: img4 },
  { id: 3, title: "Edinburgh", img: img2 },
  { id: 4, title: "Otago", img: img3 },
  { id: 5, title: "Berkeley", img: img5 },
  { id: 6, title: "Oxford", img: img6 },
  { id: 7, title: "Stanford", img: img7 },
  { id: 8, title: "Cambridge", img: img8 },
  { id: 9, title: "Audcland", img: img9 },
];

const Template = ({setTemplateSelectedURL}) => {
  const [selected, setSelected] = useState(1);
  const handleTemplateClick = (id,url) => {
    setSelected(id);
    setTemplateSelectedURL(url)
  };
  return (
    <div className="templates">
      {templates.map((temp, ind) => (
        <div
          key={ind}
          onClick={() => handleTemplateClick(temp.id,temp.img)}
          className={`template ${temp.id === selected && "selected"}`}
        >
          {temp.id === selected && <CheckCircle className="selected-icon" />}
          <h3>{temp.title}</h3>
          <img src={temp.img} alt={temp.title} />
        </div>
      ))}
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  setTemplateSelectedURL: (url) => dispatch(setURLTemplateSelected(url)),
});

export default connect(null,mapDispatch)(Template);
