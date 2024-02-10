import { useEffect, useState } from "react";

export default function AllPlayers({ onSelectPlayer }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const cohortName = "2308-acc-et-web-pt-a";
        const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch players");

        const data = await response.json();
        setPlayers(data.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }

    fetchAllPlayers();
  }, []);

  function handlePlayerClick(playerId) {
    onSelectPlayer(playerId);
  }

  return (
    <div className="player-container">
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              src={player.imageUrl}
              alt={player.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{player.name}</h2>
            <p>{player.breed}</p>{" "}
            <button onClick={() => handlePlayerClick(player.id)}>
              View Details
            </button>
          </div>
        ))
      ) : (
        <p>No players found.</p>
      )}
    </div>
  );
}
