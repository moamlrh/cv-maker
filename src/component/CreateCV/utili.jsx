import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {
  Check,
  Person,
  Description,
  Edit,
  ArrowRight,
  ArrowLeft,
} from "@material-ui/icons";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import PersonalComp from "./Perosnal/Perosnal";
import "./utili.scss";
import { connect } from "react-redux";
import { changeCvMakerTitle } from "../../Redux/Actions";
import ExperiencesComp from "./Experiences/Experiences";
import TemplateComp from "./Template/Template";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: <Person />,
    2: <Description />,
    3: <Edit />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Perosnal", "Experiences", "Template"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalComp />;
    case 1:
      return <ExperiencesComp />;
    case 2:
      return <TemplateComp />;
    default:
      return "Unknown step";
  }
}

function CustomizedSteppers({ setCvMakerTitle, templateURL }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(() => {
    if (activeStep === 0) {
      setCvMakerTitle("Personal details");
    } else if (activeStep === 1) {
      setCvMakerTitle("My experiences");
    } else if (activeStep === 2) {
      setCvMakerTitle("Select template");
    }
  }, [activeStep]);
  const downloadResume = (e) => {
    window.open(templateURL);
  };
  return (
    <div className={classes.root}>
      <Stepper
        className="stepper-title"
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="stepper-body">
        {getStepContent(activeStep)}
        <div className="btn">
          <div className="cont-btns">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              <ArrowLeft className="icon" /> <span>Back</span>
            </Button>
            {activeStep !== steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext} className="btn">
                <span>Next step</span> <ArrowRight className="icon" />
              </Button>
            ) : (
              <Button
                onClick={downloadResume}
                variant="contained"
                className="btn"
              >
                Download resume
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatch = (dispatch) => ({
  setCvMakerTitle: (title) => dispatch(changeCvMakerTitle(title)),
});
const mapState = (state) => ({
  templateURL: state.appReducer.templateURL,
});
export default connect(mapState, mapDispatch)(CustomizedSteppers);
