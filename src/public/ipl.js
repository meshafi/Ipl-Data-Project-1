console.log("fadshoi");

// 1.Number of matches per year
function matchesPerYear(matches){

    Highcharts.chart('container-1', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Number of matches played by teams per year '
        },
        xAxis: {
            title: {
                text: 'Years'
               },
            categories:Object.keys(matches),
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: Math.min(...Object.values(matches)),
            tickInterval:10,
            title: {
                text: 'No of Matches'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'no of matches',
                data:Object.values(matches),
                borderColor: '#5997DE'
            }
        ]
    });
}








// 2.Matches won per team per year
function MatchesWonPerTeamPerYear(teamData){
    const teamNames = Array.from(
        new Set(Object.values(teamData).flatMap((yearData) => Object.keys(yearData)))
      );
  
      const chartData = [];
      const years = Object.keys(teamData);
      
      const teams = Array.from(new Set(years.map(year => Object.keys(teamData[year])).flat()));

      teams.forEach((team) => {
          const teamStats = years.map((year) => {
              return teamData[year][team] || 0;
          });

          chartData.push({
              name: team,
              data: teamStats
          });
      });
        
    
      Highcharts.chart('container-8', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Number of Matches won by team each year'
          },
          xAxis: {
              categories: years
          },
          yAxis: {
              title: {
                  text: 'Wins'
              }
          },
          series: chartData
      });
}




//3. Extra runs conceded per team per year
function extraRunsConcededPerTeamYear2016(matches){
    
    Highcharts.chart('container-2', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Extra runs conceded per team in the year 2016'
        },
        xAxis: {
            title: {
                text: 'Extra Runs'
               },
            categories:Object.keys(matches),
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: Math.min(...Object.values(matches)),
            tickInterval:10,
            title: {
                text: 'Extra runs'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Extra Runs',
                data:Object.values(matches),
                borderColor: '#5997DE'
            }
        ]
    });
    
}










// 4.Top 10 economical bowlers 2015
function top10EconomicalBowlers2015(matches){
    const playerArray = matches.map((item) => item[0]);
    const economyArray=matches.map((item) => item[1]);
    
    Highcharts.chart('container-3', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Top 10 economical bowlers in the year 2015'
        },
        xAxis: {
            title: {
                text: 'Players'
               },
            categories:playerArray,
        },
        yAxis: {
            min: Math.min(...economyArray)-2,
            tickInterval:2,
            title: {
                text: 'Economy'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Economy',
                data:economyArray,
                borderColor: '#5997DE'
            }
        ]
    });
}







// 5.Number of times each team won toss and match.
function numberOfTimesTeamWonTossAndMatch(matches){
    Highcharts.chart('container-4', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Number of times each team won toss as well as match',
        },
        xAxis: {
            title: {
                text: 'Teams'
               },
            categories:Object.keys(matches),
        },
        yAxis: {
            min: Math.min(...Object.values(matches))-2,
            tickInterval:20,
            title: {
                text: 'Number of times team won'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Toss won and Matches',
                data:Object.values(matches),
                borderColor: '#5997DE'
            }
        ]
    });   
}






// 6. Player with highest number of player of the match each season.
function playerWithHighestPotm(playerData){
    const year=[];
    for(let key in playerData){
        year.push(parseInt(key,10));
    }

    Highcharts.chart('container-7', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: `Player with highest number of 'Player Of The Match' each season`
        },
        xAxis: {
            title: {
                text: 'Teams'
               },
            categories:Object.values(playerData),
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min:Math.min(...year),
            tickInterval:10,
            title: {
                text: 'Season'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Season',
                data:year,
                borderColor: '#5997DE'
            }
        ]
    });
    
}






// 7.Strie rate of a batsman per season.
function strikeRateOfBatsmanPerSeason(strikeRate){
    
    Highcharts.chart('container-5', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Strike rate of a batsman for each season for Virat Kohli',
        },
        xAxis: {
            title: {
                text: 'Season'
               },
            categories:Object.keys(strikeRate),
        },
        yAxis: {
            min: Math.min(...Object.values(strikeRate)),
            tickInterval:10,
            title: {
                text: 'Strike Rate'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Strike Rate',
                data:Object.values(strikeRate),
                borderColor: '#5997DE'
            }
        ]
    });   
}






//8. Hightest number of times one player got dismissed by another player.
function highestNumberOfTimesPlayerGotDissmissed(playerData){
   



    const playerCombinations = playerData.map(data => `${data[0]} dismissed by ${data[1]}`);
        const dismissalCounts = playerData.map(data => data[2]);

        Highcharts.chart('container-9', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Highest number of times a player got dissmissed by another player'
            },
            xAxis: {
                categories: playerCombinations
            },
            yAxis: {
                title: {
                    text: 'Dismissals Count'
                }
            },
            series: [{
                name: 'Dismissals',
                data: dismissalCounts
            }]
        });

}







// 9.Bowlwer with best economy in super overs.
function bowlerWithBestEconomy(playerData){
    Highcharts.chart('container-6', {

        chart: {
            type: 'column',
            zoomType: 'y'
        },
        title: {
            text: 'Bowler with best economy in super overs',
        },
        xAxis: {
            title: {
                text: 'Player'
               },
            categories:Object.keys(playerData),
        },
        yAxis: {
            min:0,
            tickInterval:2,
            title: {
                text: 'Economy'
            },
            labels: {
                overflow: 'justify',
                format: '{value}'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{y}'
                }
            }
        },
        tooltip:{
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Economy',
                data:Object.values(playerData),
                borderColor: '#5997DE'
            }
        ]
    });      
}




