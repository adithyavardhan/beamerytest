    package Utils;

    import org.openqa.selenium.JavascriptExecutor;
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.WebElement;
    import org.openqa.selenium.support.ui.ExpectedConditions;
    import org.openqa.selenium.support.ui.WebDriverWait;

    import java.util.List;
    import java.util.concurrent.TimeUnit;

    public class DriverUtils {

        public static WebDriver driver;

        protected void WaitFor(WebElement element){

            WebDriverWait wait = new WebDriverWait(driver,30);
            wait.until(ExpectedConditions.visibilityOf(element));
        }

        public void ClickAndWait(WebElement elementToClick, WebElement elementToWait){
            elementToClick.click();
            WaitFor(elementToWait);
        }

        public void WaitFor(boolean displayed){

            driver.manage().timeouts().implicitlyWait(30000, TimeUnit.MILLISECONDS);
        }

        protected void WaitForReadyState() {
            JavascriptExecutor js = (JavascriptExecutor)driver;
            boolean status = false;
            int count=0;
            while (!status&&count<=30){
                status = js.executeScript("return document.readyState").toString().equals("complete");
                driver.manage().timeouts().pageLoadTimeout(30000,TimeUnit.MILLISECONDS);
                count++;
            }
        }

        public void WaitforElementTobeClickable(WebElement ele){
            GenerateWebDriverWait(30).until(ExpectedConditions.elementToBeClickable(ele));
        }

        private WebDriverWait GenerateWebDriverWait(int seconds){
            return new WebDriverWait(driver,seconds);
        }

        public void WaitForElementsTobeDisplayed(List<WebElement> elements){
            GenerateWebDriverWait(30).until(ExpectedConditions.visibilityOfAllElements(elements));
        }
    }
