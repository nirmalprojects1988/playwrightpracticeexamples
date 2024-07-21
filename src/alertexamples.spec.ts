import{test,expect} from "@playwright/test"

test.skip('Accept the Alert', async({page}) => {
    page.on('dialog', async dialog => {
    console.log(dialog.message());
    dialog.accept();
  });
    await page.goto('https://letcode.in/alert');
    await page.getByText('Simple Alert').click();
    await page.waitForLoadState();
    await page.evaluate(() => alert('Hey! Welcome to LetCode'));
    await page.close();
});
test.skip('Dismiss the Alert & print the alert text', async({page}) => {
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        dialog.dismiss();
    })
    await page.goto('https://letcode.in/alert');
    page.getByText('Confirm Alert');
    await page.evaluate(()=>alert('Are you happy with LetCode?'));
    await page.waitForLoadState();
    await page.close();
});
test.skip('Modern alert example', async({page}) => {
    await page.goto('https://letcode.in/alert')
    await page.getByText('Modern Alert',{exact:true}).click();
    await page.waitForLoadState();
    expect(page.getByText('Modern Alert - Some people address me as sweet alert as well ',{exact:true})).toHaveText('Modern Alert - Some people address me as sweet alert as well ');
    await page.getByLabel('close').click();
    await page.close();
    
});

test('Handle prompt alert', async ({ page }) => {
   page.on('dialog', async dialog => {
    console.log(dialog.type());
    dialog.accept();
    });
    await page.goto('https://letcode.in/alert');
    await page.getByText('Prompt Alert').click();
    await page.close();

});