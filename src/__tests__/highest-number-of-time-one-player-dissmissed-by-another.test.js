test('checks the highest number of timem one player dissmissed by another player', () => {
  const highestNumberOfTimesDismissalsByAnotherPlayer = require('../server/highest-number-of-times-one-player-has-dismissed-by-another.js');

  let sampleData = [
    {
      match_id: 1,
      extra_runs: 0,
      bowling_team: 'KKR',
      batsman: 'R Sharma',
      bowler: 'S Narine',
      player_dismissed: 'R Sharma',
    },
    {
      match_id: 2,
      extra_runs: 0,
      batsman: 'smith',
      bowling_team: 'CSK',
      bowler: 'Jadeja',
      player_dismissed: 'smith',
    },
    {
      match_id: 3,
      extra_runs: 0,
      bowling_team: 'KKR',
      batsman: 'R Sharma',
      bowler: 'S Narine',
      player_dismissed: 'R Sharma',
    },
    {
      match_id: 4,
      extra_runs: 3,
      bowling_team: 'RR',
      batsman: 'MS Dhoni',
      bowler: 'A Choudhary',
      player_dismissed: 'MS Dhoni',
    },
  ];
  const actualResult = [['R Sharma', 'S Narine', 2]];

  let receivedResult =
    highestNumberOfTimesDismissalsByAnotherPlayer(sampleData);
  expect(actualResult).toEqual(receivedResult);
});
