import { expect,test } from "@playwright/test";

test.skip('open page and go back again', async({page}) => {
    await page.goto('https://letcode.in/buttons')
    await page.getByRole('button',{name:'Goto Home'}).click();
    await page.waitForLoadState();
   await expect(page.getByText(' LetCode with Koushik',{exact:true})).toBeVisible();
    await page.goBack();
    await page.close();
});

