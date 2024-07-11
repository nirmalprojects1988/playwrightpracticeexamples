import{test,expect} from "@playwright/test"

//this code will print all values from the dropdown
test('Read drop-down value and print', async({page}) => {
    await page.goto('https://letcode.in/dropdowns');
    const dropdown=await page.locator('#lang');
    const values = await dropdown.allInnerTexts();
    values.forEach(value => console.log(value));
    
});