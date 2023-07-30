import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import ProtectedRoute from "../../protectedRoute";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

const MediaActorDetails = ({ actor }) => {
  return (
    <>
      <ProtectedRoute>
        <Typography variant="h4" component="p">
          Biography
        </Typography>
        <br />
        <Typography variant="h6" component="p">
          {actor?.biography}
        </Typography>

        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Also known as" sx={styles.chipLabel} color="primary" />
          </li>
          {actor?.also_known_as?.map((g) => (
            <li key={g}>
              <Chip label={g} />
            </li>
          ))}
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
          <Chip label={`Place of birth: ${actor?.place_of_birth}`} />
          <Chip label={`Birthday: ${actor?.birthday}`} />
          <Chip
            icon={<StarRate />}
            label={`Popularity: ${actor?.popularity}%`}
          />
        </Paper>
      </ProtectedRoute>
    </>
  );
};
export default MediaActorDetails;
