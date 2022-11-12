import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CSS/NewAlbum.css";



// Creates a new album.
function Newalbum(props) {
  // Change the use state of an album.
  const { albums, handleChangeAlbum } = props;

  const [Id, setId] = useState();
  const [userId, setUserID] = useState();
  const [title, setTitle] = useState("");

    // Save a user
  function saveUser(e) {
    e.preventDefault();
    let data = { Id, userId, title };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let newAlbum = data;
        let prevAlbums = albums;
        prevAlbums.push(newAlbum);
        handleChangeAlbum(prevAlbums);
        alert("ALbum added succefully")
    });
  }

  // Creates a new album div.
  return (
    <div className="Album">
      <h1 id="albumHeading" className="mt-4">
        Add Album To the Album List
      </h1>

      <Form>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Id">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="ID"
            value={Id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>UserID</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserID"
            value={userId}
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={saveUser}>
          Add To Album
        </Button>
      </Form>
    </div>
  );
}

export default Newalbum;
