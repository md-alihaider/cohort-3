# Day 29 - MongoDB Aggregation Pipeline

This project is structured around the uploaded MongoDB Sample Mflix `movies` dataset.

```text
day29-aggregration-pipline
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── aggregation.controller.js
│   ├── models
│   │   └── Movie.js
│   ├── routes
│   │   └── aggregation.routes.js
│   ├── seed
│   │   ├── data
│   │   │   └── movies.data.json
│   │   └── seed.js
│   ├── app.js
│   └── server.js
├── .env
├── aggregation.excalidraw
├── package.json
└── README.md
```

## Run

```bash
npm install
npm run seed
npm run dev
```

Database: `day29_aggregation`

Collection: `movies`

## Aggregation examples

`$match`, `$sort`, `$limit`, `$project`, `$unwind`, `$group`, `$avg`, `$sum`

## Routes

- `GET /api/aggregation/high-rated`
- `GET /api/aggregation/by-genre`
- `GET /api/aggregation/by-year`
