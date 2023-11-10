test('Test the bowler with best economy in super over', () => {
  const bowlerWithBestEconomyInSuperOver = require('../server/bowler-with-best-economy-in-super-overs.js');

  let sampleData = [
    {
      match_id: 1,
      bowler: 'Bumrah',
      is_super_over: 1,
      wide_runs: 0,
      batsman_runs: 1,
      noball_runs: 0,
      total_runs: 1,
      bye_runs: 0,
    },
    {
      match_id: 2,
      bowler: 'S Narine',
      is_super_over: 1,
      wide_runs: 0,
      batsman_runs: 4,
      noball_runs: 0,
      total_runs: 4,
      bye_runs: 0,
    },
    {
      match_id: 3,
      bowler: 'S Narine',
      is_super_over: 1,
      wide_runs: 0,
      batsman_runs: 1,
      noball_runs: 0,
      total_runs: 1,
      bye_runs: 0,
    },
    {
      match_id: 4,
      bowler: 'TS Mills',
      is_super_over: 1,
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 6,
      total_runs: 6,
      bye_runs: 0,
    },
    {
      match_id: 5,
      bowler: 'Umesh',
      is_super_over: 1,
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 1,
      total_runs: 1,
      bye_runs: 0,
    },
    {
      match_id: 6,
      bowler: 'Umesh',
      is_super_over: 1,
      wide_runs: 0,
      batsman_runs: 1,
      noball_runs: 0,
      total_runs: 1,
      bye_runs: 0,
    },
  ];
  let actualResult = {
    Bumrah: 6,
    Umesh: 6,
  };
  let receivedResult = bowlerWithBestEconomyInSuperOver(sampleData);

  expect(actualResult).toEqual(receivedResult);
});
