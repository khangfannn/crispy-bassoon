import { ID } from "appwrite";

import { INewUser } from "@/types";

import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user:INewUser) {
    try {
        const newAccount = await account.create(
                ID.unique(),
                user.email,
                user.password,
                user.name
        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });
        return newUser;
    } catch (error) {
        console.error(`createUserAccount has an error: ${error}`);
        
    }

}
export async function saveUserToDB(user:{
    accountId:string;
    email:string;
    name:string;
    imageUrl:URL;
    username?:string;
}){
    try {
        const newUser = await databases.createDocument(appwriteConfig.databaseId,
                                                         appwriteConfig.userCollectionId ,
                                                         ID.unique() ,
                                                         user);
        return newUser;
    } catch (error) {
        console.error(`saveUserToDB has an error: ${error}`);
        
    }
}