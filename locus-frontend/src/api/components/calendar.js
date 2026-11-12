
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function TripCalendar({
  days = [],
  selectedDay = 1,
  onSelectDay = () => {},
  dayWidth = 82,
  viewportWidth,
  scale = 1,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const index = days.findIndex((day) => day.id === selectedDay);
    const contentWidth = days.length * dayWidth;

    if (index >= 0 && viewportWidth) {
      const centeredOffset = index * dayWidth - (viewportWidth - dayWidth) / 2;
      const maxOffset = Math.max(0, contentWidth - viewportWidth);

      scrollRef.current?.scrollTo({
        x: Math.min(Math.max(0, centeredOffset), maxOffset),
        animated: true,
      });
    }
  }, [selectedDay, days.length, dayWidth, viewportWidth]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { width: dayWidth * days.length },
        ]}
      >
        <View style={[styles.daysRow, { width: dayWidth * days.length }]}>

          {/* CONNECTING LINE */}

          <View
            pointerEvents="none"
            style={[
              styles.connectorLine,
              {
                left: dayWidth / 2,
                right: dayWidth / 2,
                top: 18 * scale,
              },
            ]}
          >
            {Array.from({ length: days.length * 5 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dash,
                  {
                    width: 5 * scale,
                    height: 1.5 * scale,
                  },
                ]}
              />
            ))}
          </View>
          {days.map((day) => {
            const active = selectedDay === day.id;

            return (
              <TouchableOpacity
                key={day.id}
                style={[styles.dayItem, { width: dayWidth }]}
                onPress={() => onSelectDay(day.id)}
                activeOpacity={0.8}
              >

                {/* DATE CIRCLE */}

                <View
                  style={[
                    styles.dateCircle,
                    {
                      width: 36 * scale,
                      height: 36 * scale,
                    },
                    active && {
                      ...styles.activeDateCircle,
                      width: 36 * scale,
                      height: 36 * scale,
                      borderRadius: 18 * scale,
                      borderWidth: 2 * scale,
                    },
                  ]}
                >
                  {active ? (
                    <View
                      style={[
                        styles.activeInner,
                        {
                          width: 25 * scale,
                          height: 25 * scale,
                          borderRadius: 13 * scale,
                        },
                      ]}
                    />
                  ) : (
                    <View
                      style={[
                        styles.inactiveCircle,
                        {
                          width: 25 * scale,
                          height: 25 * scale,
                          borderRadius: 13 * scale,
                        },
                      ]}
                    />
                  )}

                  <Text
                    style={[
                      styles.dateText,
                      { fontSize: 11 * scale },
                    ]}
                  >
                    {day.date}
                  </Text>
                </View>

                {/* DAY OF WEEK */}

                <Text
                  style={[
                    styles.weekdayText,
                    {
                      fontSize: 9 * scale,
                      marginTop: 6 * scale,
                    },
                  ]}
                >
                  {day.weekday}
                </Text>

                {/* DAY NUMBER */}

                <Text
                  style={[
                    styles.dayTitle,
                    {
                      fontSize: Math.min(20 * scale, dayWidth * 0.4),
                      marginTop: 12 * scale,
                    },
                    active && styles.activeDayTitle,
                  ]}
                >
                  Day {day.id}
                </Text>

                {/* ACTIVE UNDERLINE */}

                <View
                  style={[
                    styles.activeUnderline,
                    {
                      width: 23 * scale,
                      height: 4 * scale,
                      borderRadius: 5 * scale,
                      marginTop: 7 * scale,
                    },
                    !active && styles.hiddenUnderline,
                  ]}
                />

              </TouchableOpacity>
            );
          })}

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  scrollContent: {
    flexGrow: 1,
  },

  daysRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
  },

  connectorLine: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dash: {
    borderRadius: 2,
    backgroundColor: "rgba(230,166,151,0.9)",
  },

  dayItem: {
    alignItems: "center",
    zIndex: 1,
    paddingTop: 0,
  },

  dateCircle: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },

  inactiveCircle: {
    backgroundColor: "#CF928A",
    opacity: 0.9,
  },

  activeDateCircle: {
    borderColor: "#CF928A",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  activeInner: {
    backgroundColor: "#CF928A",
  },

  dateText: {
    position: "absolute",
    color: "#405D38",
    fontWeight: "700",
    zIndex: 10,
  },

  weekdayText: {
    color: "#d9c6a9",
    fontWeight: "500",
  },

  dayTitle: {
    color: "rgba(241,224,195,0.58)",
    fontStyle: "italic",
  },

  activeDayTitle: {
    color: "#F5F1D1",
  },

  activeUnderline: {
    backgroundColor: "#F5F1D1",
  },

  hiddenUnderline: {
    opacity: 0,
  },
});
