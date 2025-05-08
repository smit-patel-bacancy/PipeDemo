# Angular Pipes Demo

This project demonstrates the usage of various pipes in Angular, including built-in pipes, custom pipes, and async pipes. It showcases different types of pipes and their applications in a clean, organized interface.

## Features

### 1. Built-in Pipes Demo
- **Normal Pipes**
  - Uppercase
  - Lowercase
  - Titlecase
  - Date
  - JSON

- **Pipes with Parameters**
  - Date formatting with various patterns
  - Currency formatting with different options
  - Number formatting with precision control
  - Percent formatting
  - Slice pipe for arrays

- **Chaining Multiple Pipes**
  - Examples of combining multiple pipes
  - Date formatting with case transformations

- **ngFor with Pipe Examples**
  - Array manipulation using slice pipe

### 2. Custom Pipes Demo
- **Custom Pipe Implementations**
  - Custom pipe examples with different transformations
  - Parameterized custom pipes
  - Pure and impure pipe demonstrations

### 3. Async Pipe Demo
- **Asynchronous Operations**
  - Observable handling
  - Promise handling
  - Async data transformations
  - Real-time data updates

## Project Structure

The project is organized into three main components:
- `src/app/built-in-pipes-demo/` - Demonstrates Angular's built-in pipes
- `src/app/custom-pipes-demo/` - Shows custom pipe implementations
- `src/app/async-pipes-demo/` - Illustrates async pipe usage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v16.2.1 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Built With

- [Angular](https://angular.io/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - For styling and layout
- [Bootstrap Icons](https://icons.getbootstrap.com/) - For UI icons

## Additional Resources

- [Angular Pipes Documentation](https://angular.io/api?type=pipe)
- [Angular Custom Pipes Guide](https://angular.io/guide/pipes-custom-data-trans)
- [Angular Async Pipe Documentation](https://angular.io/api/common/AsyncPipe)
- [Angular CLI Documentation](https://angular.io/cli)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
