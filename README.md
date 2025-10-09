# React TypeScript Redux Template

## Overview
This project is a lightweight starter kit for building React applications with TypeScript, Redux, and Redux-Saga. The default screen renders a list of posts fetched from the public JSONPlaceholder API, demonstrating how to wire asynchronous requests into the Redux store and keep UI components focused on rendering state. The application mounts a single `Posts` container inside a Redux `<Provider>` and React `StrictMode`, giving you a clean foundation to extend with new features. `src/index.tsx` `src/shared/components/Posts/index.tsx`

## Key Features
- **Typed React + Redux setup** – A centralized store is configured with strongly-typed reducers and saga middleware, making it easy to add new slices and effects. Redux DevTools support is enabled automatically in development. `src/store.ts`
- **Saga-driven data fetching** – The Posts module includes sagas for listing, reading, creating, updating, and removing posts. Each saga calls the shared API client and dispatches success or failure actions so components can respond to loading and error states. `src/shared/components/Posts/sagas.ts`
- **Action helpers for async flows** – `AsyncActionHelper` standardizes the `REQUEST`, `SUCCESS`, and `FAILURE` action shapes, reducing boilerplate across modules. `src/shared/components/Posts/reducer.ts` `src/shared/services/AsyncActionHelper.ts`
- **Reusable API client layer** – A thin wrapper around `fetch` injects JSON headers, handles tokens, and normalizes responses. Route helpers compose endpoint URLs, and a single `posts` service shows how to structure REST resources. `src/shared/services/ApiClient.ts` `src/shared/services/apiClientHelper.ts` `src/shared/services/api.ts` `src/shared/constants/api.ts`
- **Test-ready environment** – The repository ships with unit tests for reducers, sagas, API utilities, and components using Jest, React Testing Library, and redux-saga-test-plan so new code can follow established patterns. `src/shared/components/Posts/index.test.tsx` `src/shared/components/Posts/reducer.test.ts` `src/shared/components/Posts/sagas.test.ts` `src/shared/services/ApiClient.test.ts`
- **Consistent formatting and linting** – ESLint, Prettier, Husky, and lint-staged scripts help maintain consistent style and catch errors before commits. Convenience scripts combine linting and formatting for quick checks or automatic fixes. `package.json`

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
   The app runs at [http://localhost:3000](http://localhost:3000) and reloads automatically on changes. `package.json`
3. **Run tests**
   ```bash
   yarn test
   ```
   Jest starts in watch mode with the configured testing libraries. `package.json`
4. **Build for production**
   ```bash
   yarn build
   ```
   Creates an optimized bundle in the `build/` directory, ready to deploy. `package.json`

## Additional Scripts
- `yarn code:check` – Run linting and formatting checks without writing changes.
- `yarn code:clean` – Auto-fix lint issues and format source files.
- `yarn deploy` – Build the app and publish the `build/` directory to GitHub Pages. `package.json`

## Configuration
- **API endpoint** – By default the app requests data from `https://jsonplaceholder.typicode.com/posts`. Set `REACT_APP_AUTH_URL` in your environment to point at a different backend before starting the dev server or building. `src/shared/constants/api.ts`
- **Authentication headers** – Update `getHeaders` in `src/shared/services/apiClientHelper.ts` to retrieve real tokens for authenticated APIs. `src/shared/services/apiClientHelper.ts`

## Extending the Template
- Create new features by duplicating the Posts module structure (component, reducer, sagas, tests) and registering the reducer and saga in `store.ts`.
- Use the `AsyncActionHelper` pattern to model any additional asynchronous flows such as form submissions or background synchronization.
- Customize the global styling baseline in `src/index.css` to fit your design system. `src/index.css`

This template stays close to Create React App conventions while adding batteries-included state management, async tooling, and testing utilities so you can focus on building product features.
