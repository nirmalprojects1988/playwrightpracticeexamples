import {expect,test} from "@playwright/test"

test('Find elements example', async({page}) => {
    //this code will provide the count of element whose tag == input and 
    //it will return 3 in this case
   await page.goto('https://www.saucedemo.com/');
    let element=await page.$$('input')
    if(element){
        const value=await element.length;
        console.log(`Element count is ${value}`);
        
    }
   await page.close();
    
});