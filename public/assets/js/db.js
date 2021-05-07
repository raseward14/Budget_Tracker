// throw error if browser does not support indexedDB
if (!indexedDB) {
  console.log(
    "Your browser doesnt support a stable version of IndexedDB. Offline changes will not be saved."
  );
}

const indexedDB = window.indexedDB;
const storeName = "transactions";
let db;

// SETUP
// opening a database, stored in variables
function openDb() {
  console.log("openDb...");
  const request = indexedDB.open("budget", 1);
  request.onsuccess = (e) => {
    db = this.result;
    console.log("openDb complete!");
    if (navigator.onLine) {
        checkDatabase();
      }
  };
  request.onerror = ({ e }) => {
    console.error("openDb:", e.error);
  };

  // GENERATING HANDLERS
  // called to create new db, or increase the version number of an existing database
  request.onupgradeneeded = ({ target }) => {
    console.log("openDb.onupgradeneeded");
    // Save the IDBDatabase interface
    let db = target.result;
    // Create an objectStore for this database
    // automatically generate key with autoIncrement
    var objectStore = db.createObjectStore("transactions", {
      autoIncrement: true,
    });

    objectStore.createIndex("name", "name", { unique: false });
    // key values will look like this
    // key: 1 => value: +10
    transactionData.forEach((transaction) => {
      objectStore.add(transaction);
    });
  };
};

// READWRITE MODE- IDBDatabase.transaction(storeNames or transactions, mode)
// save offline object to indexedDB
async function saveRecord(transaction) {
  // write to the indexed db, returns a transaction object
  const objectStore = db
    .transaction(["transactions"], "readwrite")
    .objectStore(storeName);
  const request = objectStore.get(transaction[0]);
  // do something when data is added to db
  request.oncomplete = () => {
    console.log("done!");
  };
  request.onerror = () => {
    console.log("error!");
  };

  await objectStore.put(transaction);
  await transaction.done;
}

// retrieve data from indexedDB
async function checkDatabase() {
  // get all items from a store
  const items = await db.transaction([storeName], 'readwrite').objectStore(storeName).getAll();

  items.onsuccess = () => {
    if (result.length > 0) {
        fetch('api/transaction/bulk', {
            method: 'POST',
            body: JSON.stringify(getAll.result),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            transaction = db.transaction([storeName], 'readwrite').objectStore(storeName).clear()
        })
    }
  };

  items.onerror = ({ e }) => {
    console.log('checkDatabase:', e.error);
  };
};

// checkdatabase
window.addEventListener("load", checkDatabase);
