import React, { useState } from "react";
// import "../App.css";


const moviesData = [
  { id: 1, name: "Avengers", seats: 20 },
  { id: 2, name: "Inception", seats: 15 },
  { id: 3, name: "Interstellar", seats: 10 },
];

export default function MovieBooking() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [tickets, setTickets] = useState(1);

  const bookTickets = () => {
    if (!selectedMovie) return alert("Select a movie");

    const updatedMovies = movies.map((movie) => {
      if (movie.id === selectedMovie.id) {
        if (movie.seats < tickets) {
          alert("Not enough seats available");
          return movie;
        }
        return { ...movie, seats: movie.seats - tickets };
      }
      return movie;
    });
    console.log("111",updatedMovies);

    setMovies(updatedMovies);
    alert("Booking Successful!");
  };

  return (
    <div className="container">
      <h1 className="title">🎬 Movie Booking</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-card ${
              selectedMovie?.id === movie.id ? "selected" : ""
            }`}
            onClick={() => setSelectedMovie(movie)}
          >
            <h2>{movie.name}</h2>
            <p>Available Seats: {movie.seats}</p>
          </div>
        ))}
      </div>

      <div className="input-group">
        <label>Number of Tickets:</label>
        <input
          type="number"
          value={tickets}
          min="1"
          onChange={(e) => setTickets((e.target.value))}
        />
      </div>

      <button onClick={bookTickets} className="btn">
        Book Now
      </button>
    </div>
  );
}