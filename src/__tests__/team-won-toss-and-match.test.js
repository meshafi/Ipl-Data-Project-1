const noOfTeamWonTossAndMatch= require('../server/no-of-team-won-toss-and-match.js');

let sampleData=[
    {
        id: '1',
        season: '2008',
        city: 'Mumbai',
        date: '2008-05-04',
        team1: 'Mumbai Indians',
        team2: 'Delhi Daredevils',
        toss_winner: 'Delhi Daredevils',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Mumbai Indians',
      },
      {
        id: '2',
        season: '2008',
        city: 'Jaipur',
        date: '2008-05-04',
        team1: 'Chennai Super Kings',
        team2: 'Rajasthan Royals',
        toss_winner: 'Chennai Super Kings',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '0',
        winner: 'Rajasthan Royals',
      },
      {
        id: '3',
        season: '2008',
        city: 'Bangalore',
        date: '2008-05-05',
        team1: 'Royal Challengers Bangalore',
        team2: 'Kings XI Punjab',
        toss_winner: 'Kings XI Punjab',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Kings XI Punjab',
      },
      {
        id: '4',
        season: '2008',
        city: 'Chennai',
        date: '2008-05-06',
        team1: 'Chennai Super Kings',
        team2: 'Deccan Chargers',
        toss_winner: 'Deccan Chargers',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Deccan Chargers',
      },
      {
        id: '5',
        season: '2008',
        city: 'Mumbai',
        date: '2008-05-07',
        team1: 'Rajasthan Royals',
        team2: 'Mumbai Indians',
        toss_winner: 'Mumbai Indians',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Mumbai Indians',
      },
      {
        id: '6',
        season: '2009',
        city: 'Delhi',
        date: '2009-05-08',
        team1: 'Delhi Daredevils',
        team2: 'Chennai Super Kings',
        toss_winner: 'Chennai Super Kings',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Chennai Super Kings',
      },
      {
        id: '7',
        season: '2009',
        city: 'Kolkata',
        date: '2009-05-08',
        team1: 'Kolkata Knight Riders',
        team2: 'Royal Challengers Bangalore',
        toss_winner: 'Kolkata Knight Riders',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '0',
        winner: 'Kolkata Knight Riders',
      },
      {
        id: '8',
        season: '2009',
        city: 'Jaipur',
        date: '2009-05-09',
        team1: 'Deccan Chargers',
        team2: 'Rajasthan Royals',
        toss_winner: 'Rajasthan Royals',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Rajasthan Royals',
      },
      {
        id: '9',
        season: '2010',
        city: 'Bangalore',
        date: '2010-05-28',
        team1: 'Royal Challengers Bangalore',
        team2: 'Mumbai Indians',
        toss_winner: 'Mumbai Indians',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Mumbai Indians',
      },
      {
        id: '10',
        season: '2010',
        city: 'Chennai',
        date: '2010-05-10',
        team1: 'Chennai Super Kings',
        team2: 'Kings XI Punjab',
        toss_winner: 'Kings XI Punjab',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Chennai Super Kings',
      },
      {
        id: '11',
        season: '2010',
        city: 'Hyderabad',
        date: '2010-05-11',
        team1: 'Kolkata Knight Riders',
        team2: 'Deccan Chargers',
        toss_winner: 'Kolkata Knight Riders',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '0',
        winner: 'Kolkata Knight Riders',
      },
      {
        id: '12',
        season: '2011',
        city: 'Jaipur',
        date: '2011-05-11',
        team1: 'Delhi Daredevils',
        team2: 'Rajasthan Royals',
        toss_winner: 'Rajasthan Royals',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Rajasthan Royals',
      },
      {
        id: '13',
        season: '2011',
        city: 'Chandigarh',
        date: '2011-05-12',
        team1: 'Royal Challengers Bangalore',
        team2: 'Kings XI Punjab',
        toss_winner: 'Royal Challengers Bangalore',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '0',
        winner: 'Kings XI Punjab',
      },
      {
        id: '14',
        season: '2011',
        city: 'Kolkata',
        date: '2011-05-13',
        team1: 'Kolkata Knight Riders',
        team2: 'Delhi Daredevils',
        toss_winner: 'Kolkata Knight Riders',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '0',
        winner: 'Kolkata Knight Riders',
      }
]

let actualResult={
    'Kings XI Punjab': 1,
    'Deccan Chargers': 1,
    'Mumbai Indians': 2,
    'Chennai Super Kings': 1,
    'Kolkata Knight Riders': 3,
    'Rajasthan Royals': 2
  }
  

let receivedResult=noOfTeamWonTossAndMatch(sampleData);

test('Test for hightest number of times a player has dismissed by anotherplay',()=>{
  expect(actualResult).toEqual(receivedResult);
})