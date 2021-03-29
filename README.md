# AngularRobotSimulator
## Introduction

This project implements a simulator for a small robot named Sally. Sally can
move forward and turn left and right. Sally's objective is to find the goal on
the map.

Our goal is not only to evaluate your coding abilities, but also to get a feel
for how you pick up unfamiliar projects, prioritize work, and communicate your
decisions with peers. The code in this repo is intentionally imperfect, but
functional. The purpose is to provide an example of a real world product, warts
and all.

Your task is to familiarize yourself with the code, review the backlog of tasks,
choose one or more projects, and complete them within a limited time period. We
typically ask for two 2 hours, but please let us know if you cannot devote that
much time or would like to spend more time on it.

After the time period is up, we will walk through your changes with you and
discuss what changes you made, why you made them, and what else you thought
about while working on the project.

As you work on your project, please take the opportunity to note anything you
think could be improved and either fix it or let us know why you
decided not to.

**Note:** This is an open ended project, we are evaluating you on your ability
to organize and communicate as much as on your coding abilities. We ask that you
spend about two hours on the project, but you are welcome to spend more time on
it if you want. This is your chance to "wow" us, so please put in your best
effort. Do your best, and be prepared to discuss what
worked and what didn't. If you get stuck and want to ask for guidance or help it
won't count against you.

## Steps

1. Fork the repo
2. Familiarize yourself with the code
2. Familiarize yourself with the backlog
3. Select one or more projects off the backlog
4. Implement changes\
   **NOTE**: Please create a PR back to the main repo 
5. Review and discuss changes with us


## Backlog

_Note_: this is _not_ a sorted priority list.

- Clean up the redundant code in `Robot.move`
- Add error handling:  See TODOs in code
- Support Multiple Robots
- Add walls to block robot motion
- Replace canvas with FabricJS
  - Add ability to change grid dimensions
  - Add smooth motion rendering as the robot moves
- Add Ngrx
- Improve testing
  - Make tests more readable
  - Implement [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/) 
- Other enhancements?

### Unit Tests

Some of the backlog items above have unit tests written for them.
- `app.component.spec.ts` will make sure some basic built-in commands
  from the base code still work

You are not required to work on specific backlog items, and should not worry
about the tests failing if you didn't work on the related backlog items. 
Your primary evaluation will be on personal review of your code, not on the results of the automation.

You are encouraged to write new unit tests for any backlog items you address.

## Standard Angular Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
