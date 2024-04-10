import { useState, useEffect } from "react";
import "./App.css";
import { Authi } from "./components/Authi";
import { db } from "./confi/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      //read the movielist
      //set the movie list

      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  return (
    <div>
      <Authi />
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.recievdoscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p> Date: {movie.releasedate}</p>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
