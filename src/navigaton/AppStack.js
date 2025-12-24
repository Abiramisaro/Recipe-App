import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";
import { RText } from "../components";
import { Create_Recipe, Home, Profile } from "../screen";
import { color } from "../theme/color";

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const TabBarLabel = ({ focused, title }) => {
    return (
      <View style={styles.labelContainer}>
        {focused && <View style={styles.indicator} />}
        <RText
          style={[styles.label, focused && styles.activeLabel]}
          content={title}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator
     
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: color.prime,
        tabBarStyle: {
          borderTopWidth: 2,
          borderTopColor: color.prime,
        },
        tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: color.white }} // ripple effect on Android
              style={() => [
                props.style,
                { backgroundColor: "white" }, // background on press
              ]}
            />
          ),
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
         headerShown : false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? color.prime : color.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create_Recipe"
        component={Create_Recipe}
        options={{
          headerTitle: "Create New Recipe",
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Create" />
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-circle"
              size={26}
              color={focused ? color.prime : color.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
         headerShown : false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={26}
              color={focused ? color.prime : color.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
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
export default AppStack;
