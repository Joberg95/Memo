import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h3>{wins} wins</h3>
      <h2>Memo</h2>
      <button onClick={handleNewGame}>New game</button>
    </header>
  );
};

export default Header;
