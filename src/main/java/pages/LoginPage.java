package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(css = "#email_create")
    public WebElement CreateEmailField;

    @FindBy(css = "#SubmitCreate")
    public WebElement SubmitCreateButton;

    @FindBy(css = "#create_account_error")
    public WebElement AccountErrorMessage;


}
