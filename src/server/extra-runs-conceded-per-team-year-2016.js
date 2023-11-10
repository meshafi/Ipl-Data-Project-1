function extraRunsConcededPerTeamYear2016(matches, deliveries) {
  let teams = {};
  teams[2016] = {};
  matches.forEach((element, index) => {
    if (teams[2016][deliveries[index].bowling_team] == undefined) {
      teams[2016][deliveries[index].bowling_team] = parseInt(
        deliveries[index].extra_runs,
        10,
      );
    } else {
      teams[2016][deliveries[index].bowling_team] += parseInt(
        deliveries[index].extra_runs,
        10,
      );
    }
  });
  return teams;
}

module.exports = extraRunsConcededPerTeamYear2016;
