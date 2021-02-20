import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "../../containers/button/button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ApiPost } from "../../helpers/api/ApiData";
import ProjectList from "./project-list";
import {
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 150,
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default function ProjectManager() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [projectManager, setProjectManager] = useState({});
  const [errors, setError] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleonChange = (e) => {
    let { name, value } = e.target;
    if (name === "form") {
      projectManager[name] = e.target.checked;
      setProjectManager({ ...projectManager });
    } else if (name === "siteAccessData") {
      projectManager[name] = e.target.checked;
      setProjectManager({ ...projectManager });
    } else if (name === "lotSize") {
      projectManager[name] = e.target.checked;
      setProjectManager({ ...projectManager });
    } else {
      setProjectManager((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!projectManager.projectName) {
      formIsValid = false;
      errors["projectName"] = "*Please Enter projectName";
    }
    setError(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    if (validateForm()) {
      try {
        const accountData1 = projectManager;
        ApiPost("project/add", accountData1)
          .then((res) => {
            setProjectManager("");
            handleClose();
            // toastr.success("Success", "Successfull Login");
          })
          .catch((err) => {
            console.log("Error");
            // toastr.error("Error", "Internal Server Error");
          });
      } catch (err) {
        console.log("error", err);
      }
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div onClick={handleClickOpen}>
            <Button name={"Create Project"} icon />
          </div>
        </CardContent>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
          <DialogContent>
            <div style={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className={classes.title}>
                    Project Name<span style={{ color: "red" }}> * </span>
                  </div>
                  <TextField
                    id="filled-required"
                    label="Project Name"
                    autoFocus
                    variant="outlined"
                    margin="dense"
                    name="projectName"
                    value={projectManager.projectName}
                    onChange={(e) => handleonChange(e)}
                  />
                  <span style={{ color: "red", top: "5px", fontSize: "10px" }}>
                    {" "}
                    {errors["projectName"]}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs>
                  <div className={classes.title}>Form</div>
                </Grid>
                <Switch
                  name="form"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  checked={projectManager.requestedTypeOfDrop}
                  onChange={(e) => handleonChange(e)}
                />
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs>
                  <div className={classes.title}>Site Access Data</div>
                </Grid>
                <Switch
                  name="siteAccessData"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  checked={projectManager.siteAccessData}
                  onChange={(e) => handleonChange(e)}
                />
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs>
                  <div className={classes.title}>Lot Size</div>
                </Grid>
                <Switch
                  name="lotSize"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  checked={projectManager.lotSize}
                  onChange={(e) => handleonChange(e)}
                />
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs>
                  <div className={classes.title}>Photo Settings</div>
                </Grid>
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs></Grid>
                <Grid item xs>
                  <div className={classes.title}>Orientation(Mobile)</div>
                </Grid>
                <Grid item xs>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1">
                      <FormControlLabel
                        value="portrait"
                        control={<Radio />}
                        label="Portrait"
                        name="Portrait"
                        checked={projectManager.photoOrientation}
                        onChange={(e) => handleonChange(e)}
                      />
                      <FormControlLabel
                        value="landscape"
                        control={<Radio />}
                        label="Landscape"
                        name="Landscape"
                        checked={projectManager.photoOrientation}
                        onChange={(e) => handleonChange(e)}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs></Grid>
                <Grid item xs>
                  <div className={classes.title}>Photo Size</div>
                </Grid>
                <Grid item xs>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    name="photoSize"
                    onChange={(e) => handleonChange(e)}
                    value={projectManager.photoSize}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"680 X 480"}>680 X 480</MenuItem>
                    <MenuItem value={"1280 X 1440"}>1280 X 1440</MenuItem>
                    <MenuItem value={"1920 X 1440"}>1920 X 1440</MenuItem>
                    <MenuItem value={"2560 X 1920"}>2560 X 1920</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid container spacing={3} style={{ alignItems: "center" }}>
                <Grid item xs></Grid>
                <Grid item xs>
                  <div className={classes.title}>Compression Quality</div>
                </Grid>
                <Grid item xs>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    name="compressionQualitys"
                    onChange={(e) => handleonChange(e)}
                    value={projectManager.compressionQualitys}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"0.95"}>0.95</MenuItem>
                    <MenuItem value={"0.90"}>0.90</MenuItem>
                    <MenuItem value={"0.85"}>0.85</MenuItem>
                    <MenuItem value={"0.80"}>0.80</MenuItem>
                    <MenuItem value={"0.75"}>0.75</MenuItem>
                    <MenuItem value={"0.70"}>0.70</MenuItem>
                    <MenuItem value={"0.65"}>0.65</MenuItem>
                    <MenuItem value={"0.60"}>0.60</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <div onClick={handleClose}>
              <Button color="primary" name={"Cancel"} />
            </div>
            <div onClick={handleSubmit}>
              <Button color="primary" name={"Submit"} />
            </div>
          </DialogActions>
        </Dialog>
        <ProjectList />
      </Card>
    </div>
  );
}
