# winfo — Real-time Safety Check-in

A real-time safety check-in platform built with Next.js and MongoDB.

Features
- P0: App tracks location
- P0: Can send location to trusted contacts (`/sendlocation`)
- P0: Add people as a friend (to alert)
- P0: Logging in and signing up
- P0: Starting a chat (similar to add people as friend)
- P1: Notification to send location when phone shakes
- P1: Loud noise triggers voice recording
- P2: Calls contacts if phone shakes
- P2: Character moves when location tracking is on (animated UI)

Overview

This project implements a live location-sharing and alert system. The backend uses Next.js API routes and MongoDB to persist users, friends, chats, and live location events. The frontend visualizes user state with an animated character and provides controls for sharing location and managing trusted contacts.

API routes (work-in-progress)
- `GET /getcharacter` — load character / user visual state
- `GET /searchfriend/:query` — search users to add as friends
- `POST /createchat` — create a new chat
- `GET /getchats` — list chats for a user
- `GET /getlocation` — fetch latest shared location for a user
- `POST /sendlocation` — send current location to a friend

Key files
- Authentication route: [winfo/app/api/auth/[...all]/route.ts](winfo/app/api/auth/[...all]/route.ts#L1)
- Users API example: [winfo/app/api/users/route.ts](winfo/app/api/users/route.ts#L1)
- MongoDB connection helper: [winfo/lib/db.ts](winfo/lib/db.ts#L1)
- Auth config: [winfo/lib/auth/auth.ts](winfo/lib/auth/auth.ts#L1)

Environment
- Create a `.env` in the `winfo/` folder with at least:

```
MONGODB_URI=your-mongodb-connection-string
```

Setup & development

1. Install dependencies

```bash
cd winfo
npm install
```

2. Run the dev server

```bash
npm run dev
```

Available scripts (in `winfo/package.json`)
- `dev` — start Next.js in development
- `build` — build for production
- `start` — start the production server
- `lint` — run ESLint

Notes & next steps
- The project currently uses the app router (Next.js) with API route files under `winfo/app/api/`.
- Priorities and story points (copied from planning): location tracking and send location are P0; shake & call features are P2; notifications and voice recording are P1.
- If you want, I can: create a dedicated `docs/` folder with API specs, add Postman/OpenAPI examples, or scaffold missing API route handlers.

License

Private project.

