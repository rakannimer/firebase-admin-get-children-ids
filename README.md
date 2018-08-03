# Firebase Admin Get Children IDs

Get children ids at a given path in your firebase realtime database.

```javascript
const { getChildrenIDs } = require('firebase-admin-get-children-ids');
const firebase = require('firebase-admin');

const getUserIDs = async () => {
  const databaseURL = "<FIREBASE_DATABASE_URL>";
  const credential = require("./firebase-key.json");
  const userIDs = await getChildrenIDs('/users/');
  return userIDs;
}
```

This module is meant to run on node NOT on the browser or react-native.

Use this in your node server or on cli tools.

## Installation

```sh
  yarn add firebase-admin-get-children-ids
  # If you don't already have firebase-admin as a dependency then add it too
  yarn add firebase-admin
```


## Usage 

1. First you need a Private Key from firebase for privileged environments, find out how to get it here: https://firebase.google.com/docs/admin/setup (or replace YOUR_PROJECT_NAME_HERE with your project name here : https://console.firebase.google.com/project/YOUR_PROJECT_NAME_HERE/settings/serviceaccounts/adminsdk)

2. Place that private key .json file somewhere in your project.
3. Take note of your databaseURL

```javascript

// Import it in your project

import {getChildrenIDs} from 'firebase-admin-get-children-ids'
// Or
const {getChildrenIDs} = require('firebase-admin-get-children-ids')

// Import firebase-admin
import admin from 'firebase-admin'
// Or
const admin = require('firebase-admin')


// Use it

const getUserIDs = async () => {
  const databaseURL = "<FIREBASE_DATABASE_URL>";
  const credential = require("./firebase-key.json");
  const userIDs = await getChildrenIDs('/users/');
  return userIDs;
}

```