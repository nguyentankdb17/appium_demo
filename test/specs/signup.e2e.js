const HomeScreen = require('../pageobjects/home.screen');
const SignupScreen = require('../pageobjects/signup.screen');
const LoginScreen = require('../pageobjects/login.screen');

describe('Signup Test Suite', () => {
    // Before each test, navigate to the signup screen
    beforeEach(async () => {
        try {
            await HomeScreen.profileButton.click();
        } catch (e) {
            await driver.back();
        }
        await HomeScreen.signUpButton.click();
    });

    // Test case 1: should not proceed to next step with empty credentials
    it('TC1: should not proceed to next step with empty credentials', async () => {
        await SignupScreen.signup([""], [""], [""]);
        await expect(SignupScreen.btnConfirm).not.toBeDisplayed();
    });

    // Test case 2: should not proceed to next step with invalid email address format
    it('TC2: should not proceed to next step with invalid email address format', async () => {
        await SignupScreen.signup(["abc123456"], ["12345678"], ["12345678"]);
        await expect(SignupScreen.btnConfirm).not.toBeDisplayed();
    });

    // Test case 3: should not proceed to next step with unmatched password inputs
    it('TC3: should not proceed to next step with unmatched password inputs', async () => {
        await SignupScreen.signup(["abc123456@gmail.com"], ["12345678"], ["123456789"]);
        await expect(SignupScreen.btnConfirm).not.toBeDisplayed();
    });

    // Test case 4: should not proceed to next step with email already registered
    it('TC4: should not proceed to next step with email registered', async () => {
        await SignupScreen.signup(["ntth@gmail.com"], ["123456789"], ["123456789"]);
        await expect(SignupScreen.btnConfirm).not.toBeDisplayed();
    });

    // Test case 5: should be completed with valid information
    it('TC5: should be completed with valid information', async () => {
        await SignupScreen.signup(["newuserxyz@gmail.com"], ["12345678"], ["12345678"]);
        await SignupScreen.fillAdditionalInfo(["Nguyen Tan"], ["21"], ["0987789987"], ["Nghe An"]);
        await expect(LoginScreen.btnLogin).toBeDisplayed();
    }
    );
});