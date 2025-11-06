import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box sx={{ paddingBottom: 40 }}>
      <Navbar />
      <Container sx={{ marginTop: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
