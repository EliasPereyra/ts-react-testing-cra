# Testing in React with TypeScript

> [!NOTE]
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the Project

This is a project for learning purposes. Trying different types of testing: for components, for events, for hooks async components and hooks.

### Built with

- ![React.js][React.js]
- ![Jest][Jest]
- ![Testing Library][Testing Library]

## What is testing?

It's a process that's necessary to make sure that our project/software is behaving in the way that it **must** behave.

It's an **evaluation** for your product/project and improve if any error or bug, and even further, have reliability, security and better perfomance, as a result.

## And why testing?

It gives you the confidence that the software won't stop working if we add something new, or if we modify some detail in the code, or if we need to update some third dependencies we have.

Another good reasong why testing, it's that it provides a way of security assurance for your code and thus have robust code.

## A bit of History of Testing

Software testing has come a long way since it started after World War II. Computer scientist [Tom Killburn](https://en.wikipedia.org/wiki/Tom_Kilburn) is credited with writing the first piece of software on June 21, 1948, which performed mathematical calculations using machine code. Initially, **debugging** was the primarily testing method for two decades.

In the 1980s, the first version of the IEEE 829 Standard for Software Test Documentation expanded testing to include quality assurance, integrated into the software development lifecycle. From the 1990s onwards, software testing methodologies and tools advanced, leading to the modern era of powerful automation tools like [**Selenium**](https://www.selenium.dev/).

## Types of testing

We have **automated** and **manual** tests.

Manual tests, is that, manual testing of the project by a person. Sometimes, the first testing that anyone does when want to see if the program is working properly.

But this testing process is very time consuming and doesn't tackle all the possible holes that are not seen at first sight.

Automated tests is done not by a person (literally speaking) but the computer. We provide the steps that should be done to test the program, but the actual execution is done by the computer.

This type of testing is awesome. It can be done multiple times in a very short time. And it's automated, i.e., it's already configured and we can just run the tests and see the results immediately.

---

It's good to have tests which are independent, so that we can focus on each test case and have better ways of solving any errors.

The process for testing could be: organize, perform and confirm.

Organize, where we set up all the values or states that are necessary.

Perform an action, based on what we have from the last step, like calling a method with args.

Confirm, that the output is correct or not (with `assert`).

## Testing Scopes

In a project, we can test small sections of the code. But also, have a broad scope of testing, like the whole project being tested, from start to finish.

The complexity of the test is relative to the amount of the code, like small functions, or components, or even an interconnected system. Because of this, we should break the test down into different parts.

We have **unit testing**, **component testing**, **visual testing**, and **integration testing**. These have its definitions according the context of your project. Like the **component** concept in React could be different in comparison to another tool/framework.

## Why Testing Library?

Testing Library's view on testing components is to resemble on how the user would act when is interacting with your web app.

Testing Library was made by Kent C. Dodds, and he proposed this:

> "The more your tests resemble the way your software is used, the more confidence they can give you."

Testing implementations of x thing is not good at all.

## Resources

- [Google's Testing course](https://web.dev/learn/testing)
- [Software Testing](https://www.softwaretestingmaterial.com/software-testing/)
- [Internation software Testing Standards](https://www.softwaretestingmaterial.com/international-software-testing-standards/)

[React.js]: https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=white
[Jest]: https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Testing Library]: https://img.shields.io/badge/testinglibrary-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white
