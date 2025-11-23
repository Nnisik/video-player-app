# Video Player
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)</br>
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

It is an interactive web application designed to give a look into difference places of our planet with a hello of a short videos. The application dynamically fetches video content using a client API and allows users to search for cities, view related videos, and interact with a gallery of results. 

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)

## Technologies used
* JavaScript
* SaSS
* HTML
* Webpack

## Getting Started
To get a local copy of this project up and running, follow these steps:
1. **Clone the repository:**
   ```bash
   https://github.com/Nnisik/video-player-app.git
2. **Navigate to the project directory:**
   ```bash
   cd video-player-app
3. **Install required node modules: **
   ```bash
   npm install
4. **Generate css file for project:**
   ```bash
   sass --watch src/css/style.scss dist/style.css
5. **Set up single JavaScript file:**
   ```bash
   npm start
6. **Run <i>index.html</i> in your local browser**

## Folder Structure

    ```
    portfolio-project/          
    ├── dist/
    │   └── index.html            # The main HTML file
    ├── public/
    │   ├── assets/               
    │   ├── images/               
    │   └── videos/               
    ├── src/
    │   ├── css/
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

### TODO
* size down possible searches only to names of cities

### Known Issues
*currenty found nothing

### Future changes to add 
* add trending searches section under search bar
* show some information about searched place under the video
