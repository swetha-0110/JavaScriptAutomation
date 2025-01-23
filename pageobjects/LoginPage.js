class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.signInbutton=page.locator("[value='Login']");
        this.username=page.locator("#userEmail");
        this.password=page.locator("#userPassword");

    }

  async LandOn()
  {
    await this.page.goto("https://rahulshettyacademy.com/client");

  }  

async ValidLogin(username,password)
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');

}

}

module.exports = {LoginPage};
