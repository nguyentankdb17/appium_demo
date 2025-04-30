class HomeScreen {
    get homeButton() {
      return $('//*[@text="Home"]');
    }
    
    get profileButton() {
      return $('//*[@text="Profile"]');
    }

    get loginButton() {
      return $('//*[@text="Login"]');
    }

    get signUpButton() {
      return $('//*[@text="Sign Up"]');
    }

    get searchBar() {
      return $('//android.widget.EditText/android.view.View');
    }

    get welcomeBackMessgae() {
      return $('//*[@text="Welcome back"]');
    }

    get firstSearchResult() {
      return $('//android.widget.ScrollView/android.view.View[3]/android.view.View');
    }

    async searchMovie(movieName) {
      await this.searchBar.click();
      await this.searchBar.clearValue();
      await browser.waitUntil(
          async () => (await this.searchBar.getText()) === '',
          {
              timeout: 3000,
              timeoutMsg: 'Search bar not cleared in time'
          }
      );
      await this.searchBar.sendKeys(movieName);
    }
  }
  
  module.exports = new HomeScreen();