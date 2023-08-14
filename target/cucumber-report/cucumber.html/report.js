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
  "duration": 7891976900,
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
  "name": "User verifies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 143658600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 54097300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User checks error message by leaving birthdate field empty - entering invalid credentials",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-checks-error-message-by-leaving-birthdate-field-empty---entering-invalid-credentials",
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
  "duration": 174693600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 116642400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesErrorTextOfBirthdayField()"
});
formatter.result({
  "duration": 605783600,
  "status": "passed"
});
formatter.after({
  "duration": 829554500,
  "status": "passed"
});
formatter.before({
  "duration": 5842431800,
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
  "name": "User verifies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 12844000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User checks error message by leaving your name field empty - entering invalid credentials",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-checks-error-message-by-leaving-your-name-field-empty---entering-invalid-credentials",
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
  "duration": 107387400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 95486000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesErrorTextOfNameField()"
});
formatter.result({
  "duration": 431826200,
  "status": "passed"
});
formatter.after({
  "duration": 762039900,
  "status": "passed"
});
formatter.before({
  "duration": 2472167700,
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
  "name": "User verifies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 12872400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User is entering correct credentials and submits form",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-is-entering-correct-credentials-and-submits-form",
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
  "duration": 174193900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userEntersBirthday()"
});
formatter.result({
  "duration": 87962800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 91878700,
  "status": "passed"
});
formatter.after({
  "duration": 840258800,
  "status": "passed"
});
formatter.before({
  "duration": 5504591000,
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
  "name": "User verifies title of the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 23700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerfiesTitleOfTheWebpage()"
});
formatter.result({
  "duration": 11625700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User verifies the text after Submitting details - end to end testing",
  "description": "",
  "id": "verify-functionality-of-how-old-are-you-website;user-verifies-the-text-after-submitting-details---end-to-end-testing",
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
  "duration": 145102600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userEntersBirthday()"
});
formatter.result({
  "duration": 86127100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 79412400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userVerifiesWelcomeText()"
});
formatter.result({
  "duration": 44176700,
  "status": "passed"
});
formatter.after({
  "duration": 788121700,
  "status": "passed"
});
});