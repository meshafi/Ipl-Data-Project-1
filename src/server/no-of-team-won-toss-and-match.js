function noOfTeamWonTossAndMatch(matches){
    const teams={}
    
    for(const match of matches){
        
        if(match.winner == match.toss_winner){
            if(teams[match.winner]==undefined){
                teams[match.winner]=1;
            }
            else{
                teams[match.winner]+=1;
            }
        }
    }
    
    return teams;

}

module.exports=noOfTeamWonTossAndMatch;