# University Website (React + Express + MongoDB)

This repo is a full‑stack app:

- **Backend**: Express + Mongoose (`server.js`) running on **port 5000**
- **Frontend**: Create React App in `client/` running on **port 3000**

## Where the project actually is

Your main app folder is here:

`C:\Users\mahaj\Downloads\Finished\Finished\Finished\Finished\project\university-website`

(`node_modules/` also exists one level above, but the real app is `university-website/`.)

## Prerequisites

- Node.js
- MongoDB running locally on `mongodb://127.0.0.1:27017/university-website` (hardcoded in `server.js`)

## Run (typical, with npm)

### 1) Start MongoDB

Make sure MongoDB is running on `127.0.0.1:27017`.

### 2) Start the backend API

In `university-website/`:

```bash
npm install
node server.js
```

Backend should listen on `http://localhost:5000`.

### 3) Start the React frontend

In `university-website/client/`:

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## One-click (Windows)

From `university-website/` you can also run:

- `dev-start.bat` (starts backend + frontend in 2 windows)
- `dev-stop.bat` (stops whatever is listening on ports 3000 + 5000)

## Run (inside the Codex terminal, without npm)

In this Codex environment, `node` is available but `npm` is not. Since `node_modules/` is already present, you can start with direct Node commands:

- Backend (from `university-website/`):

```bash
node server.js
```

- Frontend (from `university-website/client/`):

```bash
node node_modules/react-scripts/bin/react-scripts.js start
```

## Folder map

### Backend (`university-website/`)

- `server.js` – Express app, MongoDB connection, mounts API routes
- `routes/` – Express route modules mounted under `/api/*`
- `models/` – Mongoose schemas (Mongo collections)
- `public/` – static files served by Express (`express.static('public')`)
  - `public/albums/` – album folders/images served via the albums API

### Frontend (`university-website/client/`)

- `src/index.js` – React entrypoint
- `src/App.js` – main router/page wiring
- `src/setupProxy.js` – proxies `/api/*` → `http://localhost:5000`
- `src/components/` – shared UI + pages
- `src/Departments/` – department-specific pages/components

## Backend API endpoints

Mounted in `server.js`:

- `/api/marquee` → `routes/marqueeRoutes.js` → `models/marquee.js`
- `/api/lifeju` → `routes/lifejuRoutes.js` → `models/lifeju.js`
- `/api/research` → `routes/researchRoutes.js` → `models/research.js`
- `/api/tabs` → `routes/tabDataRoute.js` → `models/TabData.js`
- `/api/announcements` → `routes/announcementRoutes.js` → `models/Announcement.js`
- `/api/events` → `routes/eventRoutes.js` → `models/Event.js`
- `/api/albums` → `routes/albums.js` → reads from `public/albums/` (filesystem, not Mongo)
- `/api/department-images` → `routes/departmentImageSliderRoute.js` → `models/DepartmentImageSlider.js`
- `/api/departmentAbout` → `routes/departmentAboutRoute.js` → `models/DepartmentAbout.js`
- `/api/department-program` → `routes/departmentProgramRoutes.js` → `models/DepartmentProgramSectionModel.js`

## Notes / gotchas

- If MongoDB has no data, most pages will render empty lists (the API routes mainly do `Model.find()`).
- Some frontend calls are hardcoded to `http://localhost:5000/...` (not just `/api/...`), so keep the backend on port **5000** unless you update those files.
- `routes/albums.js` references `public/placeholder.png` if an album has no images, but that file is currently missing.
