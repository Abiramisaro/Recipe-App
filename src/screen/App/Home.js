import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RText } from "../../components";
import App_Images from "../../theme";
import { color } from "../../theme/color";

 
const Home = ({ navigation }) => {
  const data = [
    { id: "1", title: "Noddles", img: App_Images.noddles },
    { id: "2", title: "Pasta", img: App_Images.pasta },
    { id: "3", title: "Briyani", img: App_Images.briyani },
    { id: "4", title: "Panner Tika", img: App_Images.panner },
    { id: "5", title: "Sandwitch", img: App_Images.sandwitch },
    { id: "6", title: "Chicken Briyani", img: App_Images.food },
  ];

  const getRecipeDetails = (item) => {
    
    console.log("item", item.title);
  };

  const render_RecipeList = ({ item }) => (
    <Pressable onPress={() => getRecipeDetails(item)}>
      <ImageBackground
        source={item.img}
        resizeMode='cover'
        resizeMethod='resize'
        style={styles.recipeImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <RText content={item.title} style={styles.title} />
      </ImageBackground>
    </Pressable>
  );
  return (
    <SafeAreaView edges={['top']}
      backgroundColor={color.prime} style={styles.container}>
      <FlatList data={data} renderItem={render_RecipeList} showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: 18,
  },
  recipeImage: {
    height: 220,
    width: "100%",
    marginBottom: 18,
    resizeMode: "cover",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: color.black,
    borderRadius: 20,
  },
  title: {
    fontSize: 19,
    color: color.white,
    fontWeight: "bold",
    padding: 15,
  },
});
export default Home;
