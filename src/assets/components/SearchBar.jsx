import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  async function fetchPlayer(value) {
    try {
      const cohortName = "2308-acc-et-web-pt-a";
      const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
      const response = await fetch(API_URL);
      const data = await response.json();
      const players = data.data.players;
      console.log(data);
      const results = players.filter((user) => {
        return (
          value &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(value.toLowerCase())
        );
      });
      setResults(results);
    } catch (error) {
      console.error("Error fetching player details:", error);
    }
  }
  function handleChange(value) {
    setInput(value);
    fetchPlayer(value);
  }
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
