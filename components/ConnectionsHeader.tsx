import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import RoundedButton from "./RoundedButton";

const Header = () => {
  return (
    <View style={styles.navbar}>
      <View>
        <Pressable>
          <Image
            source={require("@/assets/images/hamburger.png")}
            style={styles.icon}></Image>
        </Pressable>

      </View>
      <View style={styles.rightSide}>
        <Pressable>
          <Image
            source={require("@/assets/images/lightbulb.png")}
            style={styles.icon}></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("@/assets/images/leaderboard.png")}
            style={styles.icon}></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("@/assets/images/help.png")}
            style={styles.icon}></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("@/assets/images/cog.png")}
            style={styles.icon}></Image>
        </Pressable>
        <Pressable>
          <View style={styles.subscribeButton}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </View>
        </Pressable> 
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: -12,
    marginTop: -12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#45556c",
    justifyContent: "space-between",
  },

  rightSide: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },

  subscribeButton: {
    borderRadius: 20,
    borderColor: "black",
    padding: 5,
    borderWidth: 2,
    marginHorizontal: 10,
  },

  subscribeText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});


 