import { useState } from "react";

export default function DeletePlayer({ selectedPlayerId, onPlayerDeleted }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  async function deletePlayer() {
    setIsDeleting(true);
    setError("");
    try {
      const cohortName = "2308-acc-et-web-pt-a";
      const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${selectedPlayerId}`;

      const response = await fetch(API_URL, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete the player.");
      }

      onPlayerDeleted(); // Notify parent component of deletion
    } catch (error) {
      console.error("Error deleting player:", error);
      setError(error.message);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <button onClick={deletePlayer} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete Player"}
      </button>
    </div>
  );
}
