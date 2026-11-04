import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const RoundedButton = ({ text }: Props) => {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 100,
    padding: 4,
    marginHorizontal: 5,
  },

  text: {
    fontSize: 12,
    fontWeight: 500,
  },
});
