
fetch('./output/no-of-matches-per-year.json')
  .then(response => response.json())
  .then(data => {
      matchesPerYear(data);
});



fetch(`./output/no-of-matches-won-per-team-per-year.json`)
  .then(response => response.json())
  .then(matches => {
    MatchesWonPerTeamPerYear(matches);
});



fetch('./output/extra-runs-conceded-per-team-per-year-2016.json')
  .then(response => response.json())
  .then(matches => {
    extraRunsConcededPerTeamYear2016(matches);
});



fetch('./output/top-10-economical-bowlers-in-2015.json')
  .then(response => response.json())
  .then(matches => {
    top10EconomicalBowlers2015(matches);
});




fetch('./output/no-of-team-won-toss-and-match.json')
  .then(response => response.json())
  .then(matches => {
    numberOfTimesTeamWonTossAndMatch(matches);
});




fetch('./output/player-with-highest-no-of-potm-each-season.json')
    .then(response=> response.json())
    .then(playerData =>{
      playerWithHighestPotm(playerData);
})




fetch('./output/strike-rate-of-a-batsman-each-season.json')
  .then(response => response.json())
  .then(matches => {
    strikeRateOfBatsmanPerSeason(matches);
});


fetch('./output/highest-number-of-times-one-player-has-dismissed-by-another.json')
     .then(response=>response.json())
     .then(playerData=>{
      highestNumberOfTimesPlayerGotDissmissed(playerData);
})




fetch('./output/bowler-with-best-economy-in-super-overs.json')
   .then(response => response.json())
   .then(playerData =>{
    bowlerWithBestEconomy(playerData);
   })

