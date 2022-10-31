import * as React from "react";
import { useEffect } from "react";
import { useHackers } from "../../hooks/useHackers";
import { OneTopHacker } from "./OneTopHacker";
import { Grid } from "@mui/material";

export default function TopNHackers() {
  const { data: topHackersApiResponse, trigger: topHackersApiTrigger } =
    useHackers();

  useEffect(() => {
    topHackersApiTrigger(true, 4);
  }, []);

  if (!topHackersApiResponse) return <p>Loading...top...hackers...</p>;
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
        {topHackersApiResponse.users.map((item) => (
          <Grid  key={item.id} item xs={8} sm={6} md={4}>
            <OneTopHacker item={item}  />
          </Grid>
        ))}
      </Grid>
      </div>
  );
}
