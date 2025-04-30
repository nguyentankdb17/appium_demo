class MovieScreen {
    get movieTitle() {
        return $('//android.widget.TextView[@text="Mission: Impossible"]');
    }

    get movieDetails() {
        return $('//android.widget.ScrollView');
    }
}

module.exports = new MovieScreen();