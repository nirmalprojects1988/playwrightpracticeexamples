import { expect,test } from "@playwright/test";

test.skip('open page and go back again', async({page}) => {
    await page.goto('https://letcode.in/buttons')
    await page.getByRole('button',{name:'Goto Home'}).click();
    await page.waitForLoadState();
   await expect(page.getByText(' LetCode with Koushik',{exact:true})).toBeVisible();
    await page.goBack();
    await page.close();
});

test('get x and y cordinates', async({page}) => {
    await page.goto('https://letcode.in/buttons');
   const findLocationBtn = await page.$('button#location');

  if (findLocationBtn) {
    // Click the Find Location button
    await findLocationBtn.click();

    // Wait for a brief moment for any animations or changes
    await page.waitForTimeout(1000); // Adjust timeout as needed

    // Get the bounding box of the Find Location button
    const box = await findLocationBtn.boundingBox();

    if (box) {
      // Calculate and log the center coordinates
      const centerX = box.x + box.width / 2;
      const centerY = box.y + box.height / 2;
      console.log("Center X:", centerX);
      console.log("Center Y:", centerY);
    } else {
      console.log("Failed to retrieve bounding box for the Find Location button.");
    }
  } else {
    console.log('Find Location button not found on the page.');
  } 

});