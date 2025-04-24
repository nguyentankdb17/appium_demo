const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-4555',
  'appium:appPackage': 'com.example.tickethub',
  'appium:appActivity': '.MainActivity',
  'appium:autoGrantPermissions': true,
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // Click vao nut frofile
    const profileButton = await driver.$('//*[@text="Profile"]');
    await profileButton.click();

    // Click vao nut sign up
    const signupButton = await driver.$('//*[@text="Sign Up"]');
    await signupButton.click();

    // Dang ky tai khoan moi
    const emailTextInput = await driver.$('//*[@text="Enter Email"]');
    await emailTextInput.click();
    await driver.pause(500);
    await emailTextInput.sendKeys(["abc@gmail.com"]);

    const passwordTextInput = await driver.$('//*[@text="Password"]');
    await passwordTextInput.click();
    await driver.pause(500);
    await passwordTextInput.sendKeys(["123456789"]);

    const confirmPasswordTextInput = await driver.$('//*[@text="Confirm Password"]');
    await confirmPasswordTextInput.waitForDisplayed({ timeout: 5000 });
    await confirmPasswordTextInput.click();
    await driver.pause(500);
    await confirmPasswordTextInput.sendKeys(["123456789"]);

    // await driver.pause(1000);
    // const createAccountButton = await driver.$('//*[@text="Create Account"]');
    // await createAccountButton.click();

    // const seacrhInput = await driver.$('//*[@text="Search movies..."]');
    // await seacrhInput.click();
    // await seacrhInput.sendKeys(["Avengers"]);
    
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);