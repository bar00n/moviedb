import React from 'react';
import { Link } from "react-router-dom";
import '../../index.css';


export default function MovieCards({movie}){
    return (
      
      <div className="container containerCard" key={movie.id} >
        <div className="row">
          <div className="col">
          <Link to={`/movie/${movie.id}`}>
            <img
            style={{ height: 300 }}
            className="img-fluid"
            alt={movie.title + ` poster`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
          </Link>
          </div>
          <div className="col">
            <p style={{ fontWeight: "bolder" }}>{movie.title}</p>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
      </div>
    );
  }
