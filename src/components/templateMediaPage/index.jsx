import Image from '../imageList';
import React from "react";
import Grid from "@mui/material/Grid";
import MediaHeader from '../headerMedia';

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplateMediaPage = ({ media, children }) => {
  return (
    <>
      <MediaHeader data={media} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <Image image={media} />
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMediaPage;
