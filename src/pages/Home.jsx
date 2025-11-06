import React, { useEffect } from "react";
import { useArtStore } from "../store/art-store";
import { CircularProgress, Grid } from "@mui/material";
import CardArt from "../components/Card";

const Home = () => {
  const getAllArts = useArtStore((state) => state.getAllArts);
  const arts = useArtStore((state) => state.arts);
  const loading = useArtStore((state) => state.loading);

  useEffect(() => {
    getAllArts();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container>
          {arts.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.objectID}>
                <CardArt art={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
