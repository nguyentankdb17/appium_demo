class LoginScreen {
    get inputEmail() {
      return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[1]/android.view.View');
    }
  
    get inputPassword() {
      return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[2]/android.view.View');
    }
  
    get btnLogin() {
      return $(
        '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Button'
      );
    }

    get errorEmptyMessage() {
        return $('//android.widget.TextView[@text="Email and password can\'t be empty"]');
      }

    get errorInvalidMessage() {
      return $('//android.widget.TextView[@text="The supplied auth credential is incorrect, malformed or has expired."]');
    }

    
  
    async login(email, password) {
        await this.inputEmail.clearValue();
        await this.inputPassword.clearValue();
        
        await sleep(2000);
    

        await this.inputEmail.click();
        await this.inputEmail.sendKeys(email);
        
        await this.inputPassword.click();
        await this.inputPassword.sendKeys(password);
    
        await this.btnLogin.click();
    }
    
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  
module.exports = new LoginScreen();