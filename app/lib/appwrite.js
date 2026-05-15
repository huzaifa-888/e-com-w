import { Client, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://sgp.cloud.appwrite.io/v1') 
  .setProject('697f0ae70017907b4c35'); // Dashboard ke settings se ID copy karein

export const databases = new Databases(client);
export const storage = new Storage(client);
export { client };