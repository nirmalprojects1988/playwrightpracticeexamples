import{test,expect} from "@playwright/test"

test('Add a new user', async({request}) => {
    const response=await request.post('https://reqres.in/api/users',{
        data:{
            "name": "Nirmal",
            "job": "QA"
        }
        
    });
    const resData = JSON.parse(await response.text())
    expect(response.status()).toBe(201);
    expect(resData.name).toContain("Nirmal");

});