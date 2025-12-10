import Feather from '@expo/vector-icons/Feather';
import { Image, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { BorderBox, RButton, RText } from '../../components';
import App_Images from '../../theme/AppImage';
import { useTheme } from '../../theme/useTheme';

const AVAILABLE_COLORS = ['#4F8000', '#007AFF', '#FF3B30', '#5856D6', '#FF9500'];

const Profile = ({
    params,
}) => {
    const { colors, isDarkMode, toggleTheme, setPrimaryColor } = useTheme();

    const Content = ({ iconName, title }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
            <Feather name={iconName} color={colors.placeHolder} size={18} />
            <RText content={title} style={{ color: colors.placeHolder, fontSize: 13, marginLeft: 10 }} />
        </View>
    )

    const UserData = ({ value, edit = true }) => (
        <View style={{ flexDirection: 'row', justifyContent: "flex-end", width: '70%' }}>
            <RText content={value} style={{ color: colors.text, fontSize: 13 }} />
            {edit && <Feather name='edit-3' color={colors.placeHolder} size={18} style={{ marginLeft: 5 }} />}
        </View>
    )

    const ColorDot = ({ color }) => (
        <TouchableOpacity
            onPress={() => setPrimaryColor(color)}
            style={{
                width: 30, height: 30, borderRadius: 15, backgroundColor: color, marginRight: 15,
                borderWidth: colors.prime === color ? 3 : 0, borderColor: colors.text
            }}
        />
    );

    // Dynamic style helper for BorderBoxes
    const boxStyle = {
        marginTop: 10, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: colors.card,
        borderColor: colors.border
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]} scrollEnabled={true}>
            <Image source={App_Images.profile} style={[styles.userPhoto, { backgroundColor: colors.border }]} />
            <RText content={'Abirami Saravanan'} style={[styles.UserName, { color: colors.text }]} />
            <RText content={'abiramisaravanatpr@gmail.com'} style={[styles.mail, { color: colors.placeHolder }]} />

            <BorderBox style={[boxStyle, { marginTop: 30 }]}>
                <Content iconName='user' title='Name' />
                <UserData value={'Abirami Saravanan'} />
            </BorderBox>

            <BorderBox style={boxStyle}>
                <Content iconName='mail' title='Email' />
                <UserData value={'abiramisaravantpr@gmail.com'} />
            </BorderBox>

            <BorderBox style={boxStyle}>
                <Content iconName='lock' title='Password' />
                <UserData value={'*********'} />
            </BorderBox>

            <BorderBox style={boxStyle}>
                <Content iconName='calendar' title='Joined' />
                <UserData value={'September 10, 2025 '} edit={false} />
            </BorderBox>

            {/* Theme Settings */}
            <View style={{ marginTop: 20 }}>
                <BorderBox style={boxStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="moon" color={colors.placeHolder} size={18} />
                        <RText content="Dark Mode" style={{ color: colors.text, marginLeft: 10, fontSize: 13 }} />
                    </View>
                    <Switch value={isDarkMode} onValueChange={toggleTheme} trackColor={{ true: colors.prime }} />
                </BorderBox>

                <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                    <RText content="Theme Color" style={{ color: colors.placeHolder, marginBottom: 10, fontSize: 13 }} />
                    <View style={{ flexDirection: 'row' }}>
                        {AVAILABLE_COLORS.map(c => <ColorDot key={c} color={c} />)}
                    </View>
                </View>
            </View>

            <RButton
                buttonText={'Log Out'}
                buttonStyle={[styles.logoutButton, { backgroundColor: colors.prime, borderColor: colors.border }]}
                textStyle={styles.logoutText}
                onPress={() => console.log("Logout")}
            />

        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18
    },
    logoutButton: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        marginTop: 30, // Increased spacing
        marginBottom: 23
    },
    logoutText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center",
    },
    userPhoto: {
        width: 120, height: 120,
        borderRadius: 60, alignSelf: 'center', marginBottom: 20
    },
    UserName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center"
    },
    mail: {
        fontSize: 13,
        textAlign: "center"
    }
})
export default Profile;
