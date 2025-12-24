import {
  GoogleSignin,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import useAuthStore from '../../store/useAuthStore';

const Login = ({}) => {

  const setLogin = useAuthStore((state) => state.setLogin);
  
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId : '298126957946-2g4r8hs4vjt3nuilbbd8j3hlm21g5n2h.apps.googleusercontent.com',
      offlineAccess : true
    })
  },[])

  const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    console.log(response.data.user)
    if(response){
      let userInfo = response.data.user;
      setLogin(userInfo)
    }
   
  } catch (error) {
   
  }
};

 const handleLogout = async () => {
    await GoogleSignin.signOut();
    //logout();
  };



  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Login</Text>
        <GoogleSigninButton onPress={signIn} />
    </View>
)};

export default Login;
