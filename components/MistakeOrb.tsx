import {View, StyleSheet} from 'react-native'

const MistakeOrb = () => {
  return (
    <View style={styles.orb}></View>
  )
}

export default MistakeOrb

const styles = StyleSheet.create({
    orb: {
        width: 8,
        height: 8,
        backgroundColor: "#44403b",
        borderRadius: 100,
        marginHorizontal: 5
    }
});