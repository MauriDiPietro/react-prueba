import { useEffect, useState } from "react";
import { Button, Grid, Pagination, TextField } from "@mui/material";
import CardArt from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useArtStore from "../../store/art-store";

const Home = () => {
  const getAllArts = useArtStore((state) => state.getAllArts);
  const arts = useArtStore((state) => state.arts);
  const loading = useArtStore((state) => state.loading);
  const error = useArtStore((state) => state.error);
  const search = useArtStore((state) => state.search);
  const setSearch = useArtStore((state) => state.setSearch);
  const page = useArtStore((state) => state.page);
  const setPage = useArtStore((state) => state.setPage);
  const totalPages = useArtStore((state) => state.totalPages);

  useEffect(() => {
    getAllArts();
  }, []);

  return (
    <>
      {error && <Error message={"Error al obtener el listado"} />}
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              label="Buscar por artista o título"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={getAllArts}
              sx={{ backgroundColor: "#A01F26", color: "white" }}
            >
              Buscar
            </Button>
          </Grid>
          {arts && arts.map((art) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={art.objectID}>
              <CardArt art={art} button={true} isDetail={false} />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <Pagination 
            count={totalPages}
            page={page}
            onChange={(value) => setPage(value)}
          />  
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
