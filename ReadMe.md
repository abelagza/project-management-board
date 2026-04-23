# Dynamic Project Management App with React and Suspense

## Project Phases

### Phase 1. Run the Initial Project

This chapter uses an existing starter project, not a blank app from scratch.

It also builds on **Create React App**, just like Chapter 2, so there is no manual webpack or Babel setup here.

If the app behaves strangely offline, clear the old **service worker cache** in the browser devtools. The chapter warns that cached PWA files can cause confusing behavior.

- Run `npm install`
- Run `npm start`
- Confirm the starter board renders
- Optional: run `npm run build`, then serve the `build` folder

### Phase 2. Understand the Architecture

- `index.js` boots the app
- `App` composes the page-level structure
- `Header` renders the top banner
- `Board` owns ticket state and board logic
- `Lane` renders one column of tickets

### Phase 3. Load Data

- Add state to `Board`
- Fetch `assets/data.json`
- Track `data`, `loading`, and `error`
- Pass filtered tickets into each lane

### Phase 4. Introduce Suspense and memo

- Use lazy loading where appropriate
- Prevent unnecessary rerenders with `memo`
- Keep data flow predictable as the board grows

### Phase 5. Build HOC Behavior

- Create wrapper logic that enhances components
- Use HOCs to centralize repeated interaction logic
- Keep presentational components simpler

### Phase 6. Make the Board Dynamic

- Add drag start, drag over, and drop handling
- Move tickets across lanes
- Rerender from updated state

## Key Concepts

**PWA**  
A web application that behaves more like a native app, including caching and offline support.

**Suspense**  
A React feature for showing a fallback while lazily loaded UI is still loading.

**Code splitting**  
Breaking the app into smaller chunks so the browser loads only what is needed.

**HOC**  
A higher-order component is a pattern that wraps another component to add shared behavior.

**memo**  
A React optimization that skips rerendering when props have not changed.

**HTML5 Drag and Drop API**  
Built-in browser events for dragging one item and dropping it somewhere else.

**styled-components**  
A CSS-in-JS library that attaches styles directly to React components, making UI pieces easier to reuse and manage.

## Recommended Flow

- Open the project
- Inspect `src/index.js`, `App.js`, `Board.js`, `Header.js`, and `Lane.js`
- Inspect `assets/data.json`
- Get the board rendering cleanly
- Add data fetching to `Board`
- Render tickets into lanes
- Add HOC-based logic
- Add drag-and-drop behavior
- Test offline and PWA behavior
