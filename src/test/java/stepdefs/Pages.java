    package stepdefs;

    import Utils.DriverUtils;
    import pages.*;

    public class Pages extends DriverUtils {
        public static HomePage homePage = new HomePage(driver);
        public static LoginPage loginPage = new LoginPage(driver);
        public static RegistrationPage registrationPage = new RegistrationPage(driver);
        public static MyAccountPage myAccountPage = new MyAccountPage(driver);


    }
