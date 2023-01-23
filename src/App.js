import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AlbumList from "./pages/AlbumList";
import AlbumDetails from "./pages/AlbumDetails";
import './App.scss';

function App() {

  // Load photo albums
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then(setAlbums)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Route URLs
  return (
    <div className="app">
      <Router>
        <Link to="/" className="header">Album viewer</Link>
          <Routes>
            <Route path="/" element={<AlbumList albums={albums.slice(0, 12)} />} />
            <Route path="/album/:id" element={<AlbumDetails albums={albums.slice(0, 12)} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
