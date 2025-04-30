const HomeScreen = require('../pageobjects/home.screen');
const LoginScreen = require('../pageobjects/login.screen');

describe('Login Test Suite', () => {
    // Before each test, navigate to the login screen
    beforeEach(async () => {
        try {
            await HomeScreen.profileButton.click();
        } catch (e) {
            await driver.back();
        }
        await HomeScreen.loginButton.click();
    });
    
    // Test case 1: should not login with empty inputs
    it('TC1: should not login with empty inputs', async () => {
        await LoginScreen.login([""], [""]);
        await expect(LoginScreen.errorEmptyMessage).toHaveText(
            "Email and password can't be empty"
            );
        });

    // Test case 2: should not login with invalid credentials
    it('TC2: should not login with invalid credentials', async () => {
    await LoginScreen.login(["wrongUser@gmail.com"], ["wrongPassword"]);
    await expect(LoginScreen.errorInvalidMessage).toHaveText(
        "The supplied auth credential is incorrect, malformed or has expired."
        );
    });

    // Test case 3: should login with valid credentials
    it('TC3: should login with valid credentials', async () => {
    await LoginScreen.login(["khanh@gmail.com"], ["12345678"]);
    await expect(HomeScreen.welcomeBackMessgae).toHaveText(
        "Welcome back"
        );
    });
});