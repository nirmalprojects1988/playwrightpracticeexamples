import { test } from "@playwright/test"

let cityName: string = 'Chennai';
//this below code will print data from the table
test('get data from web table', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    let rows = await page.$$('//div[@class="tableFixHead"]//tbody//tr');
    for (let row of rows) {
        const cells = await row.$$('td');
        const name = await cells[0].textContent();
        const position = await cells[1].textContent();
        const city = await cells[2].textContent();
        const amount = await cells[3].textContent();
        console.log(`Name: ${name?.trim()}, Position: ${position?.trim()}, City: ${city?.trim()}, Amount: ${amount?.trim()}`);
    }
});

//this below code will print data filter by city


test('print data those belong to chennai', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows = await page.$$('//div[@class="tableFixHead"]//tbody//tr');

    for (const row of rows) {
        const cells = await row.$$('td');
        const city = await cells[2].textContent();

        if (city === cityName) {
            const name = await cells[0].textContent();
            const position = await cells[1].textContent();
            const amount = await cells[3].textContent();

            console.log(`Name: ${name?.trim()}, Position: ${position?.trim()}, City: ${city?.trim()}, Amount: ${amount?.trim()}`);
        }
    }

});

//this code will count of the city

test(`print count of the ${cityName} city `, async ({ page }) => {
    let count: number = 0;
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows = await page.$$('//div[@class="tableFixHead"]//tbody//tr');

    for (const row of rows) {
        const cells = await row.$$('td');
        const city = await cells[2].textContent();

        if (city === cityName) {
            count++;
        }
    }
    console.log(`Total number of ${count} belongs to ${cityName} `);
});

//print how many positions are there for engineering deparment and their city
let positions = 'Engineer';
let city: string | null;
let position: string | null;
test(`Print ${positions} and their cities`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows = await page.$$('//div[@class="tableFixHead"]//tbody//tr');

    for (const row of rows) {
        const cells = await row.$$('td');
        position = await cells[1].textContent();
        if (position == positions) {
            city = await cells[2].textContent();
            console.log(`${position?.trim()} and its city is ${city?.trim()}`);
        }
    }
});