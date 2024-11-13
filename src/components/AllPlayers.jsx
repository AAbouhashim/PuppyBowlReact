import FetchPlayers from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllPlayers = ({ setSinglePlayerDetails }) => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const playerData = await FetchPlayers();
        setPlayers(playerData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchAllPlayers();
  }, []);

  const handlePlayerClick = (player) => {
    setSinglePlayerDetails(player);
    navigate("/player");
  };

  return (
    <>
      <h3><strong>All Players:</strong><br /> Click a player to view details.</h3>
      <ul className="playerCards">
        {players.map((player) => (
          <li key={player.id} onClick={() => handlePlayerClick(player)}>
            <li>{player.name}</li>
            <li>
              <img src={player.imageUrl} alt={`${player.name}`} />
            </li>
            <li>Breed: {player.breed}</li>
            <li>Status: {player.status.toUpperCase()}</li>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllPlayers;