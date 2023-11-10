test('checks the number of matches won every year by Individual team', () => {
  const matches_won_per_team_per_year = require('../server/no-of-matches-won-per-team-per-year.js');

  const testData = [
    {
      id: '1',
      season: '2007',
      city: 'Hyderabad',
      date: '2007-04-05',
      team1: 'Sunrisers Hyderabad',
      team2: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
      toss_decision: 'field',
      result: 'normal',
      dl_applied: '0',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '2',
      season: '2007',
      city: 'Hyderabad',
      date: '2007-06-03',
      team1: 'Sunrisers Hyderabad',
      team2: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
      toss_decision: 'field',
      result: 'normal',
      dl_applied: '0',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '3',
      season: '2007',
      city: 'Bangalore',
      date: '2007-04-08',
      team1: 'Royal Challengers Bangalore',
      team2: 'Delhi Daredevils',
      winner: 'Royal Challengers Bangalore',
    },
    {
      id: '4',
      season: '2008',
      city: 'Hyderabad',
      date: '2008-04-09',
      team1: 'Gujarat Lions',
      team2: 'Sunrisers Hyderabad',
      toss_winner: 'Sunrisers Hyderabad',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '5',
      season: '2008',
      city: 'Hyderabad',
      date: '2008-05-09',
      team1: 'Royal Challengers Banglore',
      team2: 'Sunrisers Hyderabad',
      toss_winner: 'Sunrisers Hyderabad',
      winner: 'Sunrisers Hyderabad',
    },
    {
      id: '6',
      season: '2009',
      city: 'Jaipur',
      date: '2009-05-04',
      team1: 'Chennai Super Kings',
      team2: 'Rajasthan Royals',
      toss_winner: 'Chennai Super Kings',
      winner: 'Rajasthan Royals',
    },
    {
      id: '10',
      season: '2011',
      city: 'Delhi',
      date: '2011-05-08',
      team1: 'Delhi Daredevils',
      team2: 'Chennai Super Kings',
      toss_winner: 'Chennai Super Kings',
      winner: 'Chennai Super Kings',
    },
    {
      id: '11',
      season: '2011',
      city: 'Kolkata',
      date: '2011-05-08',
      team1: 'Kolkata Knight Riders',
      team2: 'Royal Challengers Bangalore',
      toss_winner: 'Kolkata Knight Riders',
      winner: 'Kolkata Knight Riders',
    },
    {
      id: '13',
      season: '2012',
      city: 'Chennai',
      date: '2012-05-10',
      team1: 'Chennai Super Kings',
      team2: 'Kings XI Punjab',
      toss_winner: 'Kings XI Punjab',
      winner: 'Chennai Super Kings',
    },
    {
      id: '14',
      season: '2012',
      city: 'Chennai',
      date: '2012-05-10',
      team1: 'Chennai Super Kings',
      team2: 'Kings XI Punjab',
      toss_winner: 'Kings XI Punjab',
      winner: 'Chennai Super Kings',
    },
  ];
  const actualResult = {
    2007: {
      'Sunrisers Hyderabad': 2,
      'Royal Challengers Bangalore': 1,
    },
    2008: {
      'Sunrisers Hyderabad': 2,
    },
    2009: {
      'Rajasthan Royals': 1,
    },

    2011: {
      'Chennai Super Kings': 1,
      'Kolkata Knight Riders': 1,
    },
    2012: {
      'Chennai Super Kings': 2,
    },
  };
  const receivedResult = matches_won_per_team_per_year(testData);
  expect(receivedResult).toEqual(actualResult);
});
