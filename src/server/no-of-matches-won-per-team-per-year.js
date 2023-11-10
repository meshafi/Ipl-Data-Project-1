
function matchesWonPerTeamPerYear(matches){

  const result = matches.reduce((accumulator, match) => {

    if (!accumulator[match.season]) {
      accumulator[match.season] = {};
    }
  
    if (accumulator[match.season][match.winner] === undefined) {
        accumulator[match.season][match.winner] = 1;
    } else {
      accumulator[match.season][match.winner] += 1;
    }
  
    return accumulator;
  }, {});

  
   return result;
}
module.exports=matchesWonPerTeamPerYear;

