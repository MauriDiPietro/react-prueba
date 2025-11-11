import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useArtStore from "../../store/art-store";
import { Grid } from "@mui/material";
import CardArt from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Detail = () => {
  const { id } = useParams();
  const getArtById = useArtStore((state) => state.getArtById);
  const loading = useArtStore((state) => state.loading);
  const errorArt = useArtStore((state) => state.errorArt);
  const art = useArtStore((state) => state.art);

  useEffect(() => {
    getArtById(id);
  }, [id]);

  return (
    <>
      {loading && (
        <Loading />
      )}
      {errorArt && <Error message={'Error al obtener el detalle del producto'} />}
      {art && (
        <Grid container>
          <CardArt art={art} button={false} isDetail={true} />
        </Grid>
      )}
    </>
  );
};

export default Detail;
