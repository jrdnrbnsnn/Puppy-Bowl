import { useState } from "react";
import SearchResult from "./SearchResult";

export default function SearchResultsList({ results, onSelectPlayer }) {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <SearchResult
          result={result}
          key={index}
          onSelectPlayer={onSelectPlayer}
        />
      ))}
    </div>
  );
}
