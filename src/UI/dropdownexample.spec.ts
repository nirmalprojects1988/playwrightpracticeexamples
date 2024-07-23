import{test,expect} from "@playwright/test"

//this code will print all values from the dropdown
test('Read drop-down value and print', async({page}) => {
    await page.goto('https://letcode.in/dropdowns');
    const dropdown=page.locator('#lang');
    const values = await dropdown.allInnerTexts();
    values.forEach(value => console.log(value));
    
});
test('Read specific drop-down value and print it', async({page}) => {
    await page.goto('https://letcode.in/dropdowns')
    const drpdwnvalues=page.locator('#lang');
    const values=await drpdwnvalues.allInnerTexts();
    const specificValue = 'JavaScript';
    if(values.includes(specificValue)){
        console.log(`The specific value "${specificValue}" is present in the dropdown.`);
    }
    else{
        console.log(`The specific value "${specificValue}" is not found in the dropdown.`);
    }
    await page.close();
});

test('Select the apple using visible text', async({page}) => {
    //this code will select a passed parameter value from the first drop down
    await page.goto('https://letcode.in/dropdowns');
    const dropdownelement=page.locator('#fruits');
    const selectvalue='Apple'
    await dropdownelement.selectOption(selectvalue);
   expect(page.getByText(`You have selected ${selectvalue}`)).toBeVisible();
    await page.close();

});

//multi select example
test('Select your super heros', async({page}) => {
    await page.goto('https://letcode.in/dropdowns');
    const dropdown=page.locator('#superheros');
   const selectvalue:string[]=['Aquaman','The Avengers','Batman'];
    await page.waitForTimeout(5000);
    await dropdown.selectOption(selectvalue);
    expect(page.getByText(`You have selected ${selectvalue[0]}`,{exact:true})).toBeVisible();
    await page.close();
});

test('Get first selected option in dropdown', async({page}) => {
    await page.goto('https://letcode.in/dropdowns');
    const dropdown =page.locator('#lang');
    const selectedOption =dropdown.locator('option:checked');
    const selectedText = await selectedOption.textContent();
    console.log(`First selected option: ${selectedText}`);
    await page.close();
});
