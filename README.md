# SpaceX Rocket

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [CI/CD & Deployments & GitHub Actions](#cicd-with-deployments-with-github-actions)
  - [Vercel Production Deployment](#vercel-production-deployment)
  - [Build Branches](#build-branches)
- [Installation, setup and running](#installation-setup-and-running)

## Overview

**SpaceX Rocket** is a test task, a React + Vite web application that provides users with detailed information about the V4 rockets

## Project Structure

The project is structured using the **<a href="https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97">Atomic Design Pattern</a>** 
and using **kebab-case** for folder names and **camel-case** for file names. 

Below is an overview of the folder structure:

- **`public`**: Contains media files.
- **`__tests__`**: Contains all unit tests.
   - **`firebase`**: Tests related to Firebase functions.
   - **`user`**: Firebase tests for query-related functions.
   - **`utils`**: Utils function tests.
- **`src`**: Main source code directory.
   - **`api`**: Controls API interactions, including:
     - **`middleware`**: Contains Firebase connection files.
     - **`models`**: TypeScript interfaces and types used for queries.
     - **`request`**: Contains axios config.
     - **`services`**: Services/business logic for interacting with the API.
     - **`store`**: Manages global state, used for queries using `zustand`.
   - **`app`**: Contains application routes and pages
   - **`components`**: React components directory.
   - **`hooks`**: Custom React hooks.
   - **`lib`**: Icons are stored here.
   - **`types`**: TypeScript types.
   - **`utils`**: General utility functions.
   - **`global.scss`**: global styles applied throughout the application.
   - **`main.tsx`**: React main file.

## Technologies

The project uses technologies from the test task, but there are also those that I added personally. Below are all the main technologies:

### Core Dependencies

- ![React](https://skillicons.dev/icons?i=react) **React**: library for creating SPA
- ![TypeScript](https://skillicons.dev/icons?i=ts) **TypeScript**: Type-safe JavaScript
- ![Vite](https://skillicons.dev/icons?i=vite) **Vite**: quick build tool and development server.
- ![Tanstack React Query](https://skillicons.dev/icons?i=react) **Tanstack React Query**: Query and data caching tool
- ![React](https://skillicons.dev/icons?i=react) **Zustand**: technology for state management.
- ![React](https://skillicons.dev/icons?i=react) **Axios**: technology that simplifies working with APIs.
- ![Sass](https://skillicons.dev/icons?i=sass) **Sass**: A CSS preprocessor that adds advanced features.

### Testing & Linting

- ![Jest](https://skillicons.dev/icons?i=jest) **Jest**: Testing environment for unit tests.
- ![React](https://skillicons.dev/icons?i=react) **StoryBook**: Testing framework for UI
- ![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=whitehttps://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) **ESLint**: A tool for identifying and formatting TypeScript code, ensuring code quality.
- ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) **Prettier**: Code formatter to maintain a consistent code style.

### CI/CD & Deployments & GitHub Actions

- **GitHub Actions**: CI/CD of the project directly in GitHub.
- **Vercel**: application deployment platform

### Vercel Production Deployment

This workflow is responsible for deploying the application to Vercel whenever a push is made to the `main` branch.

```yaml
# The name of the workflow is GitHub Actions.
name: Vercel Production Deployment

# Define env vars for Vercel connection
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

# Trigger for starting workflow. Runs every time there is a push to the main branch
on:
  push:
    branches:
      - main

# Code Execution Scenario
jobs:
  Deploy-Production:
    runs-on: ubuntu-latest

    # Project build steps
    steps:
      - name: Checkout code
        ...

      - name: Set up Node.js
        ...

      - name: Install dependencies
        ...

      - name: Run ESLint
        ...

      - name: Run checking for extra code
        ...

      - name: Run tests
        ...

      - name: Install Vercel CLI
        ...

      - name: Pull Vercel Env. Information
        ...

      - name: Build Project Artifacts
        ...

      - name: Deploy Project Artifacts to Vercel
        ...

      - name: Deployment to Production
        ...
```

### Build Branches

This workflow is triggered when a pull request is made to the `main` branch.

```yaml
# The name of the workflow is GitHub Actions.
name: Build Branches

# Trigger only if a pull request is made to the main branch.
on:
  pull_request:
    branches:    
      - 'main'

# Code Execution Scenario
jobs:
  Build:
    runs-on: ubuntu-latest

    # Project build steps
    steps:
      - name: Checkout code
        ...

      - name: Set up Node.js
        ...

      - name: Install dependencies
        ...

      - name: Run ESLint
        ...

      - name: Run checking for extra code
        ...

      - name: Run tests
        ...

      - name: Build Project Artifacts
        ...
```

## Installation, setup and running

### Local setup project

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/spacex-rocket.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd spacex-rocket
    ```

3. **Install dependencies:**
    ```bash
    yarn install
    ```

### Running the Project

To start the dev server:
```bash
yarn dev
```

To build project:
```bash
yarn build
```

To run tests:
```bash
yarn test
```

To run Storybook:
```bash
yarn storybook
```
