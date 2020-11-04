// import React from "react";
// import MovieCard from '../moviedetail/MovieCard';
// export default function SearchMovies() {
//   const [query, setQuery] = React.useState("");
//   const [movies, setMovies] = React.useState([]);
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=515cd682f4a2864de01126990b709114&language=en-US&page=1&include_adult=false&query=${query}`;




//   function handleChange(e) {
//     setQuery(e.target.value);
//   }

//   const renderMovies = () =>
//     movies.map((movie, index) => <MovieCard movie={movie} key={index} />);

//   async function searchMovies(e) {
//     e.preventDefault();
//       try {
//         const res = await fetch(url);
//         const data = await res.json();

//         setMovies(data.results);
//       } catch (err){} 
//     }

//   return (
//     <>


      
//       </>
// );
// }