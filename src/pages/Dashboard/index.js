import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { tileSet } from "../../Data/tileSet";
import { dataSet } from "../../Data/dataSet";
import Divider from "@mui/material/Divider";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        // justifyContent: "space-between",
        alignContent: "space-between",
        height: "88vh",
        m: 0,
      }}
    >
      <Box sx={{ mx: 2, my: 5, pl: 9 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4">DashBoard</Typography>A Quick Data Overview
          of the Inventory
        </ThemeProvider>
      </Box>
      <Box sx={{ flexGrow: 1, width: "100%", pt: 2, px: 5 }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          rowSpacing={{ xs: 1 }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {tileSet.map((n) => (
            <Grid item minWidth={"20vw"}>
              <Item>
                <ThemeProvider theme={theme}>
                  {n.icon} <br />
                  <Typography variant="h4"> {n.Header}</Typography>
                  <Typography variant="h6"> {n.titleOne} </Typography> <br />
                  {n.titleTwo}
                </ThemeProvider>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ width: "100%", height: "50%", pt: 5, px: 5 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 4, md: 3.8 }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {dataSet.map((n) => {
            return (
              <Grid item xs={5.7}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 2,
                      py: 2,
                    }}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography variant="h5"> {n.header}</Typography>
                      <Typography variant="h7"> {n.expand}</Typography>
                    </ThemeProvider>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <div>
                      <ThemeProvider theme={theme}>
                        <Typography variant="h5">{n.dataOne}</Typography>
                      </ThemeProvider>

                      {n.topicOne}
                    </div>
                    <div>
                      <ThemeProvider theme={theme}>
                        <Typography variant="h5">{n.dataTwo}</Typography>
                      </ThemeProvider>

                      {n.topicTwo}
                    </div>
                  </Box>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
