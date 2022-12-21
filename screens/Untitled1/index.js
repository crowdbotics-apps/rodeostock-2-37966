import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    <FlatList renderItem={() => <View style={styles.wcBXUHrS}></View>} ItemSeparatorComponent={() => <View style={styles.ilafNdwS} />} data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={item => item.toString()} style={styles.AmOFpkMz}></FlatList></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  AmOFpkMz: {
    position: "absolute",
    width: 100,
    height: 150,
    color: "#ec0c0c",
    backgroundColor: "#8c5555"
  },
  wcBXUHrS: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ilafNdwS: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;