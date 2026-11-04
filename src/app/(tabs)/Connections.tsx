import { FlatList, StyleSheet, Text, View, Button, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ConnectionCard from "../../../components/ConnectionCard";
import MistakeOrb from "../../../components/MistakeOrb";
import RoundedButton from "../../../components/RoundedButton";
import ConnectionsHeader from "../../../components/ConnectionsHeader"

const CARDS = [
  {
    id: "0",
    text: "ADIRONDACK",
    category: "green",
  },
  {
    id: "1",
    text: "KNICKKNACK",
    category: "purple",
  },
  {
    id: "2",
    text: "CATSKILL",
    category: "purple",
  },
  {
    id: "3",
    text: "HOLIDAY",
    category: "blue",
  },
  {
    id: "4",
    text: "COMFORT",
    category: "blue",
  },
  {
    id: "5",
    text: "BERKSHIRE",
    category: "yellow",
  },
  {
    id: "6",
    text: "STABILITY",
    category: "purple",
  },
  {
    id: "7",
    text: "HAMPTON",
    category: "blue",
  },
  {
    id: "8",
    text: "WINDSOR",
    category: "green",
  },
  {
    id: "9",
    text: "MERRILL",
    category: "yellow",
  },
  {
    id: "10",
    text: "WINGBACK",
    category: "green",
  },
  {
    id: "11",
    text: "DAYS",
    category: "blue",
  },
  {
    id: "12",
    text: "CITI",
    category: "yellow",
  },
  {
    id: "13",
    text: "PIANOFORTE",
    category: "purple",
  },
  {
    id: "14",
    text: "EAMES",
    category: "green",
  },
  {
    id: "15",
    text: "GOLDMAN",
    category: "yellow",
  },
];

export default function Connections() {
  
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView style={styles.mainContainer} contentContainerStyle={{
          alignItems: "center",
        }}>
        <Text style={styles.mainText}>Create four groups of four!</Text>
          <FlatList
            data={CARDS}
            numColumns={4}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ gap: 8, marginVertical: 4}}
            renderItem={({ item }) => (
              <ConnectionCard
                id={item.id}
                text={item.text}
                category={item.category}
              />
            )}></FlatList>
        
        <View style={styles.mistakeContainer}>
          <Text style={styles.mistakeText}>Mistakes Remaining:</Text>
          <MistakeOrb />
          <MistakeOrb />
          <MistakeOrb />
          <MistakeOrb />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton text="Shuffle" />
          <RoundedButton text="Deselect All" />
          <RoundedButton text="Submit" />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#FFF",
    flex:1
  },

  mainContainer: {
  },

  flatlistContainer: {
    borderColor: "black",
    borderWidth: 2
  },

  mainText: {
    fontSize: 15,
    margin: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin:10
  },

  mistakeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin:2
  },

  mistakeText: {
    color: "#44403b",
    fontSize: 15,
  },
});
