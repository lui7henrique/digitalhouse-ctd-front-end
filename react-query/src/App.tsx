import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { GetCharacter } from "./types/character";

function App() {
  const [page, setPage] = useState(1);

  const { isLoading, error, data, isPreviousData } = useFetch<GetCharacter>(
    ["character", page],
    `/character`,
    {
      params: {
        page: page,
      },
    }
  );

  if (isLoading) {
    return (
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h1>loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h1>error on fetch data</h1>;
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h1>no data =(</h1>;
      </div>
    );
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

      <button onClick={() => setPage((old) => old - 1)} disabled={page === 1}>
        Previous Page
      </button>

      <button
        onClick={() => setPage((old) => old + 1)}
        disabled={isPreviousData || !data?.info.next}
      >
        Next Page
      </button>
    </div>
  );
}

export default App;
