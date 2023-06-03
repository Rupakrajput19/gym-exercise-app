import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

var theme = createTheme();
theme = responsiveFontSizes(theme);

function Sunday() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" className="sundaytext">
          Today Is Sunday The Day Of Holiday, So Take Rest For Next Day!
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default Sunday;
