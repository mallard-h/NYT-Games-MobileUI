import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ArrowButton from "../../../components/ArrowButton";

function getFormattedDate(): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}
const games = [
  {
    id: "connections",
    source: require("@/assets/images/connections.png"),
  },
  {
    id: "crossword",
    source: require("@/assets/images/cw.png"),
  },
  {
    id: "wordle",
    source: require("@/assets/images/wordle.png"),
  },
  {
    id: "spellingbee",
    source: require("@/assets/images/sb.png"),
  },
];

export default function Friends() {
  const dateText: string = getFormattedDate();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Friends</Text>
          <FontAwesome5 name="user-friends" size={20} color="black" />
        </View>

        <View style={styles.dateContainer}>
          <ArrowButton direction="left" size="med" />
          <Pressable
            style={[
              styles.flexRow,
              { borderRadius: 5, borderWidth: 1, padding: 8 },
            ]}>
            <Text style={styles.dateText}>{dateText}</Text>
            <FontAwesome name="caret-down" size={8} color="black" />
          </Pressable>
          <ArrowButton direction="right" size="med" />
        </View>

        <Text style={styles.gameName}>Connections</Text>
        <View style={styles.playerContainer}>
          <View style={styles.flexRow}>
            <Text style={{ marginHorizontal: 5 }}>•</Text>
            <Image
              source={require("@/assets/images/mallard_github.png")}
              style={styles.profilePic}></Image>
            <Text style={styles.playerName}>Mallard(you)</Text>
          </View>
          <Text style={styles.subscribe}>SUBSCRIBE</Text>
          <Entypo name="lock" size={14} color="black" />
        </View>

        <View style={[styles.flexRow, { justifyContent: "center" }]}>
          <FontAwesome5 name="user-friends" size={10} color="#a1a1a1" />
          <Text style={styles.manage}>Manage friends</Text>
        </View>

        <View style={styles.flexColumn}>
          <View style={styles.inviteBox}>
            <Text style={styles.gameName}>Invite your fellow solvers.</Text>
            <Text style={styles.p} numberOfLines={4}>
              Friends who accept your invite will be added to each game on the
              leaderboard. They'll need a free account to join the fun.
            </Text>
          </View>
          <View style={styles.tickBox}>
            <Octicons name="dot-fill" size={10} color="#000" />
            <Octicons name="dot-fill" size={10} color="#a1a1a1" />
            <Octicons name="dot-fill" size={10} color="#a1a1a1" />
            <Octicons name="dot-fill" size={10} color="#a1a1a1" />
          </View>
        </View>
        <View style={styles.gameBox}>
          {games.map((game) => (
            <Image
              key={game.id}
              source={game.source}
              style={[styles.gameIcon]}
            />
          ))}
        </View>
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
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    padding: 15,
    alignItems: "center",
  },
  dateText: {
    fontSize: 20,
    fontWeight: 600,
  },

  playerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    padding: 15,
    alignItems: "center",
    marginHorizontal: 20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  gameName: {
    fontSize: 25,
    fontWeight: 800,
    textAlign: "center",
    padding: 10,
  },
  playerName: {
    fontSize: 14,
    fontWeight: 700,
  },
  subscribe: {
    fontFamily: "system",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: 400,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  manage: {
    fontSize: 10,
    color: "#a1a1a1",
  },
  inviteBox: {
    backgroundColor: "#77a0ff",
    borderRadius: 15,
    maxWidth: 275,
    marginTop: 10,
  },
  p: {
    fontSize: 13,
    padding: 14,
  },
  flexColumn: {
    flex: 1,
    alignItems: "center",
  },
  tickBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 4,
    borderRadius: 10,
    backgroundColor: "#d3d2d2",
    marginTop: 65,
    padding: 5,
    minWidth: 75,
  },
  gameBox: {
    flexDirection: "row",
    gap: 10,
    borderRadius: 50,
    backgroundColor: "#FFF",
    marginTop: 25,
    padding: 10,
    alignSelf: "center",

    shadowColor: "#000",
    //IOS shadow
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Android shadow
    elevation: 5,
  },
  gameIcon: {
    width: 30,
    height: 30,
  },
});
