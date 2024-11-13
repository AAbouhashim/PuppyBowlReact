const SinglePlayer = ({ player }) => {
  if (!player) {
    return <p>Select a player to see details.</p>;
  }

  return (
    <>
      <h2>{player.name}</h2>
      <ul className="playerCards">
        <li>
          <img src={player.imageUrl} alt={`${player.name}`} />
        </li>
        <li>Breed: {player.breed}</li>
        <li>Status: {player.status}</li>
        <li>Created By: {player.createdBy}</li>
      </ul>
    </>
  );
};

export default SinglePlayer;