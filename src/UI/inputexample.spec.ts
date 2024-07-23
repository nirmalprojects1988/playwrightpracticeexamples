import {test} from "@playwright/test"


test.skip('Get place holder value by attribute',async ({page}) => {

    await page.goto('https://letcode.in/edit');
   const placeholdevalue=await page.getByPlaceholder('Enter first & last name').getAttribute('placeholder');
   console.log(placeholdevalue);
   await page.getByPlaceholder('Enter first & last name').pressSequentially('nirmal');
    await page.waitForTimeout(1000);
    await page.close();
    
});

test.skip('Append a text and press keyboard tab', async({page}) => {
    await page.goto('https://letcode.in/edit');
      const secondTextbox = page.getByPlaceholder('Enter').nth(1);
      await secondTextbox.click();
    await page.keyboard.press('End');
    await page.keyboard.type(' i am at the end');
    await page.keyboard.press('Tab');
    const value = await secondTextbox.inputValue();
    console.log(value);

    await page.close();
       
});

test.skip('What is inside the text box', async({page}) => {
    await page.goto('https://letcode.in/edit');
   let textinsidetextbox=await page.getByPlaceholder('Enter').nth(2).inputValue()
    console.log(`The input value within the text box is ${textinsidetextbox}`);
   await page.close();
    
});
test.skip('Clear the text', async({page}) => {
    await page.goto('https://letcode.in/edit')
    console.log(`Before clearing text ${await page.getByPlaceholder('Enter').nth(3).inputValue()}`)
    await page.getByPlaceholder('Enter').nth(3).clear();
     console.log(`After clearing text ${await page.getByPlaceholder('Enter').nth(3).inputValue()}`)
    await page.waitForTimeout(1000);
    await page.close();

});
test.skip('Confirm edit field is disabled', async({page}) => {
    await page.goto('https://letcode.in/edit');

  // Wait for the element with the 'disabled' class to appear
  const disabledElement = await page.waitForSelector('.input[disabled]');

  if (disabledElement) {
    // Check if the element is disabled
    const isDisabled = await disabledElement.evaluate((el) => {
      return el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true';
    });

    if (isDisabled) {
      console.log('Element with class "disabled" is disabled.');
    } else {
      console.log('Element with class "disabled" is enabled.');
    }
  } else {
    console.log('Element with class "disabled" not found.');
  }
});

test('Confirm text is readonly', async({page}) => {
    await page.goto('https://letcode.in/edit')
   let readonlyelelemnt= await page.waitForSelector('.input[readonly]');
    if (readonlyelelemnt) {
    // Check if the element is disabled
    const isReadonly = await readonlyelelemnt.evaluate((el) => {
      return el.hasAttribute('readonly');
    });
    if (isReadonly) {
      console.log('Element with class "readonly" is readonly.');
    } else {
      console.log('Element with class "readonly" is not readonly.');
    }
  } else {
    console.log('Element with class "readonly" not found.');
  }

});