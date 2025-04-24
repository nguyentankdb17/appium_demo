class HomeScreen {
    get profileButton() {
      return $('//*[@text="Profile"]');
    }
    get loginButton() {
      return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.Button');
    }
  }
  
  module.exports = new HomeScreen();