# Module Rating Backend – SmartyPants

This is a simple backend feature built for the CS2001 group project (Group 39B). It implements a **Module Rating System**, allowing users to submit and retrieve ratings for modules.

## 🔧 Features

- Add new ratings via `POST /api/ratings`
- Retrieve all ratings via `GET /api/ratings`
- Ratings are stored in a local SQLite database
- Built with Node.js and Express

## 📁 File Structure

SmartyPants RatingBackend/
├── index.js
├── ratingController.js
├── ratingRoutes.js
├── ratings.db (auto-generated)
├── package.json
