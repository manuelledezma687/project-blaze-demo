# BlazeDemo Example for Playwright

## Installation.
Provide clear and concise instructions on how to install your project and its dependencies. You can use the following command to install dependencies:

~~~
npm install
~~~

## Commands.
Here are some useful native commands from Playwright, you can run:
~~~
- npx playwright test: 
Run all end-to-end tests.
- npx playwright test --ui: 
Start the interactive UI mode.
- npx playwright test --project=chromium: Run tests only on Desktop Chrome.
- npx playwright test example: 
Run tests in a specific file.
- npx playwright test --debug: 
Run tests in debug mode.
- npx playwright codegen: 
Automatically generate tests with Codegen.
~~~
## Running Tests.
To get started, you can run the following commands:
~~~
npx playwright test
npx playwright test --project=chromium --headed
~~~
## Reports.
After tests you you can launch this command to see the report.
~~~
npm run report
~~~
## Environments.
To set the environment you can set in command terminal:

For Windows.
~~~
set NODE_ENV=prod 
~~~
