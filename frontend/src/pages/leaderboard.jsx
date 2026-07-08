import "../styles/leaderboard.css";

function Leaderboard() {

  const players = [
    {
      rank: 1,
      name: "Gunjan",
      score: 15
    },
    {
      rank: 2,
      name: "Player 2",
      score: 12
    },
    {
      rank: 3,
      name: "Player 3",
      score: 10
    }
  ];


  return (
    <div className="leaderboard-page">

      <div className="leaderboard-card">

        <h1>🏆 Leaderboard</h1>
        <p>Top Quiz Players</p>

        <div className="leader-list">

          {
            players.map((player)=>(
              <div className="player" key={player.rank}>

                <h3>
                  #{player.rank} {player.name}
                </h3>

                <span>
                  {player.score} Points
                </span>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Leaderboard;