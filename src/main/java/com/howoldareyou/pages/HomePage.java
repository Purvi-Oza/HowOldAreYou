package com.howoldareyou.pages;

import com.howoldareyou.utility.Utility;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    @CacheLookup
    @FindBy(id = "inputName")
    WebElement Name;

    @CacheLookup
    @FindBy(id = "submitButton")
    WebElement submit;

    @CacheLookup
    @FindBy(id = "help_birthday")
    WebElement text;

    @CacheLookup
    @FindBy(id = "help_name")
    WebElement text1;
    @CacheLookup
    @FindBy(id= "inputBirthday")
    WebElement birthdate;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='logo cursive']")
    WebElement logo;

    public void enterName(String name1) {
        sendTextToElement(Name, name1);
    }

    public void clickSubmit() {
        clickOnElement(submit);
    }

    public String verifyText(){
        return getTextFromElement(text);
    }
    public String verifyTextName(){
        return getTextFromElement(text1);
    }

    public void enterBirthdate(String birthdate1) {
        sendTextToElement(birthdate, birthdate1);
    }

    public String verifyLogo(){
        return getTextFromElement(logo);
    }

    public void getTitle(){
        driver.getTitle();

    }

}
