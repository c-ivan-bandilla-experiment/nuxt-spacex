# Project Folder Structure

This document describes the folder structure and usage conventions in this Nuxt 3 / Vuetify / GraphQL / Pinia project.

## Root Level Files

- **`introspection.graphql`**: GraphQL schema introspection file containing the SpaceX API schema. Used for type generation and API exploration.
- **`nuxt.config.ts`**: Nuxt configuration file with Apollo GraphQL client setup, Vuetify integration, and other module configurations.
- **`package.json`**: Project dependencies, scripts, and metadata.
- **`tsconfig.json`**: TypeScript configuration for the project.
- **`eslint.config.js`** & **`stylelint.config.js`**: Linting configurations for JavaScript/TypeScript and CSS/SCSS respectively.
- **`pnpm-lock.yaml`**: Lock file for pnpm package manager ensuring reproducible installs.

## `app/` Directory

The main application directory following Nuxt 3 conventions.

### `layouts/`
Contains Vue layout components that wrap pages.
- **`default.vue`**: The default layout applied to all pages unless overridden.

### `pages/`
File-based routing directory. Each `.vue` file becomes a route.
- **`index.vue`**: The home page (`/`) displaying the main application interface with Pinia counter, Vuetify components, and SpaceX GraphQL data.

### `plugins/`
Nuxt plugins that run before the app starts.
- **`vuetify.ts`**: Vuetify plugin configuration for Material Design components.

### `stores/`
Pinia stores for state management. Auto-imported by Nuxt.
- **`useCounter.ts`**: Example Pinia store demonstrating counter state with increment functionality.

## State Management

The `stores/` folder contains Pinia stores for managing global application state. Pinia is the recommended state management library for Vue 3 and Nuxt 3. Stores are auto-imported by Nuxt, allowing you to use them directly in components without explicit imports.

### Usage Example
```typescript
// In any component or page
const counterStore = useCounter()
counterStore.increment()

// Access reactive state
console.log(counterStore.count)        // Current count
console.log(counterStore.doubleCount)  // Computed double value
```

### Store Structure
Each store file exports a Pinia store with:
- **`state`**: Reactive data properties
- **`getters`**: Computed properties based on state
- **`actions`**: Methods to mutate state

## File Naming Conventions

- **Directories**: Use lowercase with hyphens for multi-word names (kebab-case)
- **Vue files**: PascalCase for components, camelCase for composables/stores
- **Store files**: Prefix with `use` (e.g., `useCounter.ts`) following Vue composition API conventions

## Auto-imports

Nuxt automatically imports:
- Components from `components/` (if exists)
- Composables from `composables/` (if exists)
- Stores from `stores/`
- Pages for routing

This reduces boilerplate and improves developer experience.