import React from 'react'

const ActorCard = ({ actor }) => (
    <div className="col s12 m2">
        <div className="card ">
            <div className="card-image">
                <img className="z-depth-2" src={actor.photo} alt="" />
                <span className="card-title">{actor.name}</span>
            </div>
        </div>
    </div>
)

export default ActorCard
