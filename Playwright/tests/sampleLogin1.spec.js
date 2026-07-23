import{test, expect} from "@playwright/test"

test("Testing Login Page", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login")

    await page.getByLabel("Username").type("tomsmith", 5000);

    await page.getByLabel("Password").type("SuperSecretPassword!", 7000);

    await page.getByRole("button", {name:"Login"}).click();
    
});