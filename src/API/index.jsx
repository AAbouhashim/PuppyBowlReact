const FetchPlayers = async () => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2049-FTB-ET-WEB-FT/players`);
    const responseData = await response.json();
    console.log(responseData.data);
    return responseData.data.players;
  } catch (error) {
    console.error(`No Response from Server.`, error);
  }
};

export default FetchPlayers;