import React from "react";
import "./Menu.css";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

function Menu() {
  const [headBtn, setHeadBtn] = React.useState("Stay");
  const [economy, setEconomy] = React.useState("");
  const [travel, setTravel] = React.useState("");
  const [handOne, setHandOne] = React.useState("");
  const [inputFrom, setInputFrom] = React.useState("");
  const [inputTo, setInputTo] = React.useState("");
  const [timeone, setTimeone] = React.useState([]);
  const [timeTo, setTimeTo] = React.useState([]);
  const [finalley, setFinalley] = React.useState("");

  const handleOpen = () => {
    setFinalley({
      headBtn,
      economy,
      travel,
      handOne,
      inputFrom,
      inputTo,
      timeone,
      timeTo,
    });
  };

  console.log("finalley", finalley);
  //   console.log(timeTo);
  //   console.log(timeone);
  //   console.log(inputFrom);
  //   console.log(inputTo);
  //   console.log(handOne);
  //   console.log(runBtn);
  //   console.log(handMult);
  //   console.log(economy);
  //   console.log(travel);
  //   console.log(headBtn);
  return (
    <Box className="menu-content" zIndex={999}>
      <Box className="menu-nav a">
        <Box className="menu-btns">
          <Link
            value="stay"
            onClick={(e) => setHeadBtn("Stay")}
            className={`${headBtn === "Stay" ? "headBtnActive" : ""}`}
          >
            Stay
          </Link>
          <Link
            onClick={() => setHeadBtn("Flight")}
            className={`${headBtn === "Flight" ? "headBtnActive" : ""}`}
          >
            Flight
          </Link>
          <Link
            onClick={() => setHeadBtn("Cars")}
            className={`${headBtn === "Cars" ? "headBtnActive" : ""}`}
          >
            Cars
          </Link>
          <Link
            onClick={() => setHeadBtn("Packages")}
            className={`${headBtn === "Packages" ? "headBtnActive" : ""}`}
          >
            Packages
          </Link>
          <Link
            onClick={() => setHeadBtn("Things")}
            className={`${headBtn === "Things" ? "headBtnActive" : ""}`}
          >
            Things to do
          </Link>
        </Box>

        <Box className="box-bar">
          <FormControl>
            <RadioGroup
              style={{ color: "black" }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="One-way"
                control={<Radio />}
                label="One-way"
                onChange={(e) => setHandOne(e.target.value)}
              />
              <FormControlLabel
                value="Return"
                control={<Radio />}
                label="Return"
                style={{ color: "black" }}
                onChange={(e) => setHandOne(e.target.value)}
              />

              <FormControlLabel
                value="Multi-city"
                control={<Radio />}
                label="Multi-city"
                onChange={(e) => setHandOne(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <Box className="accordion">
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  style={{ color: "blue" }}
                  value={travel}
                  onChange={(e) => setTravel(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>2 traveller</em>
                  </MenuItem>
                  <MenuItem value={"Express"}>Express</MenuItem>
                  <MenuItem value={"React"}>React</MenuItem>
                  <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  style={{ color: "blue" }}
                  value={economy}
                  onChange={(e) => setEconomy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Economy</em>
                  </MenuItem>
                  <MenuItem value={"Beznes"}>Beznes</MenuItem>
                  <MenuItem value={"Form"}>Form</MenuItem>
                  <MenuItem value={"Cofteble"}>Cofteble</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid container alignItems={"center"} sx={{ flexGrow: 1 }}>
            <Grid xs={12} sm={4.5} md={4} lg={4} xl={3.3} marginRight={"20px"}>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  onChange={(e) => setInputFrom(e.target.value)}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  placeholder="from"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightTakeoffIcon style={{ color: "blue" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid
              xs={2}
              sm={1.4}
              md={0.8}
              lg={0.7}
              xl={0.6}
              marginRight={"20px"}
            >
              <Button
                variant="outlined"
                color="success"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              >
                <SyncAltIcon style={{ fontsize: "10px" }} />
              </Button>
            </Grid>
            <Grid
              xs={12}
              sm={4.5}
              md={5}
              lg={5.2}
              xl={3.3}
              marginRight={"20px"}
            >
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  onChange={(e) => setInputTo(e.target.value)}
                  style={{ width: "100%", borderRadius: "10px" }}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="to"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightLandIcon style={{ color: "blue" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={12} lg={6} xl={2} className="dateprop">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(e) => setTimeone(e)} />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} lg={6} xl={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(e) => setTimeTo(e)} />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Box>
        <Box className="sabtn">
          <Button
            style={{
              width: "232px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "blue",
              color: "#FFF",
              fontsize: "16px",
              fontWeight: "700",
              borderRadius: "39px",
              lineHeight: "normal",
            }}
            onClick={handleOpen}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;
