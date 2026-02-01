#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the league data
function loadLeagueData() {
  const dataPath = path.join(__dirname, 'public', 'leagueData-2025.json');
  const rawData = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(rawData);
}

// Parse score and determine winner
function parseMatch(match) {
  if (!match.score || match.score === '') {
    return null; // No result yet
  }

  // Handle special cases like "WO" (walkover), "abandono", etc.
  if (match.score.includes('WO') || match.score.includes('abandono')) {
    // For WO or abandono, determine winner based on the format
    if (match.score.includes('0-9') && match.score.includes('WO')) {
      return { winner: match.player2, loser: match.player1 };
    } else if (match.score.includes('9-0') && match.score.includes('WO')) {
      return { winner: match.player1, loser: match.player2 };
    } else if (match.score.includes('abandono')) {
      // For abandono, the player who didn't abandon wins
      // Based on the format "6-5 - (abandono)", the first player wins
      return { winner: match.player1, loser: match.player2 };
    }
  }

  // Remove tie-break scores and other annotations
  let cleanScore = match.score.split(' - ')[0];

  const scoreParts = cleanScore.split('-');
  if (scoreParts.length !== 2) {
    return null; // Invalid score format
  }

  const score1 = parseInt(scoreParts[0]);
  const score2 = parseInt(scoreParts[1]);

  if (isNaN(score1) || isNaN(score2)) {
    return null; // Invalid score
  }

  if (score1 > score2) {
    return { winner: match.player1, loser: match.player2 };
  } else if (score2 > score1) {
    return { winner: match.player2, loser: match.player1 };
  }

  return null; // Tie (shouldn't happen in tennis)
}

// Calculate points based on division
function getDivisionMultiplier(divisionNumber) {
  return 1 - (parseInt(divisionNumber) - 1) * 0.1; // Division 1 = 1.0, Division 2 = 0.9, Division 3 = 0.8, etc.
}

// Calculate base points for match result
function getMatchPoints(isWin) {
  return isWin ? 3 : 1; // Win = 3 points, Loss = 1 point
}

// Calculate ranking
function calculateRanking(leagueData) {
  const playerStats = {};

  // Initialize all players
  leagueData.forEach((month) => {
    month.monthData.forEach((division) => {
      division.players.forEach((player) => {
        if (!playerStats[player]) {
          playerStats[player] = {
            name: player,
            wins: 0,
            losses: 0,
            totalPoints: 0,
            divisionBreakdown: {}
          };
        }
      });
    });
  });

  // Process all matches
  leagueData.forEach((month) => {
    month.monthData.forEach((division) => {
      const divisionNumber = parseInt(division.division);
      const divisionMultiplier = getDivisionMultiplier(divisionNumber);

      division.matches.forEach((match) => {
        const result = parseMatch(match);
        if (result) {
          const { winner, loser } = result;

          // Calculate points for this match
          const winPoints = getMatchPoints(true) * divisionMultiplier;
          const lossPoints = getMatchPoints(false) * divisionMultiplier;

          // Update winner stats
          if (playerStats[winner]) {
            playerStats[winner].wins++;
            playerStats[winner].totalPoints += winPoints;

            if (!playerStats[winner].divisionBreakdown[divisionNumber]) {
              playerStats[winner].divisionBreakdown[divisionNumber] = {
                wins: 0,
                losses: 0,
                points: 0
              };
            }
            playerStats[winner].divisionBreakdown[divisionNumber].wins++;
            playerStats[winner].divisionBreakdown[divisionNumber].points += winPoints;
          }

          // Update loser stats
          if (playerStats[loser]) {
            playerStats[loser].losses++;
            playerStats[loser].totalPoints += lossPoints;

            if (!playerStats[loser].divisionBreakdown[divisionNumber]) {
              playerStats[loser].divisionBreakdown[divisionNumber] = {
                wins: 0,
                losses: 0,
                points: 0
              };
            }
            playerStats[loser].divisionBreakdown[divisionNumber].losses++;
            playerStats[loser].divisionBreakdown[divisionNumber].points += lossPoints;
          }
        }
      });
    });
  });

  // Convert to array and sort by total points (descending), then by wins (descending)
  const ranking = Object.values(playerStats).sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    return b.wins - a.wins;
  });

  return ranking;
}

// Display ranking
function displayRanking(ranking) {
  console.log('\n=== TENNIS LEAGUE RANKING ===\n');
  console.log(
    'Rank | Player                    | Wins | Losses | Total Points | Division Breakdown'
  );
  console.log('-'.repeat(90));

  ranking.forEach((player, index) => {
    const rank = (index + 1).toString().padStart(4);
    const name = player.name.padEnd(25);
    const wins = player.wins.toString().padStart(4);
    const losses = player.losses.toString().padStart(6);
    const points = player.totalPoints.toFixed(1).padStart(12);

    // Create division breakdown string
    const divBreakdown = Object.entries(player.divisionBreakdown)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([div, stats]) => {
        const wins = stats.wins || 0;
        const losses = stats.losses || 0;
        const points = (stats.points || 0).toFixed(1);
        return `D${div}:${wins}w${losses}l(${points}p)`;
      })
      .join(' ');

    console.log(
      `${rank} | ${name} | ${wins} | ${losses} | ${points} | ${divBreakdown}`
    );
  });

  console.log('\n=== POINTS SYSTEM ===');
  console.log('Base Points: Win = 3 points, Loss = 1 point');
  console.log('Division Multipliers:');
  console.log('Division 1: × 1.0 (Win = 3.0p, Loss = 1.0p)');
  console.log('Division 2: × 0.9 (Win = 2.7p, Loss = 0.9p)');
  console.log('Division 3: × 0.8 (Win = 2.4p, Loss = 0.8p)');
  console.log('Division 4: × 0.7 (Win = 2.1p, Loss = 0.7p)');
  console.log('Division 5: × 0.6 (Win = 1.8p, Loss = 0.6p)');
  console.log('Division 6: × 0.5 (Win = 1.5p, Loss = 0.5p)');
  console.log('Division 7: × 0.4 (Win = 1.2p, Loss = 0.4p)');
  console.log('Division 8: × 0.3 (Win = 0.9p, Loss = 0.3p)');
  console.log('Division 9: × 0.2 (Win = 0.6p, Loss = 0.2p)');
  console.log('Division 10: × 0.1 (Win = 0.3p, Loss = 0.1p)');
  console.log(
    '\nNote: Wins include walkovers (WO) and matches won by opponent abandonment'
  );
}

function main() {
  try {
    console.log('Loading league data...');
    const leagueData = loadLeagueData();

    console.log('Calculating ranking...');
    const ranking = calculateRanking(leagueData);

    displayRanking(ranking);
  } catch (error) {
    console.error('Error calculating ranking:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  calculateRanking,
  loadLeagueData,
  parseMatch,
  getDivisionMultiplier,
  getMatchPoints
};
