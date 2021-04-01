import React from 'react'

import GenreList from "./GenreList";

const ShowDetailsSection = ({ show: { image, displayName, genres, htmlDescription } }) => (
    <>
        <div className="col s5">
            <div className="card">
                <div className="card-image">
                    <img src={image.medium} alt="" />
                </div>
            </div>
        </div>
        <div className="col s6 offset-s1">
            <h3>{displayName}</h3>
            <GenreList genres={genres} />
            <p className="flow-text" dangerouslySetInnerHTML={htmlDescription} />
        </div>
    </>
)

export default ShowDetailsSection
