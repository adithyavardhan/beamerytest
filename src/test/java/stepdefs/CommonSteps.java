    package stepdefs;

    import Utils.DriverUtils;
    import cucumber.api.java8.En;

    public class CommonSteps extends DriverUtils implements En {
        public CommonSteps(){

            Given("^I am on automation practice home page$", () -> {

                driver.get("http://automationpractice.com/index.php?");
                WaitForReadyState();

                WaitFor(Pages.homePage.SigninButton);

            });

            Given("^I am on registration page$", () -> {

                driver.get("http://automationpractice.com/index.php?");
                ClickAndWait(Pages.homePage.SigninButton,Pages.loginPage.CreateEmailField);
                Pages.loginPage.CreateEmailField.sendKeys("alladi7@yopmail.com");
                ClickAndWait(Pages.loginPage.SubmitCreateButton,Pages.registrationPage.AccountCreationForm);


            });

            Given("^I am on create account page$", () -> {

                driver.get("http://automationpractice.com/index.php?");
                ClickAndWait(Pages.homePage.SigninButton,Pages.loginPage.CreateEmailField);

            });
        }
    }
