import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import * as ImagePicker from "expo-image-picker";
import { ref, set } from "firebase/database";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { database } from "../../../firebaseConfig";
import {
  BorderBox,
  RButton,
  RText,
  TextBox
} from "../../components";
import { color } from "../../theme/color";

const Create_Recipe = ({ navigation }) => {
  const [new_recipe, setNew_recipe] = useState({
    title: "",
    image: null,
    ingredients: [],
    preparation_steps: [],
  });

  const [ingredientInput, setIngredientInput] = useState("");
  const [stepInput, setStepInput] = useState("");

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editStepIndex, setEditStepIndex] = useState(null);
  const [editStepText, setEditStepText] = useState("");

  // Generic handler for title & image
  const handleChange = (field, value) => {
    setNew_recipe((prev) => ({ ...prev, [field]: value }));
  };

  // Add ingredient
  const handleAddIngredient = (name) => {
    if (!name.trim()) return;
    setNew_recipe((prev) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        { name: name.trim(), checked: true }, // ✅ always start as true
      ],
    }));
  };

  // Toggle checkbox
  const handleToggleIngredient = (index) => {
    setNew_recipe((prev) => {
      const updated = [...prev.ingredients];
      updated[index].checked = !updated[index].checked;
      return { ...prev, ingredients: updated };
    });
  };

  // Delete ingredient
  const handleDeleteIngredient = (index) => {
    setNew_recipe((prev) => {
      const updated = prev.ingredients.filter((_, i) => i !== index);
      return { ...prev, ingredients: updated };
    });
  };

  // Add preparation step
  const handleAddStep = () => {
    if (stepInput.trim() === "") return;
    setNew_recipe((prev) => ({
      ...prev,
      preparation_steps: [...prev.preparation_steps, stepInput.trim()],
    }));
    setStepInput("");
  };


  const handleEditStep = (index) => {
    setEditStepIndex(index);
    setEditStepText(new_recipe.preparation_steps[index]);
    setEditModalVisible(true);
  };

  // Save updated step
  const handleSaveStep = () => {
    if (editStepText.trim() === "") return;

    const updatedSteps = [...new_recipe.preparation_steps];
    updatedSteps[editStepIndex] = editStepText.trim();

    setNew_recipe((prev) => ({ ...prev, preparation_steps: updatedSteps }));
    setEditModalVisible(false);
  };

  const Sumbit_Recipe = () =>{
    writeRecipe("user1", "recipe1", {
  title: "Tea",
  image: null,
  ingredients: ["Tea powder", "water", "Sugar"],
  preparation_steps: [
    "boil water",
    "Add tea powder as much you want",
    "After add sugar",
    "Ready to serve!"
  ],
});

}

const pickImage = async () => {
  console.log("object")
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: false,
    aspect: [4, 4],
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result.assets[0].uri,"...")
    return result.assets[0].uri; // local file path
  }
};

