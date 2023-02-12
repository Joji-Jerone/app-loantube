import React, { useContext } from "react";

import { Button, Container, Box } from "@mui/material";

import Loan from "./Loan";
import Personal from "./Personal";
import Residential from "./Residential";
import Financial from "./Financial";
import Finish from "./Finish";
import { mainContext } from "../mainContext";

import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "../assets/step1.svg";
import Step2 from "../assets/step2.svg";
import Step3 from "../assets/step3.svg";
import Step4 from "../assets/step4.svg";
import Step5 from "../assets/step5.svg";
import PropTypes from "prop-types";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 45,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#E27F94",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#E27F94",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#F9F9F9",
  zIndex: 1,
  color: "#fff",
  width: 75,
  height: 75,
  display: "flex",
  border: "10px solid #fff",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#C60029",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#E27F94",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img src={Step1} height="30px" />,
    2: <img src={Step2} height="30px" />,
    3: <img src={Step3} height="30px" />,
    4: <img src={Step4} height="30px" />,
    5: <img src={Step5} height="30px" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

function Main() {
  const { stepNo, setStep } = useContext(mainContext);
  const components = [
    <Loan />,
    <Personal />,
    <Residential />,
    <Financial />,
    <Finish />,
  ];

  const steps = [
    "Loan Details",
    "Personal Details",
    "Residential Details",
    "Financial Details",
    "Password Details",
  ];

  function submitHandler(e) {
    e.preventDefault();
    setStep((prev) => {
      return prev + 1;
    });
  }

  return (
    <Container maxWidth="2xl">
      <Box
        maxWidth="md"
        sx={{
          m: "auto",
        }}
      >
        <Stepper
          sx={{ my: 4, display: { xs: "none", md: "flex" } }}
          alternativeLabel
          activeStep={stepNo - 1}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={submitHandler}>
          {components.map((e, i) => {
            if (stepNo >= i + 1) return e;
          })}
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ my: 3, display: "block", ml: "auto" }}
          >
            {stepNo < 5 ? "Next" : "Compare Loans"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Main;
