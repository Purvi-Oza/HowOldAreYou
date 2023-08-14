$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Verify functionality of How Old Are You website",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 22550805000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User clicks on URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verfies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 109121100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 41513000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User checks error message by leaving birthdate field empty",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-checks-error-message-by-leaving-birthdate-field-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User enters the name in Your name field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User verifies error text of birthday field",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userEntersTheNameInYourNameField()"
});
formatter.result({
  "duration": 199892100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 59524300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesErrorTextOfBirthdayField()"
});
formatter.result({
  "duration": 1592219800,
  "status": "passed"
});
formatter.after({
  "duration": 879121500,
  "status": "passed"
});
formatter.before({
  "duration": 2625196600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User clicks on URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verfies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 9597500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User checks error message by leaving your name field empty",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-checks-error-message-by-leaving-your-name-field-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User enters Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verifies error text of name field",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userEntersBirthday()"
});
formatter.result({
  "duration": 74609100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 67324800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesErrorTextOfNameField()"
});
formatter.result({
  "duration": 354595600,
  "status": "passed"
});
formatter.after({
  "duration": 779277700,
  "status": "passed"
});
formatter.before({
  "duration": 3942184500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User clicks on URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verfies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 16401500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User is on homepage",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-is-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User enters the name in Your name field",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userEntersTheNameInYourNameField()"
});
formatter.result({
  "duration": 117168100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userEntersBirthday()"
});
formatter.result({
  "duration": 55139400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 58286200,
  "status": "passed"
});
formatter.after({
  "duration": 761985500,
  "status": "passed"
});
formatter.before({
  "duration": 2275116700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User clicks on URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verfies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 12928100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User verifies the text after Submitting details",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-verifies-the-text-after-submitting-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User enters the name in Your name field",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verifies Logo Text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userEntersTheNameInYourNameField()"
});
formatter.result({
  "duration": 141970500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userEntersBirthday()"
});
formatter.result({
  "duration": 55811800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 59247800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesWelcomeText()"
});
formatter.result({
  "duration": 39736500,
  "status": "passed"
});
formatter.after({
  "duration": 781699200,
  "status": "passed"
});
});