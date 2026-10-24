import React from "react";
import { View } from "react-native";
import timelineStyles from "../styles/timelineStyles";
import { getTimelineLayoutMetrics } from "../utils/timelineLayout";

const styles = timelineStyles;

export default function Timeline({
  currentStep = 1,
  rowHeight = 44,
  rowGap = 45,
}) {
  const { passed, totalHeight } = getTimelineLayoutMetrics(
    currentStep,
    rowHeight,
    rowGap
  );

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
