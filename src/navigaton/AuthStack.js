import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { Login, Register } from "../screen";
import { color } from "../theme/color";

const Stack = createStackNavigator();
const AuthStack = () => {
 

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false,
        
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    color: "#777",
    fontWeight: "400",
  },
  activeLabel: {
    fontWeight: "600", // bold when active
    color: color.prime,
  },
  indicator: {
    width: "40%",
    height: 3,
    backgroundColor: color.prime,
    position: "absolute",
    top: -35, // line above text
    borderRadius: 5,
  },
});
export default AuthStack;
