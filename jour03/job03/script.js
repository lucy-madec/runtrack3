$(document).ready(function () {
    const gridSize = 3;
    let tiles = [];
    let emptyTile = { row: gridSize - 1, col: gridSize - 1 }; // The last tile is initially empty
    let isGameOver = false;

    // Function to initialise the puzzle grid
    function initializePuzzle() {
        tiles = [];
        $('#puzzleContainer').empty();
        isGameOver = false;
        $('#resultMessage').text('');
        $('#restartButton').hide();

        // Generate a shuffled puzzle with the last tile being empty
        let tileNumbers = [...Array(gridSize * gridSize - 1).keys()].map(x => x + 1);
        tileNumbers = shuffleArray(tileNumbers);

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                if (row === gridSize - 1 && col === gridSize - 1) {
                    tiles.push(null); // Empty tile
                } else {
                    const tileNumber = tileNumbers.shift();
                    const tile = $('<div>')
                        .addClass('tile')
                        .css({
                            'background-image': `url('images/${tileNumber}.PNG')`,
                            'grid-row': row + 1,
                            'grid-column': col + 1
                        })
                        .data('row', row)
                        .data('col', col)
                        .click(moveTile);

                    $('#puzzleContainer').append(tile);
                    tiles.push(tile);
                }
            }
        }
    }

    // Function to shuffle the tile array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to move a tile
    function moveTile() {
        if (isGameOver) return;

        const tileRow = $(this).data('row');
        const tileCol = $(this).data('col');

        // Check if the tile is adjacent to the empty tile
        if (isAdjacentToEmptyTile(tileRow, tileCol)) {
            // Swap the tile with the empty tile
            $(this).data('row', emptyTile.row);
            $(this).data('col', emptyTile.col);
            $(this).css({ 
                'grid-row' : emptyTile.row + 1,
                'grid-column' : emptyTile.col + 1
            });

            // Update the empty tile's position
            emptyTile.row = tileRow;
            emptyTile.col = tileCol;

            checkIfPuzzleSolved();
        }
    }

    // Function to check if a tile is adjacent to the empty tile
    function isAdjacentToEmptyTile(row, col) {
        return (Math.abs(emptyTile.row - row) + Math.abs(emptyTile.col - col)) === 1;
    }

    // Function to the check if the puzzle is solved
    function checkIfPuzzleSolved() {
        let isSolved = true;
        $('#puzzleContainer .tile').each(function (index) {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            const tileNumber = parseInt($(this).css('background-image').match(/(\d)\.PNG/)[1]);

            // If any tile is out of place, the puzzle is not solved
            if (tileNumber !== row * gridSize + col + 1) {
                isSolved = false;
                return false;
            }
        });

        if (isSolved) {
            $('#resultMessage').text('Vous avez gagné').css('color', 'green');
            isGameOver = true;
            $('#restartButton').show();
        }
    }

    // Initialize the puzzle
    initializePuzzle();

    // Restart the game when the restart button is clicked
    $('#restartButton').click(function () {
        initializePuzzle();
    });
});