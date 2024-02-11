import React from "react";

export default function SearchResult({ result, onSelectPlayer }) {
  return (
    <div
      className="search-result"
      onClick={() => onSelectPlayer(result.id)}
    >{`${result.name} - breed ${result.breed}`}</div>
  );
}
