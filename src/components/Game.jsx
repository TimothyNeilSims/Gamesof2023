import React from 'react';

const Game = ({ game }) => {
    return (
        <div className="game-card">
            <div className="game-content">
                <h2>{game.month}</h2>
                <h3>{game.title}</h3>
                <img src={game.image} alt={game.title} />
                <p className="image-source">Image source: <a href={game.link} target="_blank" rel="noopener noreferrer">{game.source}</a></p>
                <p>{game.description}</p>
            </div>
            <a href={game.url} target="_blank" rel="noopener noreferrer">
                <button>Play Now</button>
            </a>
        </div>
    )
}

export default Game;