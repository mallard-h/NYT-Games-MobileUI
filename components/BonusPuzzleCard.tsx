import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const games = [
  {
    id: "crossword",
    source: require("@/assets/images/cw.png"),
    top: 20,
    left: 25,
  },
  {
    id: "wordle",
    source: require("@/assets/images/wordle.png"),
    top: 35,
    left: 65,
  },
  {
    id: "connections",
    source: require("@/assets/images/connections.png"),
    top: 70,
    left: 55,
  },
  {
    id: "spellingbee",
    source: require("@/assets/images/sb.png"),
    top: 60,
    left: 15,
  },
];

const BonusPuzzleCard = () => {
  return (
    <Pressable>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.left}>
            <Text style={styles.bonusName}>Bonus puzzles</Text>

            <Text style={styles.puzzleText}>
              Play Wordle in 1 and more fresh twists on games you know - every
              Wednesday.
            </Text>

            <Text style={styles.startText}>
              Start solving for free
            </Text>
          </View>

          <View style={styles.right}>
            {games.map((game) => (
              <Image
                key={game.id}
                source={game.source}
                style={[
                  styles.gameIcon,
                  { top: game.top, left: game.left },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BonusPuzzleCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#484747",
    borderWidth: 1,
    height: 120,
    margin: 10,
    overflow: "hidden",
    maxWidth: 300,
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  left: {
    width: "65%",
    padding: 10,
  },

  right: {
    width: "35%",
    height: "100%",
    backgroundColor: "#f7f793",
    position: "relative",
  },

  bonusName: {
    fontSize: 20,
    fontWeight: "700",
  },

  puzzleText: {
    fontSize: 13,
    marginTop: 4,
  },

  startText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 12,
  },

  gameIcon: {
    width: 30,
    height: 30,
    position: "absolute",
  },
});