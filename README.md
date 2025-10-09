# React TypeScript Redux Template

## Overview
This project is a lightweight starter kit for building React applications with TypeScript, Redux, and Redux-Saga. The default screen renders a list of posts fetched from the public JSONPlaceholder API, demonstrating how to wire asynchronous requests into the Redux store and keep UI components focused on rendering state. The application mounts a single `Posts` container inside a Redux `<Provider>` and React `StrictMode`, giving you a clean foundation to extend with new features. 【F:src/index.tsx†L1-L20】【F:src/shared/components/Posts/index.tsx†L1-L38】

## Key Features
- **Typed React + Redux setup** – A centralized store is configured with strongly-typed reducers and saga middleware, making it easy to add new slices and effects. Redux DevTools support is enabled automatically in development. 【F:src/store.ts†L1-L34】
- **Saga-driven data fetching** – The Posts module includes sagas for listing, reading, creating, updating, and removing posts. Each saga calls the shared API client and dispatches success or failure actions so components can respond to loading and error states. 【F:src/shared/components/Posts/sagas.ts†L1-L66】
- **Action helpers for async flows** – `AsyncActionHelper` standardizes the `REQUEST`, `SUCCESS`, and `FAILURE` action shapes, reducing boilerplate across modules. 【F:src/shared/components/Posts/reducer.ts†L1-L78】【F:src/shared/services/AsyncActionHelper.ts†L1-L30】
- **Reusable API client layer** – A thin wrapper around `fetch` injects JSON headers, handles tokens, and normalizes responses. Route helpers compose endpoint URLs, and a single `posts` service shows how to structure REST resources. 【F:src/shared/services/ApiClient.ts†L1-L52】【F:src/shared/services/apiClientHelper.ts†L1-L37】【F:src/shared/services/api.ts†L1-L16】【F:src/shared/constants/api.ts†L1-L6】
- **Test-ready environment** – The repository ships with unit tests for reducers, sagas, API utilities, and components using Jest, React Testing Library, and redux-saga-test-plan so new code can follow established patterns. 【F:src/shared/components/Posts/index.test.tsx†L1-L44】【F:src/shared/components/Posts/reducer.test.ts†L1-L88】【F:src/shared/components/Posts/sagas.test.ts†L1-L132】【F:src/shared/services/ApiClient.test.ts†L1-L74】
- **Consistent formatting and linting** – ESLint, Prettier, Husky, and lint-staged scripts help maintain consistent style and catch errors before commits. Convenience scripts combine linting and formatting for quick checks or automatic fixes. 【F:package.json†L7-L37】

## Project Structure
```
src/
├─ containers/App/        # Top-level container that renders the Posts feature
├─ shared/components/     # Feature modules (Posts) with UI, reducer, sagas, tests
├─ shared/services/       # API client utilities, async action helpers, URL tools
├─ shared/constants/      # Environment-aware API endpoints
├─ index.tsx              # Application entry point
├─ store.ts               # Redux store and saga setup
```

## Getting Started
1. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```
2. **Run the development server**
   ```bash
   yarn start
   ```
   The app runs at [http://localhost:3000](http://localhost:3000) and reloads automatically on changes. 【F:package.json†L8-L9】
3. **Run tests**
   ```bash
   yarn test
   ```
   Jest starts in watch mode with the configured testing libraries. 【F:package.json†L10-L11】
4. **Build for production**
   ```bash
   yarn build
   ```
   Creates an optimized bundle in the `build/` directory, ready to deploy. 【F:package.json†L8-L13】

## Additional Scripts
- `yarn code:check` – Run linting and formatting checks without writing changes.
- `yarn code:clean` – Auto-fix lint issues and format source files.
- `yarn deploy` – Build the app and publish the `build/` directory to GitHub Pages. 【F:package.json†L13-L24】

## Configuration
- **API endpoint** – By default the app requests data from `https://jsonplaceholder.typicode.com/posts`. Set `REACT_APP_AUTH_URL` in your environment to point at a different backend before starting the dev server or building. 【F:src/shared/constants/api.ts†L1-L6】
- **Authentication headers** – Update `getHeaders` in `src/shared/services/apiClientHelper.ts` to retrieve real tokens for authenticated APIs. 【F:src/shared/services/apiClientHelper.ts†L9-L21】

## Extending the Template
- Create new features by duplicating the Posts module structure (component, reducer, sagas, tests) and registering the reducer and saga in `store.ts`.
- Use the `AsyncActionHelper` pattern to model any additional asynchronous flows such as form submissions or background synchronization.
- Customize the global styling baseline in `src/index.css` to fit your design system. 【F:src/index.css†L1-L17】

This template stays close to Create React App conventions while adding batteries-included state management, async tooling, and testing utilities so you can focus on building product features.
