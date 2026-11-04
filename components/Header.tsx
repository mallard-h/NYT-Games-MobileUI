import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/images/mallard_github.png")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>| Games</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {

    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
