# React Vite Boilerplate with jest and Cypress

## Table of Contents

- [React Vite Boilerplate with jest and Cypress](#react-vite-boilerplate-with-jest-and-cypress)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
    - [`npm run dev`](#npm-run-dev)
    - [`npm run build`](#npm-run-build)
    - [`npm run preview`](#npm-run-preview)
    - [`npm run test`](#npm-run-test)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Ensure you have Node.js version 18 or higher installed. You can check your Node.js version by running:

```bash
node -v
```

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Fawwad-Khan/react-vite-boilerplate-with-jest-and-cypress.git
cd react-vite-boilerplate-with-jest-and-cypress
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will start Vite's development server, and you can view the app by navigating to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project structure is organized as follows:

```
react-vite-boilerplate-with-jest-and-cypress/
├── config/
│   ├── jest/
│   │   ├── setupTests.ts
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   |   ├── mixins.scss
│   ├── components/
│   ├── pages/
│   ├── App.scss
│   ├── App.tsx
│   ├── index.scss
│   ├── main.tsx
├── index.html
├── jest.config.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build from the `dist` folder. Useful for previewing the production build locally.

### `npm run test`

Runs the test suite using Jest and React Testing Library.

## Testing

This project uses Jest and React Testing Library for unit and integration tests. Tests are located in the `tests` directory. To run the tests, use:

```bash
npm run test
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push your branch to your fork.
4. Create a pull request to the main repository.

Please make sure your code adheres to the existing code style and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
