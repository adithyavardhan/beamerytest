    package stepdefs;

    import Utils.DriverUtils;
    import cucumber.api.java8.En;
    import org.junit.Assert;



    public class RegistrationSteps extends DriverUtils implements En {

        public RegistrationSteps() {



            When("^I click on Sign in button$", () -> {

               ClickAndWait(Pages.homePage.SigninButton,Pages.loginPage.CreateEmailField);

            });

            Then("^I should be navigated to login page$", () -> {

                Assert.assertTrue(Pages.loginPage.CreateEmailField.isDisplayed());

            });

            When("^I enter email address$", () -> {

                 Pages.loginPage.CreateEmailField.sendKeys("alladi7@yopmail.com");

            });

            When("^I click on create account button$", () -> {

                ClickAndWait(Pages.loginPage.SubmitCreateButton, Pages.registrationPage.AccountCreationForm);

            });

            Then("^I am navigated to registration page$", () -> {

                Assert.assertTrue(Pages.registrationPage.AccountCreationForm.isDisplayed());

            });


            When("^I enter all personal information$", () -> {

                Pages.registrationPage.FillRegistrationForm();

            });

            When("^I clicks on Register button$", () -> {

                Pages.registrationPage.SubmitAccountButton.click();

            });

            Then("^account is created successfully$", () -> {

                Assert.assertTrue(Pages.myAccountPage.SignOutButton.isDisplayed());

            });

            When("^I click on create account button with empty email field$", () -> {

                Pages.loginPage.SubmitCreateButton.click();

            });


            Then("^invalid email address error message is shown$", () -> {

                Assert.assertEquals(Pages.loginPage.AccountErrorMessage,"Invalid email address.");

            });


            When("^I enter first name and last name$", () -> {

                Pages.registrationPage.CustomerFirstNameField.sendKeys("alladi");
                Pages.registrationPage.CustomerLastNameField.sendKeys("vardhan");


            });

            Then("^first name and last name should be updated in address section$", () -> {

                String addressFirstName = Pages.registrationPage.AddressFirstNameField.getText();
                String addressLastName = Pages.registrationPage.AddressLastNameField.getText();
                Assert.assertEquals("alladi",addressFirstName);
                Assert.assertEquals("vardhan",addressLastName);

            });


        }
    }
