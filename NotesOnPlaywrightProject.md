# 🚀 Playwright Learning Notes (Beginner to Advanced)

> Author: Sachin
>
> Purpose:
> Understand every part of a Playwright project instead of just copying code.

---

# What is Playwright?

Playwright is a browser automation framework developed by Microsoft.

It can automatically perform actions such as:

- Open a browser
- Visit a website
- Click buttons
- Fill forms
- Upload files
- Download files
- Verify text
- Take screenshots
- Record videos
- Test APIs

Think of Playwright as a robot that controls a browser exactly like a human.

```
Human
   ↓
Browser

Playwright
   ↓
Browser
```

---

# What happens when we install Playwright?

We ran:

```bash
npm init -y
```

This created

```
package.json
```

Think of it as:

> Identity Card of the project

It stores

- Project Name
- Version
- Scripts
- Installed Packages

---

Then we ran

```bash
npm init playwright@latest
```

This command

- Installs Playwright
- Creates project structure
- Downloads browsers
- Creates configuration
- Creates sample tests

---

# Project Structure

```
Playwright/
│
├── node_modules/
├── tests/
├── package.json
├── package-lock.json
└── playwright.config.js
```

Let's understand each one.

---

# node_modules

Purpose

Stores every package used by the project.

Example

```
playwright
playwright-core
@playwright/test
```

Think of it as

```
Warehouse
```

Whenever the project needs a package, it comes from here.

Never edit files inside node_modules.

---

# tests

Purpose

Stores all automation test files.

Example

```
tests/
    login.spec.js
    dashboard.spec.js
    api.spec.js
```

Every file ending with

```
.spec.js
```

is treated as a Playwright test.

---

# package.json

Purpose

Identity card of the project.

Example

```json
{
  "name":"playwright",
  "version":"1.0.0"
}
```

It also stores

- dependencies
- devDependencies
- scripts

---

# package-lock.json

Purpose

Locks the exact versions of installed packages.

Without it

Developer A

```
Playwright 1.55
```

Developer B

```
Playwright 1.56
```

Different versions can produce different behaviour.

package-lock.json ensures everyone installs the same versions.

---

# playwright.config.js

Purpose

Controls the behaviour of Playwright.

Think of it as

```
Settings Menu
```

Everything is controlled from here.

Examples

- Browser
- Retry
- Timeout
- Reporter
- Parallel Execution

---

# Understanding playwright.config.js

## @ts-check

```javascript
// @ts-check
```

Enables TypeScript checking inside JavaScript.

Benefits

✔ Better auto-completion

✔ Finds typing mistakes

---

## import

```javascript
import { defineConfig, devices } from '@playwright/test';
```

Imports Playwright tools.

defineConfig

Creates configuration.

devices

Contains predefined browser/device settings.

---

## defineConfig()

```javascript
export default defineConfig({
```

Everything inside this object becomes Playwright configuration.

Think

```
Configuration Box
```

---

# testDir

```javascript
testDir:'./tests'
```

Meaning

Look inside

```
tests/
```

for test files.

---

# fullyParallel

```javascript
fullyParallel:true
```

Meaning

Run multiple tests simultaneously.

Example

Without Parallel

```
Login

↓

Dashboard

↓

Camera

↓

Settings
```

With Parallel

```
Login

Dashboard

Camera

Settings
```

All run together.

Advantage

Much faster execution.

---

# forbidOnly

```javascript
forbidOnly:!!process.env.CI
```

Purpose

Prevents developers from accidentally committing

```javascript
test.only()
```

because it would execute only one test.

In CI

Playwright throws an error.

---

# retries

```javascript
retries: process.env.CI ? 2 : 0
```

Meaning

If running in CI

Retry failed tests 2 times.

Else

Retry 0 times.

Equivalent

```javascript
if(CI){

retry=2;

}
else{

retry=0;

}
```

---

# workers

```javascript
workers:process.env.CI?1:undefined
```

Workers

Number of browsers executing tests simultaneously.

CI

```
1 Worker
```

Laptop

Uses available CPU cores automatically.

---

# reporter

```javascript
reporter:'html'
```

Generates

```
HTML Report
```

After execution

You can open

```
playwright-report/index.html
```

to see

- Passed Tests
- Failed Tests
- Time Taken

---

# use

```javascript
use:{
```

Default settings shared by every test.

Examples

- Browser
- Base URL
- Screenshots
- Videos
- Traces

---

# trace

```javascript
trace:'on-first-retry'
```

Think of trace as

```
Black Box Recorder
```

Just like an airplane.

If a test fails

Playwright records

- Clicks
- Network
- DOM
- Console
- Screenshots

Useful for debugging.

---

# projects

```javascript
projects:[
```

Runs tests on multiple browsers.

Example

Chromium

Firefox

WebKit

One test

↓

Three browsers

---

# devices

```javascript
devices['Desktop Chrome']
```

Loads predefined browser settings.

Instead of manually writing

```
Viewport

Resolution

User Agent
```

Playwright already knows them.

---

# Understanding example.spec.js

Import

```javascript
import { test, expect } from '@playwright/test';
```

test

Creates a test.

expect

Checks whether something is true.

---

Test

```javascript
test('Login Test', async({page})=>{
```

Meaning

Create a test named

```
Login Test
```

page

Represents the browser tab.

---

goto

```javascript
await page.goto(...)
```

Meaning

Open website.

Equivalent

Typing URL manually.

---

click

```javascript
await page.click()
```

Meaning

Click a button.

---

fill

```javascript
await page.fill()
```

Meaning

Type inside textbox.

---

expect

```javascript
await expect()
```

Verifies expected behaviour.

Example

```
Title

Text

URL

Visibility

Buttons

Images
```

---

# Common Commands

Run every test

```bash
npx playwright test
```

Run one file

```bash
npx playwright test tests/login.spec.js
```

Run one browser

```bash
npx playwright test --project=chromium
```

Open report

```bash
npx playwright show-report
```

Open UI mode

```bash
npx playwright test --ui
```

Debug mode

```bash
npx playwright test --debug
```

---

# Project Flow

```
Write Test

↓

Playwright Reads

playwright.config.js

↓

Launch Browser

↓

Execute Test

↓

Collect Results

↓

Generate Report
```

---

# Things to Remember

✅ node_modules stores packages.

✅ package.json stores project information.

✅ package-lock.json locks versions.

✅ tests contains automation scripts.

✅ playwright.config.js controls Playwright.

✅ page represents browser tab.

✅ expect verifies results.

✅ await waits for browser actions.

---

# My Goal

I don't want to memorise Playwright.

I want to understand

- WHY every file exists.
- WHY every command is used.
- HOW Playwright works internally.
- HOW to debug failures.
- HOW real QA engineers build automation frameworks.

Understanding comes before coding.
