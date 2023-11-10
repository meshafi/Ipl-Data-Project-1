function noOfMatchesPerYear(matches){
    const matchCount={};
    for(const match of matches){
        if(matchCount[match.season]==undefined){
            matchCount[match.season]=1;
        }
        else{
            matchCount[match.season]+=1;
        }
    }
    return matchCount;
}
module.exports=noOfMatchesPerYear;