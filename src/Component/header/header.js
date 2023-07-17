import React, { useState } from "react";
import {
  Box,
  Link,
  ThemeProvider,
  Typography,
  responsiveFontSizes,
  unstable_createMuiStrictModeTheme,
} from "@mui/material";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";

let theme = unstable_createMuiStrictModeTheme();
theme = responsiveFontSizes(theme);

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Box className="header">
        <Box className="header-menu-title">
          <header>
            <div className="paddingSmall">
              <div className="logonew">
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="141"
                    height="42"
                    viewBox="0 0 141 42"
                    fill="none"
                  >
                    <path
                      d="M67.6532 31.9969H63.3808C63.3616 31.9969 63.3501 31.993 63.3387 31.9796L59.6575 27.4834L55.9725 31.9796C55.9648 31.993 55.9514 31.9969 55.9323 31.9969H52.5113C52.4902 31.9969 52.4749 31.9873 52.4596 31.9643C52.4539 31.9509 52.4539 31.9261 52.4673 31.9108L57.8896 25.2506L52.5304 18.6535C52.5151 18.6305 52.5151 18.6114 52.5209 18.5904C52.5304 18.5789 52.5515 18.5597 52.5687 18.5597H56.843C56.8564 18.5597 56.8717 18.5674 56.8832 18.5865L60.1128 22.5892L63.3999 18.5846C63.4095 18.5674 63.4248 18.5597 63.4401 18.5597H66.9242C66.9452 18.5597 66.9663 18.5789 66.9739 18.5904C66.9835 18.6114 66.9797 18.6344 66.9663 18.6535L61.8788 24.7627L67.6895 31.9108C67.7048 31.9261 67.7106 31.9509 67.6991 31.9643C67.6895 31.9873 67.6704 31.9969 67.6532 31.9969Z"
                      fill="white"
                    />
                    <path
                      d="M90.7771 20.9288C88.8848 20.9288 87.5933 22.0768 87.2241 24.0723H93.6604V23.9441C93.6604 22.3465 92.4837 20.9288 90.7771 20.9288ZM96.98 26.1196C96.9704 26.1349 96.9513 26.1444 96.9341 26.1444H87.1552C87.358 28.4213 88.837 29.7185 91.2305 29.7185C92.7038 29.7185 94.2688 29.2153 96.4806 28.0386C96.5208 28.0156 96.561 28.0501 96.561 28.0922L96.5571 31.0999C96.5533 31.1247 96.5418 31.1401 96.5246 31.1458C94.4678 32.0125 92.4015 32.6037 90.7771 32.6037C86.5659 32.6037 83.5142 29.5348 83.5142 25.3083C83.5142 21.0818 86.5659 18.0129 90.7771 18.0129C94.619 18.0129 97.0871 20.6016 97.0871 24.1622C97.0871 24.7382 96.9876 26.0775 96.98 26.1196Z"
                      fill="white"
                    />
                    <path
                      d="M116.845 15.7859C115.645 15.7859 114.67 14.8254 114.67 13.643C114.67 12.4261 115.645 11.4408 116.845 11.4408C118.045 11.4408 119.022 12.4261 119.022 13.643C119.022 14.8254 118.045 15.7859 116.845 15.7859ZM115.089 31.9973C115.054 31.9973 115.033 31.9762 115.033 31.9418V18.6157C115.033 18.5889 115.052 18.5678 115.075 18.5621H118.607C118.636 18.5678 118.651 18.5889 118.651 18.6157V31.9418C118.651 31.9762 118.628 31.9973 118.599 31.9973H115.089Z"
                      fill="white"
                    />
                    <path
                      d="M74.1128 29.9902C73.4756 29.9902 72.8232 29.9003 72.0732 29.6994L72.0808 21.1507C72.9591 20.8714 73.7225 20.7394 74.4782 20.7394C76.9272 20.7394 78.5708 22.5455 78.5708 25.228C78.5708 28.1209 76.8201 29.9902 74.1128 29.9902ZM75.0733 18.0148C74.0764 18.0148 73.07 18.1966 72.0139 18.5601H68.4991C68.4704 18.5601 68.4494 18.585 68.4494 18.6156V40.4693C69.5113 40.3239 70.8123 39.9451 72.0751 39.0458L72.0732 32.399C72.9399 32.5215 73.6555 32.6038 74.3462 32.6038C79.1601 32.6038 82.2749 29.7185 82.2749 25.2509C82.2749 20.9919 79.3112 18.0148 75.0733 18.0148Z"
                      fill="white"
                    />
                    <path
                      d="M108.657 28.8836C107.557 29.4614 106.574 29.735 105.65 29.735C103.47 29.735 102.163 28.1948 102.163 25.6156C102.163 22.6309 103.832 20.7004 106.411 20.7004C107.123 20.7004 107.815 20.8745 108.657 21.2552V28.8836ZM108.657 11.5051V18.4809C107.626 18.1863 106.717 18.0505 105.801 18.0505C101.612 18.0505 98.4498 21.2074 98.4498 25.4014C98.4498 29.5762 101.239 32.603 105.077 32.603C106.407 32.603 107.651 32.2701 109.115 31.5163L109.113 32.7197C110.079 32.536 111.189 32.1496 112.283 31.3747V10.0777C111.208 10.2212 109.933 10.5809 108.657 11.5051Z"
                      fill="white"
                    />
                    <path
                      d="M130.888 28.8572C129.824 29.4713 128.912 29.766 128.097 29.766C125.762 29.766 124.364 28.2315 124.364 25.6428C124.364 22.7021 126.011 20.7295 128.46 20.7295C129.116 20.7295 129.912 20.9801 130.888 21.4967V28.8572ZM134.518 18.3991C134.518 18.3168 134.447 18.2517 134.366 18.2517L131.512 18.2556C131.428 18.2556 131.357 18.3283 131.357 18.4086V18.8946H131.284C129.966 18.3168 128.843 18.0509 127.735 18.0509C123.786 18.0509 120.69 21.3245 120.69 25.5204C120.69 29.7622 123.461 32.6053 127.584 32.6053C128.688 32.6053 130.102 32.5288 131.426 31.0058V32.7201C132.361 32.5211 133.465 32.1232 134.514 31.3693L134.518 18.3991Z"
                      fill="white"
                    />
                    <path
                      d="M42.7392 28.6623L51.6054 28.6585C51.4715 29.6496 51.1367 30.8091 50.3675 31.9915H42.7602H41.2449H41.1435C40.0147 31.9915 39.0867 31.1171 38.9757 30.0112C38.97 29.994 38.9643 29.9787 38.9623 29.9634V20.8829V12.4777C38.9643 12.4643 38.97 12.4452 38.9757 12.4337C39.0867 11.3259 40.0147 10.4477 41.1435 10.4477C41.1799 10.4477 41.2143 10.4516 41.2449 10.4516L51.5863 10.4496C51.4505 11.4388 51.1156 12.6289 50.3484 13.8075H42.7392V18.5678H50.2719C50.3025 18.5678 50.3254 18.5888 50.3254 18.6194V21.9218C50.3254 21.9486 50.3025 21.9734 50.2719 21.9734H42.7392V28.6585V28.6623Z"
                      fill="white"
                    />
                    <path
                      d="M31.6406 32.2691C30.7643 32.2691 30.2228 31.5842 30.2228 30.7461C30.2228 29.8488 30.8427 29.2231 31.6406 29.2231C32.4308 29.2231 33.0488 29.8488 33.0488 30.7461C33.0488 31.6454 32.4308 32.2691 31.6406 32.2691ZM31.6406 29.0509C30.7432 29.0509 29.976 29.7263 29.976 30.7461C29.976 31.7104 30.6686 32.4356 31.6406 32.4356C32.5264 32.4356 33.2975 31.764 33.2975 30.7461C33.2975 29.7263 32.5264 29.0509 31.6406 29.0509Z"
                      fill="white"
                    />
                    <path
                      d="M31.2428 30.6069V29.9889H31.6599C31.8703 29.9889 32.1191 30.0214 32.1191 30.2778C32.1191 30.582 31.8895 30.6069 31.6273 30.6069H31.2428ZM32.4271 30.3179C32.4271 29.9142 32.1784 29.742 31.6962 29.742H30.9366V31.7453H31.2676V30.8881H31.5738L32.0923 31.7453H32.4654L31.9029 30.8652C32.2071 30.8288 32.4271 30.6815 32.4271 30.3179Z"
                      fill="white"
                    />
                    <path
                      d="M137.433 20.7784C136.557 20.7784 136.011 20.0935 136.011 19.2554C136.011 18.3581 136.633 17.7325 137.433 17.7325C138.221 17.7325 138.841 18.3581 138.841 19.2554C138.841 20.1547 138.221 20.7784 137.433 20.7784ZM137.433 17.5603C136.536 17.5603 135.768 18.2357 135.768 19.2554C135.768 20.2197 136.459 20.9449 137.433 20.9449C138.317 20.9449 139.086 20.2714 139.086 19.2554C139.086 18.2357 138.317 17.5603 137.433 17.5603Z"
                      fill="white"
                    />
                    <path
                      d="M137.033 19.1152V18.4991H137.45C137.661 18.4991 137.91 18.5297 137.91 18.7861C137.91 19.0922 137.678 19.1152 137.42 19.1152H137.033ZM138.218 18.8263C138.218 18.4226 137.969 18.2504 137.487 18.2504H136.727V20.2536H137.054V19.3984H137.364L137.883 20.2536H138.254L137.693 19.3735C137.996 19.339 138.218 19.1898 138.218 18.8263Z"
                      fill="white"
                    />
                    <path
                      d="M20.2039 13.7912L19.561 11.9717L14.1081 4.68394L15.0877 4.44095L24.4896 12.5686L30.0229 10.9863C30.6734 10.818 31.412 10.7816 31.9745 10.7855C30.2353 7.03538 27.0535 3.95688 22.8519 2.46068C14.5462 -0.499191 5.41405 3.84017 2.45991 12.1496C1.54535 14.7192 1.32724 17.371 1.71181 19.8928L14.9672 15.2874L20.2039 13.7912Z"
                      fill="white"
                    />
                    <path
                      d="M32.5568 12.2217C32.0708 12.5374 31.3572 12.9507 30.6493 13.1784L25.1045 14.7607L21.4042 26.6384L20.4437 26.9503L21.2243 17.8793L20.7881 15.9947L15.5916 17.4775L1.85791 20.711C2.94466 25.9975 6.68708 30.6009 12.1419 32.5448C20.4494 35.5047 29.5778 31.1634 32.5319 22.8597C33.8062 19.2799 33.7239 15.5451 32.5568 12.2217Z"
                      fill="white"
                    />
                    <path
                      d="M20.7878 15.996L21.2259 17.8787L20.4434 26.9496L21.4038 26.6378L25.1042 14.7619L30.6489 13.1796C31.3568 12.9519 32.0705 12.5348 32.5565 12.223C32.3862 11.7351 32.191 11.2548 31.9748 10.7861C31.4123 10.7823 30.6738 10.8205 30.0233 10.9851L24.49 12.5712L15.0861 4.43967L14.1084 4.68457L19.5594 11.9723L20.2042 13.79L14.9656 15.29L1.71216 19.8915C1.75425 20.167 1.80208 20.4406 1.85757 20.7123L15.5932 17.4788L20.7878 15.996Z"
                      fill="#222831"
                    />
                  </svg>
                </Box>
              </div>
              <ul
                className={navbar ? "navbar" : "flex"}
                onClick={() => setNavbar(false)}
              >
                <Link to="/#" className="home">
                  Home
                </Link>
                <Link to="/#" className="trip">
                  Trip
                </Link>
                <Link to="/#" className="about">
                  About
                </Link>
                <Link to="/#" className="support">
                  Support
                </Link>
                <Link to="/#" className="travel">
                  Travel
                </Link>
              </ul>
              <button className="barIcon" onClick={() => setNavbar(!navbar)}>
                {navbar ? <MenuIcon /> : <MenuIcon />}
              </button>
              <div className="mob__search">
                <button className="setsearch">Sign Up</button>
              </div>
            </div>
          </header>
        </Box>
        <Box className="header-title">
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              fontSize={"9vw"}
              fontWeight={700}
              alignItems={"center"}
              width={"40%"}
              margin={"auto"}
            >
              It Matters Who You Travel With
            </Typography>
            <Typography variant="h6" fontSize={"4vw"}>
              We want you to feel confident in the travel experience you will
              have with us.
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
}

export default Header;
