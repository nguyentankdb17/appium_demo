class SignupScreen {
    get inputEmail() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[1]');
    }

    get inputPassword() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[2]');
    }

    get inputConfirmPassword() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[3]');
    }

    get btnCreateAccount() {
        return $('//*[@text="Create Account"]');
    }

    get inputName() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[1]');
    }

    get inputAge() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[2]');
    }

    get inputPhone() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[3]');
    }

    get inputAddress() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[4]');
    }

    

    get btnConfirm() {
        return $('//*[@text="Done"]');
    }

    async signup(email, password, confirmPassword) {
        await this.inputEmail.clearValue();
        await this.inputPassword.clearValue();
        await this.inputConfirmPassword.clearValue();
    

        await this.inputEmail.click();
        await this.inputEmail.sendKeys(email);
        
        await this.inputPassword.click();
        await this.inputPassword.sendKeys(password);

        await this.inputConfirmPassword.click();
        await this.inputConfirmPassword.sendKeys(confirmPassword);
    
        await this.btnCreateAccount.click();
    }

    async fillAdditionalInfo(name, age, phone, address) {
        await this.inputName.clearValue();
        await this.inputAge.clearValue();
        await this.inputPhone.clearValue();
        await this.inputAddress.clearValue();

        await this.inputName.click();
        await this.inputName.sendKeys(name);

        await this.inputAge.click();
        await this.inputAge.sendKeys(age);

        await this.inputPhone.click();
        await this.inputPhone.sendKeys(phone);

        await this.inputAddress.click();
        await this.inputAddress.sendKeys(address);

        await this.btnConfirm.click();
    }
}

module.exports = new SignupScreen();