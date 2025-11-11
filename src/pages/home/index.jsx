import { useEffect } from "react";
import { Grid } from "@mui/material";
import CardArt from "../../components/Card";
import Loading from "../../components/Loading";
import Error from '../../components/Error'
import useArtStore from "../../store/art-store";

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
      {error && <Error message={'Error al obtener el listado'} />}
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          {arts.map((art) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={art.objectID}>
              <CardArt art={art} button={true} isDetail={false} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
