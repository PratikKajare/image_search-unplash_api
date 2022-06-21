import React, { useState } from "react";
import axios from "axios";
function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`
      )
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <div className="container text-center my-5 ">
        <input
          type="text"
          className="form-control my-2 rounded border-0"
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={changePhoto}
          className="btn btn-danger my-1 "
        >
          Get Photo
        </button>
      </div>

      <div className="container">
        <div class="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div class="col-lg-3 col-md-4 col-6 my-1">
                <img
                  class="img-fluid d-block mb-2 h-100 "
                  src={value.urls.small}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
