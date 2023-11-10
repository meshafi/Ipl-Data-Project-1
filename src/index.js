const noOfMatchesPerYear = require('./server/number-of-matches-per-year.js');
const matchesWonPerTeamPerYear = require('./server/no-of-matches-won-per-team-per-year.js');
const noOfTeamWonTossAndMatch = require('./server/no-of-team-won-toss-and-match.js');
const playerWithHighestNoOfPotm = require('./server/player-with-highest-no-of-potm-each-season.js');
const extraRunsConcededPerTeamYear2016 = require('./server/extra-runs-conceded-per-team-year-2016.js');
const top10EconomicalBowlersYear2015 = require('./server/top-10-economical-bowlers-in-2015.js');
const strikeRateOfBatsmanEachSeason = require('./server/strike-rate-of-a-batsman-each-season.js');
const highestNumberOfTimesDismissalsByAnotherPlayer = require('./server/highest-number-of-times-one-player-has-dismissed-by-another.js');
const bowlerWithBestEconomyInSuperOver = require('./server/bowler-with-best-economy-in-super-overs.js');
const fs = require('fs');
const csv = require('csv-parser');
const { error } = require('console');

const matchesData = [];
const deliveriesData = [];
fs.createReadStream('./src/data/matches.csv')
  .pipe(csv({}))
  .on('data', (data) => matchesData.push(data))
  .on('end', () => {


    // let matchesCount = noOfMatchesPerYear(matchesData);
    // try {
    //   fs.writeFileSync(
    //     './src/public/output/no-of-matches-per-year.json',
    //     JSON.stringify(matchesCount, null, 2),
    //   );
    // } catch (error) {
    //   console.error('Error writing the file:', error);
    // }

    // let matches_won_year = matchesWonPerTeamPerYear(matchesData);
    // try {
    //   fs.writeFileSync(
    //     './src/public/output/no-of-matches-won-per-team-per-year.json',
    //     JSON.stringify(matches_won_year, null, 2),
    //   );
    // } catch (error) {
    //   console.error('Error writing the file:', error);
    // }

    // let toss_won_and_winner = noOfTeamWonTossAndMatch(matchesData);

    // try {
    //   fs.writeFileSync(
    //     './src/public/output/no-of-team-won-toss-and-match.json',
    //     JSON.stringify(toss_won_and_winner, null, 2),
    //   );
    // } catch (error) {
    //   console.error('Error writing the file:', error);
    // }

    // let player_with_potm = playerWithHighestNoOfPotm(matchesData);

    // try {
    //   fs.writeFileSync(
    //     './src/public/output/player-with-highest-no-of-potm-each-season.json',
    //     JSON.stringify(player_with_potm, null, 2),
    //   );
    // } catch (error) {
    //   console.error('Error writing the file:', error);
    // }

    // fs.createReadStream('./src/data/deliveries.csv')
    //   .pipe(csv({}))
    //   .on('data', (data) => deliveriesData.push(data))
    //   .on('end', () => {
    //     let extra_runs = extraRunsConcededPerTeamYear2016(
    //       matchesData,
    //       deliveriesData,
    //     );

    //     try {
    //       fs.writeFileSync(
    //         './src/public/output/extra-runs-conceded-per-team-year-2016.json',
    //         JSON.stringify(extra_runs, null, 2),
    //       );
    //     } catch (error) {
    //       console.error('Error writingn the file:', error);
    //     }

    //     let top10 = top10EconomicalBowlersYear2015(matchesData, deliveriesData);

    //     try {
    //       fs.writeFileSync(
    //         './src/public/output/top-10-economical-bowlers-in-2015.json',
    //         JSON.stringify(top10, null, 2),
    //       );
    //     } catch (error) {
    //       console.log('error writing the file', error);
    //     }

    //     let strRate = strikeRateOfBatsmanEachSeason(
    //       matchesData,
    //       deliveriesData,
    //     );

    //     try {
    //       fs.writeFileSync(
    //         './src/public/output/strike-rate-of-a-batsman-each-season.json',
    //         JSON.stringify(strRate, null, 2),
    //       );
    //     } catch (error) {
    //       console.log('error opening file', error);
    //     }

    //     let dismissalsHightestNumberOfTimes =
    //       highestNumberOfTimesDismissalsByAnotherPlayer(deliveriesData);

    //     try {
    //       fs.writeFileSync(
    //         './src/public/output/highest-number-of-times-one-player-has-dismissed-by-another.json',
    //         JSON.stringify(dismissalsHightestNumberOfTimes, null, 2),
    //       );
    //     } catch (error) {
    //       console.log('error opening file', error);
    //     }

    //     let bowlerWithBestEcoInSuperOver =
    //       bowlerWithBestEconomyInSuperOver(deliveriesData);

    //     try {
    //       fs.writeFileSync(
    //         './src/public/output/bowler-with-best-economy-in-super-overs.json',
    //         JSON.stringify(bowlerWithBestEcoInSuperOver, null, 2),
    //       );
    //     } catch (error) {
    //       console.log('error opening file', error);
    //     }
    //   });


  });
