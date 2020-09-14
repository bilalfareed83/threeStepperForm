import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

interface props {
  handleNext: () => void;
}

const FormOne: React.FC<props> = ({ handleNext }) => {
  // export default function FormOne() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" />
    </form>
  );
};

export default FormOne;
