const indexedDB = window.indexedDB;

const request = indexedDB.open("transactions", 1);
let db;

request.onupgradeneeded = ({ target }) => {
  let db = request.result;
  db.createObjectStore(pending, { autoIncrement: true });
};

request.onerror = function (e) {
  console.log("There was an error");
};

request.onsuccess = ({ target }) => {
    db = target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

// checkdatabase
