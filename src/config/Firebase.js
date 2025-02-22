import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBY5QPhwd9UGhWT9Rc7PJrsOxF7H9L0lS4",
  authDomain: "surajchat-5359f.firebaseapp.com",
  projectId: "surajchat-5359f",
  storageBucket: "surajchat-5359f.firebasestorage.app",
  messagingSenderId: "203101376088",
  appId: "1:203101376088:web:9c27ccc13217a08553442d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(username,email,password)=>{
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await setDoc(doc(db,"users",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email,
        name:"",
        avatar:"",
        bio:"Hey,I Love You",
        lastSeen:Date.now()
      })
      await setDoc(doc(db,"chats",user.uid),{
        chatData:[]
      })
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

 const login = async(email,password)=>{
      try {
        await signInWithEmailAndPassword(auth,email,password);
      } catch (error) {
          console.error(error);
          toast.error(error.code.split('/')[1].split('-').join(" "));
      }
 }

 const logout = async()=>{
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
 }

export {signup,login,logout,auth,db}