import { useEffect, useState } from "react";
// timer
import useCountDown from "react-countdown-hook";
// mui
import {
  Box,
  Container,
  Paper,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
// components
import CustomButton from "./components/CustomButton";
// asset
import logo from "./assets/logo.png";
import "./App.css";

const initialTime = 5 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

function App() {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    interval
  );

  const countDown = () => {
    start();
    setTimeout(() => {
      alert("Time's up!");
      reset();
    }, initialTime);
  };

  return (
    <Box className="App">
      <Container maxWidth="sm">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={10} md={8} sm={10} xs={12}>
            <Paper
              sx={{
                p: 2,
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                height: "500px",
                widht: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton>
                <img
                  style={{
                    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
                  }}
                  src={logo}
                  alt="caj-logo"
                  height={100}
                  width={100}
                />
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700 }}
                gutterBottom
                align="center"
              >
                THE COMMISSION ON ADMINISTRATIVE JUSTICE <br /> PRESENTS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700 }}
                gutterBottom
                align="center"
              >
                COMPLAINTS MANAGEMENT SYSTEM <br />
                (CMIS)
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: 30, fontWeight: 700 }}
                align="center"
                gutterBottom
              >
                {timeLeft / 1000 === 0 ? "" : timeLeft / 1000}
              </Typography>
              <CustomButton
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  width: 157,
                  height: 37,
                  borderRadius: 20,
                  backgroundColor: "#7B8ED6",
                  margin: 2,
                }}
                link={countDown}
                size="large"
                variant="contained"
                title="LAUNCH"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
