import {test, expect} from '@playwright/test'

test("Login test part 2", async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

});