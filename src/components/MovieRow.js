import React, { useEffect, useState } from "react";
import './MovieRow.css';
import axios from 'axios';

const MovieRow = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const showMovieData = async () => {
            try {
                const api_key = "afbc07718a930b7cd477a20aeaecae25";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&sort_by=popularity.desc`
                );
                setMovies(response.data.results);
                console.log(response);
            } catch (error) {
                setError(error.message);
            }
        };

        showMovieData();
    }, []);

    return (
        <div className="movie-row">
            <h2>Today's Top Pick for You</h2>
            <div className="karousel">
                <div className="karouselbox">
                    {movies.map(movie => (
                        <div key={movie.id} className="movie-item">
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                className="movie-poster" 
                            />
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="link">
                    <a className="switchLeft sliderButton"><span className="material-symbols-outlined">arrow_back_ios</span></a>
                    <a className="switchRight sliderButton"><span className="material-symbols-outlined">arrow_forward_ios</span></a>
                </div>
            </div>
        </div>
    );
};

export default MovieRow;
