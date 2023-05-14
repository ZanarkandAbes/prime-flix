import { BrowserRouter, Routes, Route } from "react-router-dom";

import {  Home, Movie, Favorites, NotFound } from "./pages"
import { Header } from "./components";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/favoritos" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
