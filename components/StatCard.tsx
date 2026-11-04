import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  colour: string;
  title: string;
  image: ImageSourcePropType;
  puzzlesPlayed: number;
  winRate: number;
  streak: number;
  maxStreak: number;
};

const StatCard = ({
  colour,
  title,
  image,
  puzzlesPlayed,
  winRate,
  streak,
  maxStreak,
}: Props) => {
  return (
    <Pressable>
      <View style={[styles.statcard, { backgroundColor: colour }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Image source={image} style={styles.cardImage} />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNums}>{puzzlesPlayed}</Text>
            <Text style={styles.statDesc}>Puzzles Played</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNums}>{winRate}%</Text>
            <Text style={styles.statDesc}>Win Rate</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNums}>{streak}</Text>
            <Text style={styles.statDesc}>Current Streak</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNums}>{maxStreak}</Text>
            <Text style={styles.statDesc}>Max Streak</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default StatCard;

const styles = StyleSheet.create({
  statcard: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#484848",
    //IOS shadow
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Android shadow
    elevation: 5,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  cardImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 10
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 600,
    padding: 10,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    gap: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  statItem: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    paddingBottom: 20,
  },

  statNums: {
    fontSize: 18,
    color: "#484848",
    textAlign: "center",
  },

  statDesc: {
    fontSize: 12,
    color: "#484848",
    textAlign: "center",
  },
});
