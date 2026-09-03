import React from "react";
import { View, StyleSheet } from "react-native";

export default function Timeline({
  currentStep = 1,
  rowHeight = 44,
  rowGap = 45,
}) {
  // ==================================================
  // PASSED DASHES
  // ==================================================

  const passed =
    currentStep === 2
      ? 3
      : currentStep === 3
      ? 6
      : 0;

  // ==================================================
  // TOTAL HEIGHT
  // ==================================================

  const totalHeight =
    rowHeight * 3 +
    rowGap * 2;

  // ==================================================
  // RENDER
  // ==================================================

  return (
    <View
      style={[
        styles.container,
        {
          height: totalHeight,
        },
      ]}
    >

      {/* ==================================================
          LINE
      ================================================== */}

      <View
        pointerEvents="none"
        style={[
          styles.line,
          {
            top: rowHeight / 2,

            height:
              rowHeight * 2 +
              rowGap * 2,
          },
        ]}
      >
        {Array.from({ length: 6 }).map(
          (_, index) => (
            <View
              key={index}
              style={[
                styles.dash,
                {
                  opacity:
                    index < passed
                      ? 1
                      : 0.35,
                },
              ]}
            />
          )
        )}
      </View>

      {/* ==================================================
          POINTS
      ================================================== */}

      {[0, 1, 2].map((index) => (
        <View
          key={index}
          style={[
            styles.row,
            {
              height: rowHeight,

              marginBottom:
                index < 2
                  ? rowGap
                  : 0,
            },
          ]}
        >
          <View style={styles.pointContainer}>

            {currentStep === index + 1 ? (
              <ActiveCircle />
            ) : (
              <InactiveCircle />
            )}

          </View>
        </View>
      ))}

    </View>
  );
}

// ==================================================
// ACTIVE CIRCLE
// ==================================================

function ActiveCircle() {
  return (
    <View style={styles.activeOuter}>
      <View style={styles.activeInner} />
    </View>
  );
}

// ==================================================
// INACTIVE CIRCLE
// ==================================================

function InactiveCircle() {
  return (
    <View style={styles.inactiveCircle} />
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({

  // ==================================================
  // CONTAINER
  // ==================================================

  container: {
    width: 36,

    flexShrink: 0,

    position: "relative",

    alignItems: "center",
  },

  // ==================================================
  // ROW
  // ==================================================

  row: {
    width: 36,

    alignItems: "center",

    justifyContent: "center",
  },

  // ==================================================
  // POINT CONTAINER
  // ==================================================

  pointContainer: {
    width: 36,

    height: 36,

    alignItems: "center",

    justifyContent: "center",

    zIndex: 5,
  },

  // ==================================================
  // LINE
  // ==================================================

  line: {
    position: "absolute",

    left: "50%",

    width: 3,

    marginLeft: -1.5,

    alignItems: "center",

    justifyContent: "space-between",

    zIndex: 1,
  },

  dash: {
    width: 3,

    height: 14,

    borderRadius: 2,

    backgroundColor: "#CF928A",
  },

  // ==================================================
  // INACTIVE
  // ==================================================

  inactiveCircle: {
    width: 9,

    height: 9,

    borderRadius: 5,

    backgroundColor: "#CF928A",

    opacity: 0.8,

    zIndex: 5,
  },

  // ==================================================
  // ACTIVE
  // ==================================================

  activeOuter: {
    width: 23,

    height: 23,

    borderRadius: 20,

    borderWidth: 2,

    borderColor: "#CF928A",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "transparent",

    zIndex: 5,
  },

  activeInner: {
    width: 13,

    height: 13,

    borderRadius: 12,

    backgroundColor: "#CF928A",
  },
});