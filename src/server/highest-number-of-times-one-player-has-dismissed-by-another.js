function highestNumberOfTimesDismissalsByAnotherPlayer(matches) {
  const dismissalCount = {};

  for (const match of matches) {
    if (match.player_dismissed != '') {
      if (dismissalCount[match.batsman] == undefined) {
        dismissalCount[match.batsman] = {};
      }

      if (dismissalCount[match.batsman][match.bowler] == undefined) {
        dismissalCount[match.batsman][match.bowler] = 1;
      } else {
        dismissalCount[match.batsman][match.bowler] += 1;
      }
    }
  }

  let maxValue = 0;

  for (let key in dismissalCount) {
    for (let key2 in dismissalCount[key]) {
      maxValue = Math.max(dismissalCount[key][key2], maxValue);
    }
  }

  const playerDismissals = [];
  for (let key in dismissalCount) {
    for (let key2 in dismissalCount[key]) {
      if (dismissalCount[key][key2] == maxValue) {
        playerDismissals.push([key, key2, dismissalCount[key][key2]]);
      }
    }
  }

  return playerDismissals;
}

module.exports = highestNumberOfTimesDismissalsByAnotherPlayer;
