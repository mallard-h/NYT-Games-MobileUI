import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StatCard from "../../../components/StatCard";

const games = [
  {
    id: "Connections",
    colour: "#ad6ab9",
    title: "Connections",
    image: require("@/assets/images/connections.png"),
    puzzlesPlayed: 72,
    winRate: 85,
    streak: 5,
    maxStreak: 12,
  },
  {
    id: "Crossword",
    colour: "#588aff",
    title: "Crossword",
    image: require("@/assets/images/cw.png"),
    puzzlesPlayed: 68,
    winRate: 72,
    streak: 3,
    maxStreak: 9,
  },
  {
    id: "Wordle",
    colour: "#c2c2c2",
    title: "Wordle",
    image: require("@/assets/images/wordle.png"),
    puzzlesPlayed: 120,
    winRate: 75,
    streak: 14,
    maxStreak: 21,
  },
  {
    id: "Spelling Bee",
    colour: "#fdf55d",
    title: "Spelling Bee",
    image: require("@/assets/images/sb.png"),
    puzzlesPlayed: 35,
    winRate: 44,
    streak: 2,
    maxStreak: 5,
  },
];

export default function Profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Me</Text>
          <Ionicons name="settings-sharp" size={18} color="black" />
        </View>
        <Image
          source={require("@/assets/images/mallard_github.png")}
          style={styles.profilePic}></Image>
        <Text style={styles.greeting}>
          Hi, Mallard. Check out your achievements.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 8,
            marginTop: 20,
          }}>
          <Text style={styles.badges}>View all badges.</Text>
          <AntDesign name="right" size={10} color="#a1a1a1" />
        </View>
        {games.map((game) => (
          <StatCard
            key={game.id}
            colour={game.colour}
            title={game.title}
            image={game.image}
            puzzlesPlayed={game.puzzlesPlayed}
            winRate={game.winRate}
            streak={game.streak}
            maxStreak={game.maxStreak}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 30,
    alignSelf: "center",
  },
  greeting: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
  },
  badges: {
    fontSize: 10,
    color: "#a1a1a1",
    fontWeight: 600,
    marginBottom: 10,
  },
});
