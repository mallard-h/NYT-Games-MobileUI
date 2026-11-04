import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  direction: string;
  size?: string;
};

const ArrowButton = ({ direction, size }: Props) => {
  let buttonSize: number;
  let icon;

  switch (direction) {
    case "left":
      icon = <AntDesign name="left" size={12} color="black" />;
      break;
    case "right":
      icon = <AntDesign name="right" size={12} color="black" />;
      break;
    default:
      icon = <AntDesign name="up" size={12} color="black" />;
  }

  switch (size) {
    case "small":
      buttonSize = 20;
      break;
    case "med":
      buttonSize = 40;
      break;
    case "large":
      buttonSize = 60;
      break;
    default:
      buttonSize = 30;
  }

  return (
    <Pressable>
      <View style={[styles.button, { width: buttonSize, height: buttonSize }]}>
        {icon}
      </View>
    </Pressable>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 100,
    padding: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },

  text: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
  },
});
