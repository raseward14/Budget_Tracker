# Budget_Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A Budget Tracker application that allows for offline access and functionality. As a user, add expenses and deposits to your budget with or without a connection. When entering transactions offline, they will populate the total when brought back online.

IndexedDB is used to cache transactions while the application is offline. The methods onupgradeneeded, onerror, onsuccess, on oncomplete comprise the lifecycle of the transactions made offline. This application is deployed to Heroku and utilizes a MongoDB Atlas database. The webpack.config.js requires a custom route, because it is located within the applications public folder, not at the root directory. This required custom entry, and output paths to resolve the directory name of the wepacks location. The greatest challenge was working with the IndexedDB lifecycle. Storing the database name, store name, method, and object itself proved to be challenging, but was ultimately resolved by calling the saveRecord function with four parameters, one or each IndexedDB required parameter, and passing them through an exported function that is then imported in index.js, the js file used in out webpack bundle.

**[Track your Expenses here.](https://damp-wildwood-72230.herokuapp.com/)**

## Table of Contents
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Usage
* **The Finished Product**  
![Budget Tracker](assets/images/snapshot.png)

## Credits
Here are a few resources that helped me get this project knocked out!
* [Stack Overflow](https://stackoverflow.com/questions/51810615/webpack-4-error-in-entry-module-not-found-error-cant-resolve-src)
* [MDN IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#updating_an_entry_in_the_database)
* [Free Code Camp IndexedDB](https://www.freecodecamp.org/news/a-quick-but-complete-guide-to-indexeddb-25f030425501/)
* [JS Async Await](https://javascript.info/async-await)
* [IndexedDB Tutorial](https://video.search.yahoo.com/search/video;_ylt=Awr9DtgIKpdguvgAyotXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=indexedDB+tutorial&fr=mcafee#id=12&vid=22f688e9587515f49030357cde6c9072&action=view)

## License
* Link for more information: (https://opensource.org/licenses/MIT)
* MIT License

      Copyright (c) [2021] [Richard A Seward]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
