import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BonusPuzzleCard from "../../../components/BonusPuzzleCard";
import Header from "../../../components/Header";
import PuzzleCard from "../../../components/PuzzleCard";

const puzzles = [
  {
    id: "Connections",
    title: "Connections",
    source: require("@/assets/images/connections.png"),
    description: "Group words that share a common thread.",
    date: getFormattedDate(),
    colour: "#ad6ab9",
    route: "/Connections",
  },
  {
    id: "Wordle",
    title: "Wordle",
    source: require("@/assets/images/wordle.png"),
    description: "Guess your way to the correct word.",
    date: getFormattedDate(),
    colour: "#c2c2c2",
  },
  {
    id: "Crossword",
    title: "The Crossword",
    source: require("@/assets/images/cw.png"),
    description: "NYT's Classic crossword.",
    date: getFormattedDate(),
    colour: "#588aff",
  },
  {
    id: "SpellingBee",
    title: "Spelling Bee",
    source: require("@/assets/images/sb.png"),
    description: "Wrangle as many words as you can.",
    date: getFormattedDate(),
    colour: "#fdf55d",
  },
];

function getFormattedDate(): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.background}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={styles.mainSection}>
        <Text style={styles.offerText}>Limited Time Offer</Text>
        <Text style={styles.adText}>
          Annual Games subscribers get 6 months of Super Duolingo for free.
        </Text>
        <Pressable>
          <View style={styles.subscribeButton}>
            <Text style={styles.subscribeText}>Subscribe Now</Text>
          </View>
        </Pressable>
        <Text style={styles.otherOffers}>See other offers</Text>
        <BonusPuzzleCard />
        <FlatList
          data={puzzles}
          keyExtractor={(puzzle) => puzzle.id.toString()}
          renderItem={({ item: puzzle }) => (
            <PuzzleCard
              title={puzzle.title}
              description={puzzle.description}
              image={puzzle.source}
              date={puzzle.date}
              colour={puzzle.colour}
              route={puzzle.route}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0f0f0",
    flex: 1,
  },
  mainSection: {
    backgroundColor: "#f0f0f0",
  },
  offerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  adText: {
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 18,
  },

  subscribeButton: {
    borderRadius: 20,
    borderColor: "black",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 25,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  subscribeText: {
    fontSize: 18,
    fontWeight: "semibold",
  },

  otherOffers: {
    fontSize: 13,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
