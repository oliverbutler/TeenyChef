<div align="center">
  <img src="./client/src/assets/logo.png" width="250"/>
</div>

<br />

TeenyChef 👨‍🍳 is a self-hosted kitchen helper built with React and Python which allows you to keep track of your daily cooking and help with dinner choices.

## Why did we create TeenyChef?

We built TeenyChef to fill a void in our self-hosted ecosystem, a simple, and integrated, kitchen management solution. There are plenty of applications which strive to reach our goals (or part of them).

However, we wish to develop a polished, modern, and effective open source solution.

## What can TeenyChef do?

<i>TeenyChef is currently pre-release and is undergoing initial development</i>

TeenyChef is a growing project which has a large road-map of goals, some of our current features are shown below!

- Add your own recipes 🌮
- Scrape recipes from a third party 🌍
- Adjust recipes based upon serving size 👨‍👨‍👧
- Query from a database of ingredients to show serving nutritional information (requires API key)
- Track your kitchen stocks, and automatically suggest recipes you can make

## Technology Stack

- [Docker](https://www.docker.com/)
  - Allows us to containerize the project
  - Deployment on self-hosted services such as [Unraid](https://unraid.net/)

### Front-end

- [React](https://reactjs.org/)
  - We could have gone with VueJS, however as the current industry standard, React is a clear fit
- [Tailwind](https://tailwindcss.com/)
  - Frameworks such as Bootstrap and MaterialUI would accomplish a lot of the heavy lifting here
  - They are large, and bulky, for this project we're looking for a light and unity-first solution
- [React Hook Form](https://react-hook-form.com/)
  - Absolutely an essential for React forms
- [React Redux](https://github.com/reduxjs/react-redux)
  - For state management throughout the application

### Back-end

- [FastAPI](https://github.com/tiangolo/fastapi)
  - A production ready, high performance to develop a REST interface
- [MkDocs](https://www.mkdocs.org/)
  - Static site generator for python technical documentation
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
  - Beautify MkDocs
- [SQLite](https://www.sqlite.org/index.html)
  - Small, fast, self-contained SQL database engine
  - Perfect for Docker applications
- [SQLAlchemy](https://www.sqlalchemy.org/)
  - Standard ORM for Python and SQL
