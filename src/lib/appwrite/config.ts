import { Client, Account , Databases , Storage , Avatars} from 'appwrite';

export const appwriteConfig = {
        url : import.meta.env.VITE_APPWRITE_URL,
        projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
        databaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,
        storageId : import.meta.env.VITE_APPWRITE_STORAGE_ID,
        savesCollectionId : import.meta.env.VITE_APPWRITE_SAVES_COLLECTION__ID,
        userCollectionId : import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
        postCollectionId : import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
};

export const client = new Client();

try {
        client.setEndpoint(appwriteConfig.url);
        client.setProject(appwriteConfig.projectId);
    } catch (error) {
        console.error(`Failed to set up Appwrite client: ${error}`);
    }

export const account = new Account(client);

export const databases = new Databases(client);

export const storage = new Storage(client);

export const avatars = new Avatars(client);