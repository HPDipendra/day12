import User from "../models/userModel"
import DataSource from "../database/config"

class UserService{
    static userAdd = async (userData:any) =>{
      try{


        console.log('pshsd');
        
        console.log(userData);


       const user = new User();
       user.userName=userData.userName
       user.userAddress=userData.address
       user.userPhone=userData.phone


       const userRepository =  DataSource.getRepository(User);  

      const data  = await userRepository.save(user);
      console.log(data);

      if(data){
       return{success:"true",message:"data saved succesfully",data}
      }else{
        return{success:"false",message:"data not saved"}
 
      }
    }
    catch(err){
      console.log('hi');
      
      console.log(err);
      
    }
      
    }



    static getById = async (userData:any) =>{
      try{

       const userRepository =  DataSource.getRepository(User);  

      const data  = await userRepository.findOneBy(
         {id:userData})

      console.log(data);

      if(data){
       return{success:"true",message:"data saved succesfully",data}
      }else{
        return{success:"false",message:"data not found"}
 
      }
    }
    catch(err){
      console.log('hi');
      
      console.log(err);
      
    }
      
    }

    static delete = async (userData:any) =>{
      try{

       const userRepository =  DataSource.getRepository(User);  

      const data  = await userRepository.delete(
         {id:userData})

      console.log(data);

      if(data){
       return{success:"true",message:"data deleted succesfully",data}
      }else{
        return{success:"false",message:"id not found"}
 
      }
    }
    catch(err){
      console.log('hi');
      
      console.log(err);
      
    }
      
    }

    static getAll = async () =>{
      try{

       const userRepository =  DataSource.getRepository(User);  

      const data  = await userRepository.find()

      console.log(data);

      if(data){
       return{success:"true",data}
      }else{
        return{success:"false",message:"data not found"}
 
      }
    }
    catch(err){
      console.log('hi');
      
      console.log(err);
      
    }
      
    }


    static update = async (id:any, userData:any) =>{

      const user = new User();
      user.userName=userData.userName
      user.userAddress=userData.address
      user.userPhone=userData.phone

      try{

       const userRepository =  DataSource.getRepository(User);  

      const data  = await userRepository.update(
         {id},user)

      console.log(data);

      if(data.affected){
       return{success:"true",message:"data updated succesfully",data}
      }else{
        return{success:"false",message:"id not found"}
 
      }
    }
    catch(err){
      console.log('hi');
      
      console.log(err);
      
    }
      
    }




};

export default UserService