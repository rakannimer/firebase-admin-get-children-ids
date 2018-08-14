const admin = require("firebase-admin");
const { getChildrenIDs } = require("./dist/index.cjs");

const main = async () => {
  const credential = require("./test-creds/firebase-credential.json");
  const databaseURL = require("./test-creds/databaseURL.json").databaseURL;
  const result = await getChildrenIDs("/", {
    databaseURL,
    credential,
    firebase: admin
  });
  console.log(`✅ Fetched childrenIDs : `, result);
};

(async () => {
  await main();
})();
