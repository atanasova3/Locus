import React from "react";
import { View, StyleSheet } from "react-native";

export default function Timeline({ currentStep = 1 }) {
  return (
    <View style={styles.container}>

      {/* ОБЩА ПУНКТИРНА ЛИНИЯ */}
      <View style={styles.line}>
        {Array.from({ length: 6 }).map((_, index) => {

          // Първите 3 пунктирчета = STEP 1 → STEP 2
          // Последните 3 = STEP 2 → STEP 3
          const passed =
            (currentStep === 2 && index < 3) ||
            (currentStep === 3);

          return (
            <View
              key={index}
              style={[
                styles.dash,
                {
                  opacity: passed ? 1 : 0.35,
                },
              ]}
            />
          );
        })}
      </View>


      {/* STEP 1 */}
      <View style={styles.step1}>
        {currentStep === 1 ? (
          <ActiveCircle />
        ) : (
          <InactiveCircle />
        )}
      </View>


      {/* STEP 2 */}
      <View style={styles.step2}>
        {currentStep === 2 ? (
          <ActiveCircle />
        ) : (
          <InactiveCircle />
        )}
      </View>


      {/* STEP 3 */}
      <View style={styles.step3}>
        {currentStep === 3 ? (
          <ActiveCircle />
        ) : (
          <InactiveCircle />
        )}
      </View>

    </View>
  );
}


// ACTIVE CIRCLE
function ActiveCircle() {
  return (
    <View style={styles.activeOuter}>
      <View style={styles.activeInner} />
    </View>
  );
}


// INACTIVE CIRCLE
function InactiveCircle() {
  return <View style={styles.inactiveCircle} />;
}


// STYLES
const styles = StyleSheet.create({

  container: {
    position: "absolute",

    left: 3,
    top: 110,

    width: 42,
    height: 250,

    alignItems: "center",

    zIndex: 15,
  },


  // ОБЩА ЛИНИЯ
  line: {
    position: "absolute",

    top: 40,
    height: 150,

    width: 3,

    alignItems: "center",
    justifyContent: "space-between",
  },


  // ПУНКТИР
  dash: {
    width: 3,
    height: 14,

    borderRadius: 2,

    backgroundColor: "#d99794",
  },


  // STEP 1
  step1: {
    position: "absolute",

    top: 0,

    width: 42,
    height: 42,

    alignItems: "center",
    justifyContent: "center",
  },


  // STEP 2
  step2: {
    position: "absolute",

    top: 95,

    width: 42,
    height: 42,

    alignItems: "center",
    justifyContent: "center",
  },


  // STEP 3
  step3: {
    position: "absolute",

    top: 190,

    width: 42,
    height: 42,

    alignItems: "center",
    justifyContent: "center",
  },


  // INACTIVE
  inactiveCircle: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: "#d99794",

    opacity: 0.8,
  },


  // ACTIVE
  activeOuter: {
    width: 23,
    height: 23,

    borderRadius: 20,

    borderWidth: 2,

    borderColor: "#d99794",

  

    alignItems: "center",
    justifyContent: "center",
  },


  activeInner: {
    width: 13,
    height: 13,

    borderRadius: 12,

    backgroundColor: "#dc9997",
  },

});