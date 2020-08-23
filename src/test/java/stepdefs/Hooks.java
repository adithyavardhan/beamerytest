    package stepdefs;

    import Utils.DriverUtils;
    import cucumber.api.java8.En;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.openqa.selenium.chrome.ChromeOptions;
    import org.openqa.selenium.firefox.FirefoxDriver;

    public class Hooks extends DriverUtils implements En {

        public Hooks(){
            Before(()->{

                StartDriver("chrome");
                driver.get("about:blank");

            });

            After(()->{

                if (driver!=null) {
                    driver.quit();
                }
            });
        }


        public void StartDriver(String browser) throws Exception {

            switch (browser){

                case "chrome":
                    System.setProperty("webdriver.chrome.driver","resources/chromedriver");
                    ChromeOptions options = new ChromeOptions();
                    driver = new ChromeDriver(options);
                    driver.manage().window().maximize();
                    break;

                case "firefox":
                    System.setProperty("webdriver.gecko.driver","resources/geckodriver");
                    driver = new FirefoxDriver();
                    driver.manage().window().maximize();
                    break;

                default:
                    throw new Exception("No implementation for Browser: "+browser);
            }
        }

    }

