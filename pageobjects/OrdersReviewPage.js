const{test,expect} = require('@playwright/test');
class OrdersReviewPage
{
    constructor(page)
    {
        this.page= page;
        this.country= page.locator("[placeholder*='Country']");
        this.dropdown= page.locator(".ta-results");
        this.emailId= page.locator(".user_name [type='text']").first();
        this.submit= page.locator(".action_submit");
        this.orderConfirmationText= page.locator(".hero-primary");
        this.orderId= page.locator(".em-spacer-1 .ng-star-inserted");


    }

async searchCountryAndSelect(countryCode,countryName)
{
    await this.country.type(countryCode,{delay:100});
    await this.dropdown.waitFor();
    const optionsCount= await this.dropdown.locator("button").count();
    for(let i =0; i< optionsCount; i++)
        {
          const text= await this.dropdown.locator("button").nth(i).textContent();
            if(text.trim()===countryName)
            {
             await this.dropdown.locator("button").nth(i).click();
             break;
            }
 
          } 
}

}
module.exports={OrdersReviewPage};

