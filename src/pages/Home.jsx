import { useEffect } from "react";
import { useArtStore } from "../store/art-store";
import { Grid } from "@mui/material";
import CardArt from "../components/Card";
import Loading from "../components/Loading";

const Home = () => {
  const getAllArts = useArtStore((state) => state.getAllArts);
  const arts = useArtStore((state) => state.arts);
  const loading = useArtStore((state) => state.loading);
  const error = useArtStore((state) => state.error);

  useEffect(() => {
    getAllArts();
  }, []);

  return (
    <>
      {error && <p>Error al obtener los datos</p>}
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          {arts.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item.objectID}>
              <CardArt art={item} button={true} isDetail={false} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
