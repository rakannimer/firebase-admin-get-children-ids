import admin from "firebase-admin";
import axios from "axios";
import { JWT } from "google-auth-library";

export const initializeApp = ({ firebase, databaseURL, credential }) => {
  try {
    firebase.initializeApp({
      databaseURL,
      credential: admin.credential.cert(credential)
    });
    return;
  } catch (err) {
    if (err.code === "app/duplicate-app") {
      return;
    }
    throw err;
  }
};

export const getAdminIDToken = async credential => {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/firebase.database"
  ];
  const client = new JWT(
    credential.client_email,
    undefined,
    credential.private_key,
    scopes
  );
  const clientCredential = await client.authorize();
  return clientCredential.access_token;
};

export const isObject = (x) => {
	return typeof x === 'object' && x !== null;
};

export const getChildrenIDs = async (
  path = "",
  { firebase, credential, databaseURL }
) => {
    await initializeApp({ firebase, credential, databaseURL });
    const adminIDToken = await getAdminIDToken(credential);
    if (path.startsWith("/")) {
      path = path.slice(1, path.length);
    }
    const firebaseRestUrl = `${databaseURL}/${path}.json?access_token=${adminIDToken}&shallow=true`;
    try {
      const result = await axios.get(firebaseRestUrl);

      if (result.data === null || result.data == undefined) {
        return [];
      } 
      if (isObject(result.data)) {
        return Object.keys(result.data);
      } else {
        return [];
      }
      
      
    } catch (err) {
      console.error("error", err.message);
      throw err;
    }
  };

  export default getChildrenIDs;