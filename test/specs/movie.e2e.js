const HomeScreen = require('../pageobjects/home.screen');
const MovieScreen = require('../pageobjects/movie.screen');

describe('Movie Test Suite', () => {
    // Test case 1: should return search result when typing in the search bar
    it('TC1: should return search results', async () => {
        await HomeScreen.searchMovie(["Mission: Impossible"]);
        await expect(HomeScreen.firstSearchResult).toBeDisplayed();
    });

    // Test case 2: should show movie details when clicking at the search results
    it('TC2: should show movie details', async () => {
        await HomeScreen.firstSearchResult.click();
        await expect(MovieScreen.movieTitle).toHaveText(
            "Mission: Impossible"
        );
        await expect(MovieScreen.movieDetails).toBeDisplayed();
    }
    );
}
);