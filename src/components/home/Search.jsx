import React from "react";
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import MovieCard from '../moviedetail/MovieCard';
export default function SearchMovies() {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=515cd682f4a2864de01126990b709114&language=en-US&page=1&include_adult=false&query=${query}`;




  function handleChange(e) {
    setQuery(e.target.value);
  }

  const renderMovies = () =>
    movies.map((movie, index) => <MovieCard movie={movie} key={index} />);

  async function searchMovies(e) {
    e.preventDefault();
      try {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
      } catch (err){} 
    }

  return (
    <>

       <Navbar fixed="top"  variant= "dark" style={{ backgroundColor: "#151c26" }}>
       <Navbar.Brand>Movie DB</Navbar.Brand>
         <Form  inline class="col-md-6" onSubmit={searchMovies} >
           <FormControl 
            autoComplete="off"
            value={query}
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Search Movies"
            name="query"
          />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
        </Form>
      </Navbar>
      <div className="card-list">
          {renderMovies()}
      </div>

      
      </>
);
}