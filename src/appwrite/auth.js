import conf from "../conf/conf";
import { Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId) // Your project ID
        this.account=new Account(this.client)
    }

    async createAccount(email,password,name){

        try {
            const newUser=await this.account.create(ID.unique(),email,password,name)
            if(newUser){
                return login(email,password)
            }
            else{
                return newUser
            }
            
        } catch (error) {
            console.log("Appwrite serive :: create account :: error",error);
        }

    }

    async login(email,password){
        try {
            return await this.account.createEmailSession(email,password)
            
        } catch (error) {
            console.log("Appwrite serive :: login :: error",error);
        }

    }

    async getCurrentUser (){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error",error);
            
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessionP();
            
        } catch (error) {
            console.log("Appwrite serive :: logout :: error",error);
        }
    }

}

const authService =new AuthService()
export default authService;