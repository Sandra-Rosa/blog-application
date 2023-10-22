import user from "../model/user.js";

export const signupUser = async(request,response)=>{
    try{
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({msg:'signup successfull'})
    }catch(e){
        return response.status(500).json({msg:'Erorr while signup the user'})
    }
}