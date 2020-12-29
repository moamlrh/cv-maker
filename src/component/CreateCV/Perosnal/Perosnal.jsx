import { Container, Select, TextField } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React, { useState } from "react";
import "./Perosnal.scss";
import logo from '../../../utils/images/account-icon.png'


const Perosnal = () => {
  const [perosnImage, setPersonImgae] = useState(logo);
  const handleCLickImage = (e) => {
    document.querySelector(".file-upload").click();
  };
  const handleChangeFile = ({ target }) => {
    const imgURL = window.URL.createObjectURL(target.files[0]);
    setPersonImgae(imgURL);
  };
  return (
    <Container>
      <div className="personal">
        <div className="title">
          <h3>Personal details</h3>
          <div>
            <span>Resume language</span>
            <Select native>
              <option>English</option>
              <option>Arabic</option>
            </Select>
          </div>
        </div>
        <div className="informations">
          <div className="image-name">
            <div className="image-upload">
              <img src={perosnImage} alt="placekitten" />
              <div className="upload-text" onClick={handleCLickImage}>
                <CloudUpload />
              </div>
              <input
                accept="image/gif,image/jpeg,image/jpg,image/png"
                className="file-upload"
                type="file"
                onChange={handleChangeFile}
              />
            </div>
            <div>
              <TextField
                className="btn"
                variant="outlined"
                label="First name*"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                className="btn"
                variant="outlined"
                label="Last name*"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </div>
          <div className="other-info">
            <div>
              <TextField
                variant="outlined"
                label="Email address*"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                variant="outlined"
                label="Phone number*"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <TextField
              className="address"
              variant="outlined"
              label="Address*"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <div>
              <TextField
                variant="outlined"
                label="Zip code*"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                variant="outlined"
                label="City/Town*"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Perosnal;
