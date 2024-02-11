import "./App.css";
import { useState } from "react";
import NewPlayerForm from "./assets/components/NewPlayerForm";
import AllPlayers from "./assets/components/AllPlayers";
import SinglePlayer from "./assets/components/SinglePlayer";
import DeletePlayer from "./assets/components/DeletePlayer";
import SearchBar from "./assets/components/SearchBar";
import SearchResultsList from "./assets/components/SearchResultsList";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [refreshPlayers, setRefreshPlayers] = useState(false);
  const [results, setResults] = useState([]);

  const handleSelectPlayer = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const handlePlayerAdded = () => {
    // Trigger refresh of player list
    setRefreshPlayers(!refreshPlayers);
  };

  const handlePlayerDeleted = () => {
    // Reset selected player and trigger refresh of player list
    setSelectedPlayerId(null);
    setRefreshPlayers(!refreshPlayers);
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList
          results={results}
          onSelectPlayer={handleSelectPlayer}
        />
      </div>
      <h1>Puppy Bowl</h1>
      <h2>Management</h2>
      <NewPlayerForm onPlayerAdded={handlePlayerAdded} />
      {selectedPlayerId ? (
        <>
          <SinglePlayer selectedPlayerId={selectedPlayerId} />
          <DeletePlayer
            selectedPlayerId={selectedPlayerId}
            onPlayerDeleted={handlePlayerDeleted}
          />
          <button onClick={() => setSelectedPlayerId(null)}>
            Back to All Players
          </button>
        </>
      ) : (
        <AllPlayers
          onSelectPlayer={handleSelectPlayer}
          refreshPlayers={refreshPlayers}
        />
      )}
    </div>
  );
}

export default App;
