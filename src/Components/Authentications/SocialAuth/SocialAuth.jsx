import { Avatar, Box, Button } from "@mui/material";
import useAuth from "../../../HOOKS/useAuth";
import ggLogo from "/google.webp"
import fbLogo from "/facebook.webp"

const SocialAuth = () => {

    const{googleLogin,facebookLogin}=useAuth()

     const handleGoogle = ()=>{
          googleLogin().then(res=>{
            console.log(res.user);
          }).catch(err=> console.log(err))
     }

     const handleFacebook=()=>{
            facebookLogin().then(res=>{
                console.log(res.user);
            }).catch(err=>console.log(err))
     }
    return (
        <Box >
           <Button  onClick={handleGoogle}><Avatar  src={ggLogo}/></Button>
           <Button onClick={handleFacebook}><Avatar   sx={{ width: 70, height: 70 }}
  src={fbLogo}/></Button>
        </Box> 
         
    );
};

export default SocialAuth;