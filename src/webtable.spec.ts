import{test,expect} from "@playwright/test"

test('get data from web table', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   let rows= await page.$$('//div[@class="tableFixHead"]//tbody//tr');
   for(let row of rows){
    const cells=await row.$$('td');
    const name = await cells[0].textContent();
    const position = await cells[1].textContent();
    const city = await cells[2].textContent();
    const amount = await cells[3].textContent();
    console.log(`Name: ${name?.trim()}, Position: ${position?.trim()}, City: ${city?.trim()}, Amount: ${amount?.trim()}`);
   }
});