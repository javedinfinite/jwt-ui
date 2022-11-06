import * as React from "react";
import { Grid } from "@mui/material";

export default function ErrorCallback() {
  return (
    <div>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <p>
          Sad 😔.....Something went wrong...Don't worry we will fix it soon...
        </p>
      </Grid>
    </div>
  );
}
