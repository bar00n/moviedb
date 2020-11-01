import React from 'react';
import { Link } from "react-router-dom";
import '../../index.css';


export default function MovieCards({movie}){
    return (
      
      <div className="MovieCard " key={movie.id} >
        <div className="card">
          <Link to={`/movie/${movie.id}`}>
          <img
            style={{ height: 300 }}
            className="card--img img-fluid "
            alt={movie.title + ` poster`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
          </Link>
        </div>
        <div className="mt-3">
            <p style={{ fontWeight: "bolder" }}>{movie.title}</p>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
        </div>
      </div>
    );
  }



// import React from 'react';


// export default function MovieCards({movie}) {
//   return (
//     <div className='card'>
//     <img
//      className='card--img'
//      alt={movie.title + ` poster`}
//      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}></img>
//    <div className='card--content'>
//      <h3 className='card--title'>{movie.title}</h3>
//      <p><small>RELEASE DATE: {movie.release_date}</small></p>
//      <p><small>RATING: {movie.vote_average}</small></p>
//      <p className="card--desc">{movie.overview}</p>
//    </div>
//   </div>
//   )
// }