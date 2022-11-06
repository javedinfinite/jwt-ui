import * as React from "react";
import { Grid } from "@mui/material";

export default function NotFound() {
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
          Sad 😔.....The page you are looking is not found, please correct the url...
        </p>
      </Grid>
    </div>
  );
}
