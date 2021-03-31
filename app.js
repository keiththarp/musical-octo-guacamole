
const islandFinder = (array) => {
    // Start the exploration with zero islands discovered
    let islands = 0

    // Loop through rows
    for (let i = 0; i < array.length; i++) {
        // Loop through items in columns
        for (let j = 0; j < array[i].length; j++) {
            // If we land on an island, increase our count and explore to claim entire island
            if (array[i][j] === 1) {
                islands += 1
                mark(i, j)
            };
        };
    };

    function mark(x, y) {
        // Prevent exploring off grid, water, or claimed land
        if (x < 0 || x >= array.length || y < 0 || y >= array[0].length || array[x][y] === "x" || array[x][y] === 0) {
            return;
        };
        // Mark sector as explored land
        array[x][y] = "x";
        // Recursively explore adjoining sectors for connected land
        mark(x + 1, y)
        mark(x - 1, y)
        mark(x, y + 1)
        mark(x, y - 1)
    };
    return islands
};

const testCase = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
]
islandFinder(testCase);