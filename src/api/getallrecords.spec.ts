import{test,expect} from "@playwright/test"

test('get user data', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    const resData = JSON.parse(await response.text())
    console.log(resData)
    expect(response.status()).toBe(200)
});