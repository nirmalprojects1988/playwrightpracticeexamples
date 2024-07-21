import{test,expect,Browser} from "@playwright/test"

test.skip('New Window example', async({page}) => {
    await page.goto('https://demoqa.com/browser-windows');
   const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#windowButton')
    ]);
    newPage.waitForLoadState('load');
     const title = await newPage.title();
    console.log("Child window title: " + title);
    await newPage.close();
    console.log(page.title());
    page.close();


});

test('working with new popup window', async({page}) => {
    
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  console.log(await page.title());
  
  const [page1Promise] =await Promise.all([ page.waitForEvent('popup'),
  page.getByRole('button', { name: 'Open Window' }).click()]);
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Access all our Courses' }).click();
 console.log(page1.title);
 page1.close();
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
console.log(page.title);
page.close();

});