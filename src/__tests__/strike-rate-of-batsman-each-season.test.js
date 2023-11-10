test('checks the strike rate of a batsman for a season', () => {
  const strikeRateOfBatsmanEachSeason = require('../server/strike-rate-of-a-batsman-each-season.js');

  const sampleDataMatches = [
    {
      id: 1,
      season: 2008,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 2,
      season: 2008,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 3,
      season: 2008,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 4,
      season: 2008,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 5,
      season: 2008,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 6,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 7,
      season: 2010,
      winner: 'Royal Challengers Bangalore',
    },
    {
      id: 8,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 9,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 10,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 11,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
    {
      id: 12,
      season: 2010,
      winner: 'Royal Challengers Banglore',
    },
  ];

  const sampleDataDeliveries = [
    {
      match_id: 1,
      extra_runs: 1,
      bowling_team: 'Royal Challengers Banglore',
      batsman: 'V Kohli',
      batsman_runs: 0,
      noball_runs: 0,
      wide_runs: 1,
    },
    {
      match_id: 2,
      extra_runs: 0,
      bowling_team: 'Royal Challengers Banglore',
      batsman: 'V Kohli',
      batsman_runs: 2,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 3,
      extra_runs: 1,
      bowling_team: 'Royal Challengers Banglore',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 4,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 0,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 5,
      extra_runs: 0,
      bowling_team: 'CSK',
      batsman: 'V Kohli',
      batsman_runs: 3,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 6,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 7,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 8,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 9,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 2,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 10,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 0,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 11,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
    {
      match_id: 12,
      extra_runs: 0,
      bowling_team: 'Rajasthan Royals',
      batsman: 'V Kohli',
      batsman_runs: 1,
      noball_runs: 0,
      wide_runs: 0,
    },
  ];

  let actualResult = {
    2008: {
      'V Kohli': '150.00',
    },
    2010: {
      'V Kohli': '100.00',
    },
  };
  let receivedResult = strikeRateOfBatsmanEachSeason(
    sampleDataMatches,
    sampleDataDeliveries,
  );

  expect(actualResult).toEqual(receivedResult);
});
