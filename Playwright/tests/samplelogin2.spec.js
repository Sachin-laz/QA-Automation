import {test, expect} from '@playwright/test'

test("Login test part 2", async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    await expect(page.getByRole('heading', {name:'Test Login'})).toBeVisible();

    await page.getByRole('textbox', {name:"Username"}).fill('student', {delay:200});

    await page.getByRole('textbox', {name:'Password'}).fill('Password123', {delay:200});

    await page.getByRole('button', {name:'Submit'}).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')

    await expect(page.getByRole('heading',{name:'Logged In Successfully'})).toBeVisible();

    await page.getByRole('link', {name:'Log out'}).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')

     await page.getByRole('textbox', {name:"Username"}).fill('student', {delay:200});

    await page.getByRole('textbox', {name:'Password'}).fill('student123', {delay:200});

    await page.getByRole('button', {name:'Submit'}).click();

    await page.pause();

    await expect(page.locator('#error')).toContainText('Your password is invalid!');

});

