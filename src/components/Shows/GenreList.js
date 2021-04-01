import React from 'react'

const GenreList = ({ genres = [] }) => {
    return genres.map((genre, index) => (
        <div className="card genre" key={index}>
            {genre}
        </div>
    ))
}

export default GenreList
