import React from "react";
import "./Tiket.css";

import Footer from "../Component/footer/Footer";
import Header from "../Component/header/header";
import Menu from "../Component/bookingMenu/Menu";
import Box from "@mui/material/Box";

import Google from "../assests/google-play-badge 1.png";
import AppStory from "../assests/5a902db97f96951c82922874 1.png";
import {
  ThemeProvider,
  Typography,
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme,
} from "@mui/material";

let theme = unstable_createMuiStrictModeTheme();
theme = responsiveFontSizes(theme);

function Tiket() {
  return (
    <>
      <div className="container" position={"relative"}>
        <Header />
        <Menu />

        <Box className="mainbar">
          <Typography
            style={{
              fontSize: "37px",
              fontWeight: "600",
              marginBottom: "27px",
            }}
          >
            Top Most Popular Destinations
          </Typography>
          <Box>
            <div className="parent">
              {itemData.map((item, index) => (
                <div
                  key={index}
                  className={`div${index + 1} imgCon`}
                  style={{
                    backgroundImage: `url(${item.img})`,
                    position: "relative",
                  }}
                >
                  <Box
                    style={{
                      left: "10px",
                      position: "absolute",
                      bottom: "10px",
                    }}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography
                        variant="h5"
                        fontSize={"5vw"}
                        fontWeight={"600"}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontSize={"3vw"}
                        fontWeight={"600"}
                        variant="h6"
                      >
                        {item.author}
                      </Typography>
                    </ThemeProvider>
                  </Box>
                </div>
              ))}
            </div>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "32px",
              fontWeight: "600",
              textAlign: "center",
              width: "227px",
            }}
          >
            Download Expedia App !
          </Typography>
          <Box className="imggole">
            <img src={Google} alt="goole" />
            <img src={AppStory} alt="goole" />
          </Box>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default Tiket;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
];
