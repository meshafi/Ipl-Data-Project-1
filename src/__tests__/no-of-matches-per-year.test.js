test('checks the number of matches played every year', () => {
  const matches_per_year = require('../server/number-of-matches-per-year.js');

  let sampleData = [
    {
      id: '1',
      season: '2006',
      city: 'Hyderabad',
      date: '2017-04-05',
      team1: 'Sunrisers Hyderabad',
      team2: 'Royal Challengers Bangalore',
    },
    {
      id: '2',
      season: '2006',
      city: 'Pune',
      date: '2017-04-06',
      team1: 'Mumbai Indians',
      team2: 'Rising Pune Supergiant',
    },
    {
      id: '3',
      season: '2006',
      city: 'Rajkot',
      date: '2017-04-07',
      team1: 'Gujarat Lions',
      team2: 'Kolkata Knight Riders',
    },
    {
      id: '4',
      season: '2007',
      city: 'Jaipur',
      date: '2008-05-11',
      team1: 'Delhi Daredevils',
      team2: 'Rajasthan Royals',
    },
    {
      id: '5',
      season: '2007',
      city: 'Chandigarh',
      date: '2008-05-12',
      team1: 'Royal Challengers Bangalore',
      team2: 'Kings XI Punjab',
    },
    {
      id: '6',
      season: '2007',
      city: 'Kolkata',
      date: '2008-05-13',
      team1: 'Kolkata Knight Riders',
      team2: 'Delhi Daredevils',
    },
    {
      id: '7',
      season: '2008',
      city: 'Mumbai',
      date: '2008-05-14',
      team1: 'Chennai Super Kings',
      team2: 'Mumbai Indians',
    },
    {
      id: '8',
      season: '2009',
      city: 'Chandigarh',
      date: '2008-05-28',
      team1: 'Kings XI Punjab',
      team2: 'Rajasthan Royals',
    },
    {
      id: '9',
      season: '2010',
      city: 'Delhi',
      date: '2008-05-15',
      team1: 'Delhi Daredevils',
      team2: 'Deccan Chargers',
    },
    {
      id: '10',
      season: '2010',
      city: 'Mumbai',
      date: '2008-05-16',
      team1: 'Kolkata Knight Riders',
      team2: 'Mumbai Indians',
    },
  ];

  let actualResult = {
    2006: 3,
    2007: 3,
    2008: 1,
    2009: 1,
    2010: 2,
  };
  let receivedResult = matches_per_year(sampleData);

  expect(actualResult).toEqual(receivedResult);
});
