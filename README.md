# Video Player
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)</br>
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)

## Technologies used
* JavaScript
* SaSS
* HTML
* Webpack

## Folder Structure
Here's a simple breakdown of the folder structure of this project:

    ```graphql
    portfolio-project/          
    ├── dist/
    │   └── index.html            # The main HTML file
    ├── public/
    │   ├── assets/               
    │   ├── images/               
    │   └── videos/               
    ├── src/
    │   ├── style/
    │   │   └── style.scss        # Styles for the website (including light/dark themes)
    │   ├── js/            
    │   │   ├── utils/
    |   │   │   ├── API-connect.js
    │   |   │   └── capitalise-first-letter.js
    │   │   ├── city-search.js
    │   │   ├── ui.js
    │   │   └── video-player.js
    │   └── index.js 
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── webpack.config.js

## Getting Started
To get a local copy of this project up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   https://github.com/Nnisik/video-player-app.git
2. **Navigate to the project directory:**
   ```bash
   cd video-player-app
3. **...**

### TODO
* switch videos on select from the gallery
* remove micro ui misses 
  * no previous searches
* Project documentation

### Known Issues
* currently doesn't work on github pages

## Future Improvements
* Testing
* Redux for most popular searches