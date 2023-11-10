test('checks the player with highest number of player of the match', () => {
  const playerWithHighestNoOfPotm = require('../server/player-with-highest-no-of-potm-each-season.js');

  let sampleData = [
    {
      id: '18',
      season: '2017',
      player_of_match: 'G Gambhir',
    },
    {
      id: '1',
      season: '2017',
      player_of_match: 'V Kohli',
    },
    {
      id: '5',
      season: '2017',
      player_of_match: 'V Kohli',
    },
    {
      id: '6',
      season: '2017',
      player_of_match: 'V Kohli',
    },
    {
      id: '7',
      season: '2017',
      player_of_match: 'V Kohli',
    },
    {
      id: '57',
      season: '2017',
      player_of_match: 'G Gambhir',
    },
    {
      id: '9',
      season: '2017',
      player_of_match: 'G Gambhir',
    },
    {
      id: '10',
      season: '2017',
      player_of_match: 'G Gambhir',
    },
    {
      id: '57',
      season: '2016',
      player_of_match: 'M Siraj',
    },
    {
      id: '12',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '13',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '14',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '15',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '16',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '17',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '18',
      season: '2016',
      player_of_match: 'M Shami',
    },
    {
      id: '19',
      season: '2016',
      player_of_match: 'M Shami',
    },
  ];

  let actualResult = {
    2016: {
      'M Shami': 8,
    },
    2017: {
      'G Gambhir': 4,
      'V Kohli': 4,
    },
  };
  let receivedResult = playerWithHighestNoOfPotm(sampleData);
  expect(actualResult).toEqual(receivedResult);
});
