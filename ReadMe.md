# Dynamic Project Management App with "React & Suspense"

## This project has been broken down into 6 phases, which are explained below:

### Phase 1. Running the initial Project.
*this chapter uses an intial repo/project, not a blank app from zero.
*it build on **Create React App**, same app as on Chapter 2, so no manual webpack/Babel circus this time.
*if the app behaves strangely offline, clear old **Service worker cache** in browser devtools. The book explicitly warns about cached PWA versions.
• Run `npm install`
• Run `npm start`
• Confirm the starter board renders
• Optional production check: npm run build then serve the build folder.

### Phase 2. Understand the architecture
• index.js boots the app
• app composes page-level structure
• Header is the top banner
• Board owns ticket state and logic
• Lane renders one column of tickets.

### Phase 3. Load Data
• Add state to Board
• Fetch assets/data.json
• Track data, loading, and error.
• Pass filtered tickets into each lane.

### Phase 4. Introduce Suspense and memo
• Use lazy loading where appropriate
• Prevent unnecessary rerenders with memo
• Keep data flow predictable while the board grows.

### Phase 5. Build HOC behavior
• Create wrapper logic that enhances components.
• Use HOC's to centralize repeated interaction logic
• Keep presentational pieces simpler.

### Phase 6. Make the board dynamic
• Add drag start / drag over / drop handling
• Move tickets accross lanes
• Re-render from update state



## New Cocepts

**PWA** Def. 
A web application that behaves more like a native app, including caching/offline support.

**Suspense** Def.
A React mechanism for waiting on lazily loaded UI while showing a fallback.

**Code-splitting** Def.
Breaking the app into smaller chunks so the browser loads only what is needed.

**HOC** Def.
A function/component pattern that wraps another component to add shared behavior.

**memo** Def.
A React optimization that skips rerendering when props have not changed.

**HTML5 Drag and Drop API** Def.
Build-in browser events for dragging one item and dropping it somewhere else.

**Styled-components** Def. 
CSS-in-JS. Styling is attached directly to React componetns, which makes reusable UI easier to manage.


### Recommended Flow:
• Open the project.
• Inspect src/index.js, App.js, Board.js, Header.js, Lane.js
• Inspect assets/data.json
• Get the board redering cleanly.
• Add data fetching to Board.
• Render tickets into lanes.
• Add HOC-based logic.
• Add drag-and-drop behavior.
• Test Offline/PWA behavior