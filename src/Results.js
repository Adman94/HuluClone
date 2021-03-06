import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import './Results.css'
import axios from './axios'
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {
    const [movies, setMovies] = useState(["1", "2", "3"]);

    useEffect(() => {
        // run this code once when the Results component loads/mount
        async function fetchData() {
            const request = await axios.get(selectedOption);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption])
    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
