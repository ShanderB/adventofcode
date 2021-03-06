/* --- Day 4: Giant Squid ---
You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.

Maybe it wants to play bingo?

Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)

The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
After the first five numbers are drawn (7, 4, 9, 5, and 11), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
After the next six numbers are drawn (17, 23, 2, 0, 14, and 21), there are still no winners:

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
Finally, 24 is drawn:

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: 14 21 17 24 4).

The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board? */


function createGrid() {
    const arraySize = 100
    var baseGrid = new Array(arraySize);

    // Populate Array
    for (let i = 0; i < arraySize; i++) {
        const h = Math.floor(Math.random() * arraySize).toString();

        if (h < 10) {
            baseGrid[i] = '0' + h;
        } else {
            baseGrid[i] = h;
        }
    }
    return baseGrid
}



var completeGrid = createGrid()

var amountPlayers = 5;
const gridSize = 5;
var players = new Array(amountPlayers);

//Create the grids for the players
for (let i = 0; i < amountPlayers; i++) {
    players[i] = new Array(gridSize);
    for (let j = 0; j < amountPlayers; j++) {
        players[i][j] = new Array(gridSize);
    }
}

//Populate players grid
// for (ajax in players) {}
for (let player = 0; player < amountPlayers; player++) {
    for (let row = 0; row < gridSize; row++) {
        for (let collum = 0; collum < gridSize; collum++) {
            players[player][row][collum] = takeRandomNumber()
        }
    }
}

function takeRandomNumber() {
    const number = completeGrid[Math.floor(Math.random() * 100)]
    return number
}


players = [
    [
        ['93', '81', '81', '45', '54'],
        ['64', '91', '16', '90', '91'],
        ['75', '05', '69', '73', '41'],
        ['79', '10', '68', '74', '50'],
        ['08', '97', '14', '57', '60']
    ],
    [
        ['44', '88', '93', '69', '66'],
        ['81', '97', '08', '02', '52'],
        ['63', '31', '26', '93', '47'],
        ['36', '02', '09', '29', '79'],
        ['79', '78', '69', '74', '35']
    ],
    [
        ['22', '78', '41', '02', '26'],
        ['58', '54', '66', '36', '91'],
        ['79', '36', '31', '31', '81'],
        ['35', '31', '08', '02', '45'],
        ['54', '58', '34', '63', '56']
    ],
    [
        ['41', '54', '07', '42', '56'],
        ['65', '44', '58', '86', '84'],
        ['75', '19', '47', '65', '90'],
        ['26', '56', '35', '45', '79'],
        ['42', '47', '97', '47', '86']
    ],
    [
        ['48', '45', '78', '69', '87'],
        ['41', '74', '81', '36', '86'],
        ['05', '41', '72', '36', '91'],
        ['88', '35', '54', '26', '34'],
        ['05', '24', '24', '68', '93']
    ]
]

//Check if winner
var winner = false
let drawedNumber = []
let playersMatch = []

while (!winner) {
    let tempDrawedNumber = takeRandomNumber()

    if (!drawedNumber.includes(tempDrawedNumber)) { //Avoid same number //todo create a validation. Unique takeRandomNumber
        drawedNumber.push(tempDrawedNumber)

        for (let player = 0; player < amountPlayers; player++) {
            for (let row = 0; row < gridSize; row++) {
                for (let collum = 0; collum < gridSize; collum++) {
                    if (players[player][row][collum] == '93' /*tempDrawedNumber*/) {               //Search occurrence on tables
                        /* console.log(`Player: ${player}  Row: ${row}  Collum: ${collum}`)
                        console.log(players[player]) */
                        winner = true

                        playersMatch.push({ 'player': player, 'collum': collum })                //todo Descobrir como fazer a valida????o de ganhador. Est?? criando os grids, players e sorteando os n??meros.

                    }
                }
            }
        }
    }
}










































































































/* function printGrid(baseGrid, gridSize) {
    console.log('\n===============')
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            process.stdout.write(baseGrid[i][j] + ' ');
        }
        process.stdout.write('|\n');
    }
    console.log('===============\n')
}

function createGrid(value) {
    var gridSize = value
    var baseGrid = new Array(gridSize);

    // Create Array
    for (var i = 0; i < gridSize; i++) {
        baseGrid[i] = new Array(gridSize);
    }

    // Populate Array
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            const h = Math.floor(Math.random() * 100).toString();

            if (h < 10) {
                baseGrid[i][j] = '0' + h;
            } else {
                baseGrid[i][j] = h;
            }
        }
    }
    printGrid(baseGrid, gridSize)
    return {baseGrid, gridSize}
}




createGrid(5) */