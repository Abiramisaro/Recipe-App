import Feather from "@expo/vector-icons/Feather";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RButton, RText } from "../../components";
import useAuthStore from "../../store/useAuthStore";
import { color } from "../../theme/color";

const Profile = ({ params }) => {
  const { userDetails, logout } = useAuthStore();

  const handleLogout = async () => {
    await GoogleSignin.signOut();
    logout();
  };


  const OptionCard = ({ iconName, content }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
            marginTop: 24,

      }}
    >
      <View style={styles.optionCard}>
        <Feather name={iconName} color={color.placeHolder} size={23} />
        <RText content={content} style={styles.optionText} />
      </View>
      <Feather name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
    
      style={{ flex: 1 }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: color.prime,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <Image
          source={{ uri: userDetails?.photo }}
          style={[styles.userPhoto, { backgroundColor: color.border }]}
        />
        <View style={{ marginLeft: 15 }}>
          <RText
            content={userDetails?.name}
            style={[styles.UserName, { color: color.text }]}
          />
          <RText
            content={userDetails?.email}
            style={[styles.mail, { color: color.black }]}
          />
        </View>
      </View>
      <ScrollView
        style={[styles.container, { backgroundColor: color.background }]}
        scrollEnabled={true}
      >
        <OptionCard iconName={"user"} content={"Account"} />
        <OptionCard iconName={"edit-3"} content={"Edit Profile"} />

        <OptionCard iconName={"settings"} content={"Settings"} />
        <OptionCard iconName={"shield"} content={"Privacy"} />
        <OptionCard iconName={"help-circle"} content={"Help & Support"} />
        <OptionCard iconName={"file-text"} content={"Terms & Conditions"} />
        <OptionCard iconName={"info"} content={"About Us"} />
        <OptionCard iconName={"share-2"} content={"Share App"} />
        <OptionCard iconName={"bell"} content={"Notifications"} />
        <OptionCard iconName={"heart"} content={"Liked"} />
        <OptionCard iconName={"bookmark"} content={"Saved"} />
        <OptionCard iconName={"moon"} content={"Dark Mode"} />

        <RButton
          buttonText={"Log Out"}
          buttonStyle={[
            styles.logoutButton,
            { backgroundColor: color.prime, borderColor: color.border },
          ]}
          textStyle={styles.logoutText}
          onPress={handleLogout}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  optionText: {
    color: color.placeHolder,
    fontSize: 14,
    marginLeft: 12,
  },
  logoutButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginTop: 30, // Increased spacing
    marginBottom: 33,
  },
  logoutText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  UserName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  mail: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default Profile;
{
  /*
     <BorderBox style={boxStyle}>
          <Content iconName="bell" title="Notifications" />
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ true: color.grey }}
            thumbColor={"black"}
          />
        </BorderBox>

        <BorderBox style={boxStyle}>
          <Content iconName="heart" title="Liked" />
          <UserData value={"12"} edit={false} />
        </BorderBox>

        <BorderBox style={boxStyle}>
          <Content iconName="bookmark" title="Saved" />
          <UserData value={"21"} edit={false} />
        </BorderBox>

        
        <View style={{ marginTop: 20 }}>
          <BorderBox style={boxStyle}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="moon" color={color.placeHolder} size={18} />
              <RText
                content="Dark Mode"
                style={{ color: color.text, marginLeft: 10, fontSize: 13 }}
              />
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ true: color.grey }}
            />
          </BorderBox>
        </View>




         const Content = ({ iconName, title }) => (
    <View style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>
      <Feather name={iconName} color={color.placeHolder} size={18} />
      <RText
        content={title}
        style={{ color: color.placeHolder, fontSize: 13, marginLeft: 10 }}
      />
    </View>
  );

  const UserData = ({ value, edit = true }) => (
    <View
      style={{ flexDirection: "row", justifyContent: "flex-end", width: "70%" }}
    >
      <RText content={value} style={{ color: color.text, fontSize: 13 }} />
      {edit && (
        <Feather
          name="edit-3"
          color={color.placeHolder}
          size={18}
          style={{ marginLeft: 5 }}
        />
      )}
    </View>
  );

    */
}
