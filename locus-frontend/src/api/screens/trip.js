
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import tripStyles from "../styles/tripStyles";
import { getTripLayoutMetrics } from "../utils/tripLayout";
import TripCalendar from "../components/calendar";
import Timeline from "../components/timeline";
import { Ionicons } from "@expo/vector-icons";

const styles = tripStyles;

export default function TripPopup({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  const {
    scale,
    modalHorizontalPadding,
    modalWidth,
    modalHeight,
    modalRadius,
    modalTopPadding,
    modalSidePadding,
    closeSize,
    closeFontSize,
    closeRight,
    closeTop,
    panelMinHeight,
    panelRadius,
    panelPaddingVertical,
    panelMarginTop,
    buttonsGap,
    buttonsMarginTop,
    actionButtonHeight,
    actionButtonRadius,
    iconSize,
    actionTextSize,
    assistantMarginTop,
    assistantMinHeight,
    assistantRadius,
    assistantPadding,
    messagePadding,
    messagePaddingRight,
    messageRadius,
    messageFontSize,
    messageLineHeight,
    mascotWidth,
    mascotHeight,
    mascotRight,
    mascotBottom,
    inputInset,
    inputBottom,
    inputHeight,
    inputRadius,
    inputPaddingHorizontal,
    inputFontSize,
    sendButtonSize,
    calendarDayWidth,
    calendarViewportWidth,
  } = getTripLayoutMetrics(width, height);

  const tripDays = [
    { id: 1, date: "14", weekday: "M" },
    { id: 2, date: "15", weekday: "T" },
    { id: 3, date: "16", weekday: "W" },
    { id: 4, date: "17", weekday: "T" },
    { id: 5, date: "18", weekday: "F" },
    { id: 6, date: "19", weekday: "S" },
    { id: 7, date: "20", weekday: "S" },
  ];

  const [selectedDay, setSelectedDay] = useState(1);
  const [message, setMessage] = useState("");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.overlay,
          {
            paddingHorizontal: modalHorizontalPadding,
          },
        ]}
      >
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
          style={[
            styles.modal,
            {
              width: modalWidth,
              height: modalHeight,
              borderRadius: modalRadius,
              paddingTop: modalTopPadding,
              paddingHorizontal: modalSidePadding,
            },
          ]}
        >

          {/* CLOSE */}
          <Pressable
            style={[
              styles.close,
              {
                width: closeSize,
                height: closeSize,
                right: closeRight,
                top: closeTop,
              },
            ]}
            onPress={onClose}
          >
            <Text
              style={[
                styles.closeText,
                { fontSize: closeFontSize },
              ]}
            >
              ×
            </Text>
          </Pressable>

          <View style={styles.content}>
            {/* TRIP CALENDAR */}
            <TripCalendar
              days={tripDays}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              dayWidth={calendarDayWidth}
              viewportWidth={calendarViewportWidth}
              scale={scale}
            />

            {/* PINK TIMELINE PANEL */}
            <View
              style={[
                styles.pinkPanel,
                {
                  minHeight: panelMinHeight,
                  borderRadius: panelRadius,
                  paddingVertical: panelPaddingVertical,
                  marginTop: panelMarginTop,
                },
              ]}
            >

              <Timeline
                rowHeight={20 * scale}
                rowGap={20 * scale}
                pointCount={5}
              />

            </View>


            {/* WEATHER AND TIPS */}
            <View
              style={[
                styles.buttonsRow,
                {
                  gap: buttonsGap,
                  marginTop: buttonsMarginTop,
                },
              ]}
            >

              <Pressable
                style={[
                  styles.actionButton,
                  {
                    height: actionButtonHeight,
                    borderRadius: actionButtonRadius,
                  },
                ]}
              >
                <Ionicons
                  name="sunny-outline"
                  size={iconSize}
                  color="#F3DCC3"
                />
                <Text style={[styles.actionText, { fontSize: actionTextSize }]}>
                  Weather
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.actionButton,
                  {
                    height: actionButtonHeight,
                    borderRadius: actionButtonRadius,
                  },
                ]}
              >
                <Ionicons
                  name="bulb-outline"
                  size={iconSize}
                  color="#F3DCC3"
                />
                <Text style={[styles.actionText, { fontSize: actionTextSize }]}>
                  Tips
                </Text>
              </Pressable>

            </View>

            {/* AI ASSISTANT */}
            <View
              style={[
                styles.assistantBox,
                {
                  marginTop: assistantMarginTop,
                  minHeight: assistantMinHeight,
                  borderRadius: assistantRadius,
                  padding: assistantPadding,
                },
              ]}
            >

              {/* MESSAGE */}
              <View
                style={[
                  styles.message,
                  {
                    padding: messagePadding,
                    paddingRight: messagePaddingRight,
                    borderRadius: messageRadius,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    {
                      fontSize: messageFontSize,
                      lineHeight: messageLineHeight,
                    },
                  ]}
                >
                  Lost? Hungry? Need directions? Looking
                  for a restroom? Wondering where your
                  gate is or how to get there? I can also
                  help you personalize your trip. Want to
                  upgrade to a luxury hotel, find a cheaper
                  option, discover the best restaurants,
                  add attractions, or change your itinerary?
                  Just ask!
                </Text>
              </View>
              {/* MASCOT IMAGE */}
              <View
                style={[
                  styles.mascot,
                  {
                    right: mascotRight,
                    bottom: mascotBottom,
                  },
                ]}
              >
                <Image
                  source={require("../components/photos/botche with suitcase.png")}
                  style={[
                    styles.mascotImage,
                    {
                      width: mascotWidth,
                      height: mascotHeight,
                    },
                  ]}
                  resizeMode="contain"
                />
              </View>

              {/* INPUT */}
              <View
                style={[
                  styles.inputContainer,
                  {
                    left: inputInset,
                    right: inputInset,
                    bottom: inputBottom,
                    height: inputHeight,
                    borderRadius: inputRadius,
                    paddingHorizontal: inputPaddingHorizontal,
                  },
                ]}
              >

                <TextInput
                  placeholder="Ask me anything"
                  placeholderTextColor="#D9B9AC"
                  style={[styles.input, { fontSize: inputFontSize }]}
                  value={message}
                  onChangeText={setMessage}
                />

                <Pressable
                  onPress={() => {
                    if (message.trim()) {
                      console.log("Message:", message);
                      setMessage("");
                    }
                  }}
                >
                  <Text
                    style={[
                      styles.sendButton,
                      { fontSize: sendButtonSize },
                    ]}
                  >
                    ➤
                  </Text>
                </Pressable>

              </View>

            </View>

          </View>

        </LinearGradient>
      </View>
    </Modal>
  );
}
