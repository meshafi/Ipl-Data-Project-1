test('checks the extra runs conceded per team per year', () => {
  const extraRunsConcededPerTeamYear2016 = require('../server/extra-runs-conceded-per-team-year-2016.js');

  const sampleDataMatches = [
    {
      id: '1',
      season: '2016',
      winner: 'Chennai Super Kings',
    },
    {
      id: '2',
      season: '2016',
      winner: 'Mumbai Indians',
    },
    {
      id: '3',
      season: '2016',
      winner: 'Mumbai Indians',
    },
    {
      id: '4',
      season: '2016',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '5',
      season: '2016',
      winner: 'Royal Challengers Bangalore',
    },
    {
      id: '6',
      season: '2016',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '7',
      season: '2016',
      winner: 'Chennai Super Kings',
    },
    {
      id: '8',
      season: '2016',
      winner: 'Royal Challengers Bangalore',
    },
  ];

  const sampleDataDeliveries = [
    {
      match_id: '1',
      extra_runs: 122,
      bowling_team: 'Chennai Super Kings',
    },
    {
      match_id: '2',
      extra_runs: 105,
      bowling_team: 'Mumbai Indians',
    },
    {
      match_id: '3',
      extra_runs: 111,
      bowling_team: 'Mumbai Indians',
    },
    {
      match_id: '4',
      extra_runs: 123,
      bowling_team: 'Sunrisers Hyderabad',
    },
    {
      match_id: '5',
      extra_runs: 121,
      bowling_team: 'Royal Challengers Bangalore',
    },
    {
      match_id: '6',
      extra_runs: 68,
      bowling_team: 'Sunrisers Hyderabad',
    },
    {
      match_id: '7',
      extra_runs: 63,
      bowling_team: 'Kolkata Knight Rmatch_iders',
    },
    {
      match_id: '8',
      extra_runs: 60,
      bowling_team: 'Royal Challengers Bangalore',
    },
  ];

  let actualResult = {
    2016: {
      'Mumbai Indians': 216,
      'Chennai Super Kings': 122,
      'Royal Challengers Bangalore': 181,
      'Kolkata Knight Rmatch_iders': 63,
      'Sunrisers Hyderabad': 191,
    },
  };

  let receivedResult = extraRunsConcededPerTeamYear2016(
    sampleDataMatches,
    sampleDataDeliveries,
  );

  expect(actualResult).toEqual(receivedResult);
});
