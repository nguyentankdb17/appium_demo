const HomeScreen = require('../pageobjects/home.screen');
const LoginScreen = require('../pageobjects/login.screen');

describe('Login Test', () => {
    it('should not login with empty inputs', async () => {
        await HomeScreen.profileButton.click();
        await HomeScreen.loginButton.click();
        // Perform login
        await LoginScreen.login([""], [""]);
        await expect(LoginScreen.errorEmptyMessage).toHaveText(
            "Email and password can't be empty"
            );
        });

    it('should not login with invalid credentials', async () => {
    // Perform login
    await LoginScreen.login(["wrongUser@gmail.com"], ["wrongPassword"]);
    await expect(LoginScreen.errorInvalidMessage).toHaveText(
        "The supplied auth credential is incorrect, malformed or has expired."
        );
    });

    it('should login with valid credentials', async () => {
    // Perform login
    await LoginScreen.login(["khanh@gmail.com"], ["12345678"]);
    await expect(HomeScreen.welcomeBackMessgae).toHaveText(
        "Welcome back"
        );
    });
});