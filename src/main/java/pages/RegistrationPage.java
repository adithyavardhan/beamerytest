package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class RegistrationPage {

    public RegistrationPage(WebDriver driver){

        PageFactory.initElements(driver,this);
    }

    @FindBy(css = ".account_creation")
    public WebElement AccountCreationForm;

    @FindBy(css = "#id_gender1")
    public WebElement MrGenderRadioButton;


    @FindBy(css = "#customer_firstname")
    public WebElement CustomerFirstNameField;

    @FindBy(css = "#customer_lastname")
    public WebElement CustomerLastNameField;

    @FindBy(css = "#email")
    public WebElement EmailRegistrationForm;

    @FindBy(css = "#passwd")
    public WebElement PasswordField;

    @FindBy(css = "#firstname")
    public WebElement AddressFirstNameField;

    @FindBy(css = "#lastname")
    public WebElement AddressLastNameField;

    @FindBy(css = "#days")
    public WebElement DaysPicker;

    @FindBy(css = "#months")
    public WebElement MonthsPicker;

    @FindBy(css = "#years")
    public WebElement YearsPicker;

    @FindBy(css = "#address1")
    public WebElement AddressField1;

    @FindBy(css = "#city")
    public WebElement CityField;

    @FindBy(css = "#id_state")
    public WebElement StatePicker;

    @FindBy(css = "#postcode")
    public WebElement PostCodeField;

    @FindBy(css = "#id_country")
    public WebElement CountryPicker;

    @FindBy(css = "#phone_mobile")
    public WebElement MobileNumberField;

    @FindBy(css = "#alias")
    public WebElement AddressAliasField;

    @FindBy(css = "#submitAccount")
    public WebElement SubmitAccountButton;


    public void DateOfBirthPicker(){
        Select date = new Select(DaysPicker);
        date.selectByValue("20");
        Select month = new Select(MonthsPicker);
        month.selectByValue("1");
        Select year = new Select(YearsPicker);
        year.selectByValue("2001");
    }

    public void StatePicker(){
        Select state = new Select(StatePicker);
        state.selectByVisibleText("Alaska");

    }

    public void CountryPicker(){
        Select country = new Select(CountryPicker);
        country.selectByValue("21");
    }
    public void FillRegistrationForm(){

     MrGenderRadioButton.click();
     CustomerFirstNameField.sendKeys("adithya");
     CustomerLastNameField.sendKeys("alladi");
     PasswordField.sendKeys("Password1");
     DateOfBirthPicker();
     AddressField1.sendKeys("14");
     CityField.sendKeys("london");
     StatePicker();
     PostCodeField.sendKeys("12345");
     CountryPicker();
     MobileNumberField.sendKeys("012345678");
     AddressAliasField.clear();
     AddressAliasField.sendKeys("alias address");






    }

}

