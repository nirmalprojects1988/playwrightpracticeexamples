import{test,expect} from "@playwright/test"

test('Verify that image exists', async({page}) => {
    await page.goto('https://letcode.in/elements');
    await page.getByPlaceholder('Enter your git user name eg., ortonikc').fill('nirmalprojects1988');
    await page.getByRole('button',{name:'Search'}).click();
    await expect(page.getByAltText('Placeholder image')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Placeholder image' })).toHaveAttribute('src',/.+/);
});