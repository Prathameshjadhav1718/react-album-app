import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Album from "./Albums";
import Albumlist from "./Albumlist";
import Navbar from "./Navbars";
import Newalbum from "./NewAlbum";
import UpdateAlbum from "./UpdateAlbum";
// Creates a new app.
function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums();
  }, []);

  // Log albums sorted by ID.
  useEffect(() => {
    console.log(albums.sort((a,b)=>(a.id-b.id)), "albums");
  });

  // Fetches Albums from Typicode.
  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((result) => {
      result.json().then((resp) => {
        setAlbums(resp);
      });
    });
  };

  // Sets the updatedAlbums.
  const handleChangeAlbum = (updatedAlbums) => {
    setAlbums(updatedAlbums);
  };

  // Returns a navbar div with all the available routes
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Albumlist />} />
        <Route
          path="/album"
          element={
            <Album albums={albums} handleChangeAlbum={handleChangeAlbum} />
          }
        />
        <Route
          path="/newalbum"
          element={
            <Newalbum albums={albums} handleChangeAlbum={handleChangeAlbum} />
          }
        />
        <Route
          path="/album/:id"
          element={
            <UpdateAlbum
              albums={albums}
              handleChangeAlbum={handleChangeAlbum}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
