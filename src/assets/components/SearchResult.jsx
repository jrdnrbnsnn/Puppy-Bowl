import React from "react";

export default function SearchResult({ result }) {
  return (
    <div className="search-result">{`${result.name} - breed ${result.breed}`}</div>
  );
}
