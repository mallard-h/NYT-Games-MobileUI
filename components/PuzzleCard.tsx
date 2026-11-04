import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { Href, useRouter } from "expo-router";

type Props = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  date: string;
  colour: string;
  route?: string;
};

{/*Had to google how to pass a route as a prop to a component, Href was the only way I got to work*/}
const PuzzleCard = ({ title, description, image, date, colour, route }: Props) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => { if (route) router.push(route as Href) }}> 
      <View style={[styles.card, {backgroundColor: colour}]}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={styles.topLeft}>
            <Text style={styles.puzzleName}>{title}</Text>
            <Text style={styles.puzzleText} numberOfLines={2}>
              {description}
            </Text>
          </View>
          <Image source={image} style={styles.puzzleIcon}></Image>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default PuzzleCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderColor: "#000",
    justifyContent: "space-between",
    padding: 15,
    minWidth: 275,
    minHeight: 100,
    flexDirection: "column",
    margin: 10,
  },

  puzzleName: {
    fontSize: 20,
    fontWeight: 700,
  },
  puzzleText: {
    fontSize: 13,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  topLeft: {
    justifyContent: "space-between"
  },
  puzzleIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
