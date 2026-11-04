import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

type Props = {
  id: string;
  text: string;
  category: string;
};


const ConnectionCard = ({ text, category }: Props) => {
  const { width } = useWindowDimensions();
   const cardSize = (width - 40) / 4;
  return (
    <Pressable>
      <View style={[styles.card, { width: cardSize, height: cardSize }]}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>{text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0eee2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 100,
    maxHeight: 100
  },

  text: {
    fontSize: 10,
    fontWeight: 700,
  },
});

export default ConnectionCard;
