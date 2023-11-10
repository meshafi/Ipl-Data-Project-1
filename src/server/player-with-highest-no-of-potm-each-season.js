function playerWithHighestNoOfpotmCount(matches) {
  const potmCount = {};

  for (const match of matches) {
    if (potmCount[match.season] == undefined) {
      potmCount[match.season] = {};
    }
    if (potmCount[match.season][match.player_of_match] == undefined) {
      potmCount[match.season][match.player_of_match] = 1;
    } else {
      potmCount[match.season][match.player_of_match] += 1;
    }
  }

  const result = {};
  for (let key in potmCount) {
    let mx = 0;

    for (let key2 in potmCount[key]) {
      mx = Math.max(mx, potmCount[key][key2]);
    }

    for (let key2 in potmCount[key]) {
      if (potmCount[key][key2] == mx) {
        if (result[key] == undefined) {
          result[key] = {};
        }
        result[key][key2] = potmCount[key][key2];
      }
    }
  }
  return result;
}
module.exports = playerWithHighestNoOfpotmCount;
