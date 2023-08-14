package com.howoldareyou.steps;

import com.howoldareyou.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static com.howoldareyou.browserfactory.ManageBrowser.driver;

public class HomePageSteps {

    @Given("^User is on the homepage$")
    public void userIsOnTheHomepage() {
    }

    @And("^User verifies title of the webpage$")
    public void userVerfiesTitleOfTheWebpage() {
        new HomePage().getTitle();
    }

    @Then("^User enters the name in Your name field$")
    public void userEntersTheNameInYourNameField() {
        new HomePage().enterName("Purvi Oza");
    }

    @And("^User clicks on Submit button$")
    public void userClicksOnSubmitButton() {
        new HomePage().clickSubmit();
    }

    @Then("^User enters Birthday$")
    public void userEntersBirthday() {
        new HomePage().enterBirthdate("1979-01-20");

    }

    @Then("^User verifies Logo Text$")
    public void userVerifiesWelcomeText() {
        String expectedText1 = "How old are you?";
        String actualText1 = new HomePage().verifyLogo();
        Assert.assertEquals(expectedText1, actualText1);
    }


    @Then("^User verifies error text of name field$")
    public void userVerifiesErrorTextOfNameField() {
        String expectedText1 = "incorrect symbols";
        String actualText1 = new HomePage().verifyTextName();
        Assert.assertEquals(expectedText1, actualText1);
    }

    @Then("^User verifies error text of birthday field$")
    public void userVerifiesErrorTextOfBirthdayField() {
        String expectedText = "wrong date";
        String actualText = new HomePage().verifyText();
        Assert.assertEquals(expectedText, actualText);
    }


}