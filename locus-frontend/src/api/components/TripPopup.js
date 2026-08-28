
import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AddTripCard from "./addTripCard";
import TripCard from "./TripCard";

export default function TripPopup({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>

        <LinearGradient
          colors={[
            "#405D38",
            "#806959",
            "#9C6E68",
            "#996C66",
          ]}
          locations={[0, 0.54, 0.67, 0.92]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.modal}
        >

          {/* Close */}
          <Pressable
            style={styles.close}
            onPress={onClose}
          >
            <Text style={styles.closeText}>×</Text>
          </Pressable>

          {/* Title */}
          <Text style={styles.title}>
            Select current trip
          </Text>

          <View style={styles.line} />
          <Text style={styles.empty}> No trips founded </Text>

          {/* Cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cards}
            decelerationRate="fast"
          >
            <View style={styles.card}>
              <AddTripCard />
            </View>

            <View style={styles.card}>
              <TripCard />
            </View>

            <View style={styles.card}>
              <TripCard />
            </View>

            <View style={styles.card}>
              <TripCard />
            </View>
          </ScrollView>

        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  modal: {
    width: "100%",
    maxWidth: 400,
    height: 430,
    borderRadius: 32,
    paddingTop: 50,
    paddingHorizontal: 18,
    position: "relative",
    overflow: "hidden",
  },

  close: {
    position: "absolute",
    right: 17,
    top: 10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  closeText: {
    color: "#e99a9a",
    fontSize: 28,
    fontWeight: "300",
  },

  title: {
    color: "#e09b9b",
    fontSize: 32,
    fontWeight: "600",
  },

  line: {
    height: 1,
    backgroundColor: "#e0a0a0",
    marginTop: 8,
  },

  cards: {
    paddingTop: 5,
    gap: 25,
  },
  
  empty: { color: "#d0c9b9", 
    fontSize: 16, 
    fontStyle: "italic", 
    marginTop: 11, },

});

