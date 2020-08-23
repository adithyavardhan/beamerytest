##Framework Description

- framework is created using typical page object pattern using page factory

- feature files are created in src/test/java/features folder

- in src/main/java there is a page object folder created which consists of different page classes

- each page class contains elements and actions on page and elements are initialised using page factory

- in src/test/java a stepdesfs folder is created with stepdefinition files generated using feature files

- Hooks file is create in stepdefs folder which consists of before and after scenarios

- a test runner file is created in stepdefs folder with options related to cucumber

- DriverUtils class is created with some common functions around webdriver initialization, waits and extension methods 

- FactoryUtils is created with some common math/conversions logical functions which can be used across all other clases

##Running Tests
- If you have to change email address, you should change it in Common steps and also in registration steps.
- run `mvn clean` and `mvn install` from project root to build project
- To run tests from features folder right click on scenario and select Run Scenario.
- To run tests from command line navigate to project root in command prompt and run 'mvn test'. 
- to run particular scenarios use command `mvn test -Dtest=TestRunner -Dcucumber.options="--tags @001"`

##Test Results

- html test report will be created in `report` folder under root and can be opened in any browser