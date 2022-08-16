import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, error, isLoading } = useFetch(["character"], `/type`);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>error on fetch data</h1>;
  }

  if (!data) {
    return <h1>no data =(</h1>;
  }

  return (
    <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}
      >
        {data.results.map((character) => {
          return (
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={character.image}
                style={{ width: "100%", aspectRatio: "1" }}
              />
              <h4>{character.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
