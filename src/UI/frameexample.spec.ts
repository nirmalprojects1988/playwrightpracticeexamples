import{test,expect} from "@playwright/test"

test('Interact with frame', async({page}) => {
    await page.goto('https://letcode.in/frame');
    const frame=await page.frameLocator('#firstFr');
    await frame.getByPlaceholder('Enter name').fill('nirmal');
    await page.close();
});

test('Interact with inner frame', async({page}) => {
    //here code is interacting with the child frame via parent frame
    await page.goto('https://letcode.in/frame')
    await page.frameLocator('#firstFr')
    .frameLocator('app-frame-content iframe')
    .getByPlaceholder('Enter email')
    .fill('test@gmail.com');
    await page.close();
});
test('intearct with frame by frame URL', async({page}) => {
    await page.goto('https://letcode.in/frame');
  // const parent=page.frame({ url: /.*frame.*/ });
   const childframe=page.frame({url:/.*innerFrame.*/});
   childframe?.getByPlaceholder('Enter email')
    .fill('test@gmail.com');
    await page.pause();
    await page.close();
    
});
