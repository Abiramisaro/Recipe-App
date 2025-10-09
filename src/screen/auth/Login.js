// import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { useState } from "react";
// import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
// import useAuthStore from "../store/useAuthStore";



// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
// const {setLogin} = useAuthStore();

//   const toggleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };


//  const validateLogin = () => {
//   if (!email || !password) {
//     KAlert("Error", "Both fields are required");
//     return false;
//   }
//   if (!/\S+@\S+\.\S+/.test(email)) {
//     KAlert("Error", "Enter a valid email address");
//     return false;
//   }
//   if (password.length < 6) {
//     KAlert("Error", "Password must be at least 6 characters long");
//     return false;
//   }
//   return true;
// };

//   const Login_User = async() => {
//     try{
//         if(!validateLogin()) return;
//         let params = {
//  "email": email,
//  "password": password,
// }
//         const res = await axios.post(service.login,params,{
//     headers: {
//       Authorization: `Bearer ${token}`,  // ✅ attach token
//       "Content-Type": "application/json"
//     }
//   })
//         console.log(res.data.data.token,res.data.data.user)
//         if(res.status == 200){
//           KAlert("",res.data.message)
//            setLogin({  user:res.data.data.user,token:res.data.data.token})
//         } else{
//                 KAlert("","Something went wrong")

//         }
        

//     }catch(e){
//       KAlert("","Something went wrong")
//       console.log(e)
//     } finally{
//     setEmail('')
//     setPassword('')
      
//     }
//   }

//   return (
//     <View style={styles.container}>
//       {/* Logo Box */}
//       <View style={styles.logoBox}>
//         <KText content="Logo" style={styles.logoText} />
//         <KText content="Ipsum" style={styles.ipsumText} />
//       </View>

//       {/* Title */}
//       <KText content="Log In" style={styles.title} />

//       {/* Email / Phone Input */}
//       <KTextBox
//         placeholder={"Email / Phone number"}
//         value={email}
//         onChangeText={setEmail}
//       />

//       {/* Password Input */}
//       <KTextBox
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//       />

//       {/* Remember Me + Forgot Password */}
//       <View style={styles.row}>
//         <Pressable style={styles.rememberRow} onPress={toggleRememberMe}>
//           <Ionicons name={rememberMe ? "checkbox" :"square-outline"} size={20} color="#333" />
//           <KText content="  Remember me" style={styles.rememberText} />
//         </Pressable>
//         <TouchableOpacity>
//           <KText content="Forgot password?" style={styles.forgotText} />
//         </TouchableOpacity>
//       </View>

//       {/* Login Button */}
//       <KButton
//         buttonText="Log In"
//         buttonStyle={styles.button}
//         textStyle={styles.buttonText}
//         onPress={() => Login_User()}
//       />

//       {/* Register Link */}
//       <View style={styles.registerRow}>
//         <KText content="Don’t have an account? " style={styles.normalText} />
//         <TouchableOpacity onPress={() => navigation.navigate("Register")}>
//           <KText content="Register now!" style={styles.linkText} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   logoBox: {
//     flexDirection: "row",
//     backgroundColor: "#1A1D54",
//     borderRadius: 4,
//     overflow: "hidden",
//     alignSelf: "center",
//     marginBottom: 40,
//   },
//   logoText: {
//     color: "#fff",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   ipsumText: {
//     backgroundColor: "#00B377",
//     color: "#fff",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#1A1D54",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   rememberRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rememberText: {
//     color: "#333",
//     fontSize: 14,
//   },
//   forgotText: {
//     fontSize: 14,
//     color: "#666",
//   },
//   button: {
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   registerRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   normalText: {
//     fontSize: 14,
//     color: "#000",
//   },
//   linkText: {
//     fontSize: 14,
//     color: "#00B377",
//     fontWeight: "600",
//   },
// });
import { Text, View } from 'react-native';

const Login = ({
    params,
}) => (
    <View>
        <Text>Login</Text>
    </View>
);

export default Login;