const writeRecipe = (userId, recipeId, recipe) => {
  set(ref(database, "recipes/" + recipeId), {
    ...recipe,
    owner: userId,
  });
};

  console.log(new_recipe);
  return (
     <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // works for both iOS & Android
    >
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 18}}
    >
   {/* <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    /> */}

      <BorderBox>
        <RText content={"Recipe Title"} style={styles.title} />
        <TextBox
          placeholder={"e.g., Creamy Tomato Pasta"}
          value={new_recipe.title}
          style={styles.TextBox}
          onChangeText={(input) => handleChange("title", input)}
        />
      </BorderBox>

    
      <BorderBox>
        <RText content={"Recipe Image"} style={styles.title} />
        <Pressable
          style={styles.dashedBox}
          onPress={() =>pickImage()}
        >
          <Octicons name="image" size={40} color={color.grey} />
          <RText content={"Tap to select an image"} style={styles.tapImage} />
          <RButton
            buttonText={"Select an image"}
            onPress={() => pickImage()}
            buttonStyle={styles.selectImg}
            textStyle={styles.select}
          />
        </Pressable>
      </BorderBox>
      
      <BorderBox>
        <RText content={"Ingredients"} style={styles.title} />

        {/* Input + Add Button */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextBox
            placeholder={"Ingredient"}
            value={ingredientInput}
            onChangeText={setIngredientInput}
            style={[styles.TextBox, { flex: 1 }]}
          />
          <Pressable
            onPress={() => {
              handleAddIngredient(ingredientInput);
              setIngredientInput("");
            }}
            style={{marginBottom:10,marginLeft:7}}
          >
            <AntDesign name="plussquare" size={34}  color={color.prime} />
          </Pressable>
        </View>

        {/* Ingredient List */}
        {new_recipe.ingredients.map((item, index) => (
          <View key={index} style={styles.ingredientRow}>
            {/* Checkbox */}
            <Pressable style={{flexDirection : "row", width: '85%',alignItems:"center"}} onPress={() => handleToggleIngredient(index)}>
              <MaterialIcons
                name={item.checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={color.prime}
              />
               <RText
              content={item.name}
              style={[
                styles.ingredients,
                !item.checked && {
                  color: color.grey,
                },
              ]}
            />
            </Pressable>

            

            {/* Delete */}
            <Pressable style={{width : "15%",justifyContent:"center",alignItems:"flex-end"}} onPress={() => handleDeleteIngredient(index)}>
              <MaterialIcons name="delete-outline" size={24} color={color.red}/>
            </Pressable>
          </View>
        ))}
      </BorderBox>

      {/* Preparation Steps */}
      <BorderBox>

       

     
      <RText content={"Preparation Steps"} style={styles.title} />
     <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextBox
            placeholder={"Step"}
            value={stepInput}
            onChangeText={setStepInput}
            style={[styles.TextBox, { flex: 1 }]}
          />
          <Pressable
            onPress={() => {
             handleAddStep()
              setStepInput("");
            }}
            style={{marginBottom:10,marginLeft:7}}
          >
            <AntDesign name="plussquare" size={34}  color={color.prime} />
          </Pressable>
        </View>
     
       {new_recipe.preparation_steps.map((item, index) => (
          <View key={index} style={styles.stepRow}>
       <RText
          key={index}
          content={`${index + 1}. ${item}`}
          style={{ marginTop: 4, color: color.text, width: '85%' }}
        />
        <Pressable onPress={() => handleEditStep(index)} style={{width: '15%',alignItems:"flex-end" }} >
        <MaterialIcons name="edit" size={24} color="black"  />
      </Pressable>        
        </View>
      ))}
       </BorderBox>
       <RButton buttonText={'Create Recipe'} buttonStyle={[styles.selectImg,{backgroundColor: color.prime}]} textStyle={[styles.select,{color : color.white,fontSize:15}]} onPress={Sumbit_Recipe} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  ingredients: {
    color: color.black,
    fontSize: 13,
    fontWeight: "400",
    marginLeft :8
  },
  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: color.border,
    width : '100%'
  },
  dashedBox: {
    borderWidth: 2,
    borderColor: color.border,
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 200,
  },
  tapImage: {
    color: color.grey,
    marginTop: 8,
    fontSize: 14,
  },
  plusButton: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: color.prime,
    borderRadius: 6,
    marginBottom: 12,
    marginTop: 5,
  },
  ingredientRow: {
    flexDirection: "row",
    width : '100%',
    paddingVertical:10,
    paddingLeft:10,
    borderBottomColor : color.border,
    borderBottomWidth : 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  addIcon: {
    backgroundColor: color.prime,
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  TextBox: {
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 8,
    color: color.black,
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: color.title,
    marginBottom: 7,
  },
  selectImg: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.border,
    padding: 10,
    borderRadius: 6,
    marginTop: 8,
  },
  select: {
    color: color.prime,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Create_Recipe;
