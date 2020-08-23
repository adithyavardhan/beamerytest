$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Registration.feature");
formatter.feature({
  "name": "",
  "description": "    As a user\n    I would like to register an account\n    So that I can use the site",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify user can navigate to create an account page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@001"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on automation practice home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am navigated to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user can create an account successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@002"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Adithyas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:128)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\n\tat Utils.DriverUtils.ClickAndWait(DriverUtils.java:23)\n\tat stepdefs.CommonSteps.lambda$new$1(CommonSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:106)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat ✽.I am on registration page(src/test/java/features/Registration.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter all personal information",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "account is created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify error message during registration on login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@003"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on create account page",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Adithyas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:128)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\n\tat Utils.DriverUtils.ClickAndWait(DriverUtils.java:23)\n\tat stepdefs.CommonSteps.lambda$new$2(CommonSteps.java:31)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:106)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat ✽.I am on create account page(src/test/java/features/Registration.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on create account button with empty email field",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "invalid email address error message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify details are pre-populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@004"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on create account page",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Adithyas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:128)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\n\tat Utils.DriverUtils.ClickAndWait(DriverUtils.java:23)\n\tat stepdefs.CommonSteps.lambda$new$2(CommonSteps.java:31)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:106)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n\tat ✽.I am on create account page(src/test/java/features/Registration.feature:30)\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter email address",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter first name and last name",
  "keyword": "When "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "first name and last name should be updated in address section",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});