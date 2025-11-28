# Habit Tracker

Simple Node + Express API to track habits.

## Requirements
- Node.js (>= 14)
- npm

## Install & Run
```bash
npm install
node app.js
# or set PORT: PORT=3000 node app.js (Windows: use cross-env or set env via PowerShell)
```

## Endpoints
- GET /               — health check
- GET /habits         — list all habits
- POST /habits        — add a habit
  - Body (JSON): { "name": "Drink water" }
  - Current response: { "msg": "done adding new habit" }
- PUT /habits/:id/complete — mark habit complete (returns updated habit or 404)
- DELETE /habits/:id       — delete habit (returns confirmation or 404)

## Examples (curl)
```bash
curl http://localhost:3000/habits
curl -X POST http://localhost:3000/habits -H "Content-Type: application/json" -d '{"name":"Drink tea"}'
curl -X PUT http://localhost:3000/habits/1/complete
curl -X DELETE http://localhost:3000/habits/1
```

## Notes
- Use the numeric id in requests (no colon). Example: /habits/1/complete
- To return the created habit from POST, change the POST handler to respond with the new habit and status 201.
