import { useState } from "react";
import { X } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  font-family: Inter, system-ui, sans-serif;
  background: radial-gradient(circle at top, #1c1c1c, #0f0f0f);
  color: #eaeaea;

  h1 {
    margin-bottom: 1.2em;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -0.4px;
  }

  .game-insert {
    display: flex;
    align-items: center;
    gap: 0.8em;
    flex-wrap: wrap;

    background: #181818;
    padding: 1.2em;
    border-radius: 14px;

    box-shadow:
      0 15px 35px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  label {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  input {
    padding: 0.55em 0.7em;
    font-size: 0.95rem;

    border-radius: 8px;
    border: 1px solid #3a3a3a;

    background: #101010;
    color: #fff;

    transition: 0.2s ease;
  }

  input:focus {
    outline: none;
    border-color: #646cff;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.25);
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 0.55em 1em;
    font-size: 0.95rem;
    font-weight: 600;

    background: linear-gradient(135deg, #646cff, #7c82ff);
    color: white;

    cursor: pointer;
    transition: 0.25s ease;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(100, 108, 255, 0.35);
  }

  button:active {
    transform: translateY(0);
    box-shadow: none;
  }

  .games-list {
    margin-top: 2.5rem;
    width: 100%;
    max-width: 1100px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
  }

  .game-item {
    background: #181818;
    border-radius: 14px;
    overflow: hidden;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 1rem;

    box-shadow:
      0 10px 25px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);

    transition: 0.25s ease;
  }

  .game-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.6);
  }

  .game-item img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    background: #111;
  }

  .game-item h2 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.8rem 0 0 0;
    text-align: center;
    padding: 0 0.5rem 0.75rem;
  }

  .delete-btn {
    all: unset;

    position: absolute;
    top: 10px;
    right: 10px;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);

    color: white;
    cursor: pointer;

    opacity: 0;
    transform: scale(0.8);
    transition: 0.2s ease;
  }

  .game-item:hover .delete-btn {
    opacity: 1;
    transform: scale(1);
  }

  .delete-btn:hover {
    background: #ff4c4c;
    color: white;
  }
`;

export default function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [gameCover, setGameCover] = useState("");
  const [games, setGames] = useState<
    { title: string; cover: string; id: number }[]
  >(JSON.parse(localStorage.getItem("game-list") || "[]"));

  const addGame = (title: string, cover: string) => {
    const id = Date.now();
    const game = { id, title, cover };
    setGames((prev) => {
      const newState = [...prev, game];
      localStorage.setItem("game-list", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id: number) => {
    setGames((prev) => prev.filter((game) => game.id !== id));
  };

  const handleSubmit = (ev: React.SubmitEvent) => {
    ev.preventDefault();
    console.log({ gameTitle, gameCover });
    addGame(gameTitle, gameCover);
    setGameTitle("");
    setGameCover("");
  };

  return (
    <Container className="App">
      <h1>Games Library</h1>
      <form onSubmit={handleSubmit}>
        <div className="game-insert">
          <label htmlFor="gameTitle">Title:</label>
          <input
            type="text"
            id="gameTitle"
            value={gameTitle}
            onChange={(ev) => setGameTitle(ev.target.value)}
          />
          <label htmlFor="gameCover">Cover:</label>
          <input
            type="text"
            id="gameCover"
            value={gameCover}
            onChange={(ev) => setGameCover(ev.target.value)}
          />
          <button type="submit">Add Game</button>
        </div>
      </form>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-item">
            {game.cover && <img src={game.cover} alt={`${game.title} cover`} />}

            <button className="delete-btn" onClick={() => removeGame(game.id)}>
              <X size={18} strokeWidth={2.5} />
            </button>

            <h2>{game.title}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
}
