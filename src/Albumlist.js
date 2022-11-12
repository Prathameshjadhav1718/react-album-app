// Returns a div for the Albumlist class.
import './CSS/Albumlist.css'
function Albumlist() {
  return (
    <div className="Albumlist">
      <h1>Welcome To The React Album Collections</h1><br/><br/>
      <h2>
      🚀We can Fetch and show albums from the api - <p><a href="https://jsonplaceholder.typicode.com/albums">https://jsonplaceholder.typicode.com/albums</a></p> <br/>
      🚀We can Add an album, make a POST call to the above url and save the album in react state. <br/><br/>
      🚀We can Update the album, make a PUT call to the above url.<br/><br/>
      🚀We can Delete an album, make a DELETE call to the above url.
      </h2>
    </div>
  );
}

export default Albumlist;