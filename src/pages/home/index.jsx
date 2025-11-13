import { useEffect } from "react";
import { Button, Grid, Pagination, TextField, Box } from "@mui/material";
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
      {loading && <Loading />}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          width: "100%",
          mb: 3,
        }}
      >
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
          sx={{
            backgroundColor: "#A01F26",
            color: "white",
            height: "56px",
          }}
        >
          Buscar
        </Button>
      </Box>

      <Grid container spacing={2}>
        {arts &&
          arts.map((art) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={art.objectID}>
              <CardArt art={art} button={true} isDetail={false} />
            </Grid>
          ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </>
  );
};

export default Home;
