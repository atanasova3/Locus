
import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  useWindowDimensions,
  Animated,
  Easing,
  ScrollView,
  Keyboard,
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
    backButtonTop,
    backButtonLeft,
    backButtonPadding,
    backButtonIconSize,
    timelineCloseTop,
    timelineCloseRight,
    timelineClosePadding,
    chatScrollMarginTop,
    chatScrollMarginBottom,
    chatBubbleRadius,
    chatBubblePadding,
    welcomeBubbleMarginBottom,
    chatBubbleMarginBottom,
    chatTextFontSize,
    chatTextLineHeight,
    quickActionsLeft,
    quickActionsBottom,
    quickActionsGap,
    quickActionRadius,
    quickActionPaddingHorizontal,
    quickActionPaddingVertical,
    quickActionIconSize,
    quickActionTextSize,
    quickActionTextMarginLeft,
    voiceContainerMarginTop,
    voiceContainerMarginBottom,
    voiceOrbWidth,
    voiceOrbHeight,
    voiceWaveBaseWidth,
    voiceWaveWidthStep,
    voiceWaveBaseHeight,
    voiceWaveHeightStep,
    voiceWaveLeftBase,
    voiceWaveSideStep,
    voiceWaveBorderWidth,
    voiceWaveTopRadius,
    voiceWaveBottomRadius,
    microphoneSize,
    microphoneRadius,
    microphoneIconSize,
    speakingTextFontSize,
    speakingTextMarginTop,
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
  const [chatOpen, setChatOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [activeQuickAction, setActiveQuickAction] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [calendarHeight, setCalendarHeight] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [voiceMode, setVoiceMode] = useState(false);

  const assistantHeight = useRef(
    new Animated.Value(assistantMinHeight)
  ).current;

  const timelineHeight = useRef(
    new Animated.Value(panelMinHeight)
  ).current;

  const wave1 = useRef(new Animated.Value(0)).current;
  const wave2 = useRef(new Animated.Value(0)).current;

  // OPEN AI CHAT
  const openChat = () => {
    if (chatOpen || timelineOpen) return;

    setChatOpen(true);

    const expandedHeight = Math.max(
      assistantMinHeight,
      contentHeight - calendarHeight - 12 * scale
    );

    Animated.timing(assistantHeight, {
      toValue: expandedHeight,
      duration: 550,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  // CLOSE AI CHAT
  const closeChat = () => {
    Keyboard.dismiss();
    setVoiceMode(false);

    Animated.timing(assistantHeight, {
      toValue: assistantMinHeight,
      duration: 450,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: false,
    }).start(() => {
      setChatOpen(false);
    });
  };

  // OPEN TIMELINE
  const openTimeline = () => {
    if (timelineOpen || chatOpen) return;

    setTimelineOpen(true);

    const expandedTimelineHeight = Math.max(
      panelMinHeight,
      contentHeight - calendarHeight - panelMarginTop - 12 * scale
    );

    Animated.timing(timelineHeight, {
      toValue: expandedTimelineHeight,
      duration: 550,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  // CLOSE TIMELINE
  const closeTimeline = () => {
    Animated.timing(timelineHeight, {
      toValue: panelMinHeight,
      duration: 450,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: false,
    }).start(() => {
      setTimelineOpen(false);
    });
  };

  // SEND MESSAGE
  const sendMessage = () => {
    if (!message.trim()) return;

    setChatMessages((previous) => [
      ...previous,
      {
        id: Date.now().toString(),
        text: message.trim(),
        sender: "user",
      },
    ]);

    console.log("Message:", message);
    setMessage("");
  };

  // VOICE MODE ANIMATIONS
  useEffect(() => {
    if (!voiceMode) {
      wave1.stopAnimation();
      wave2.stopAnimation();
      wave1.setValue(0);
      wave2.setValue(0);
      return;
    }

    const createPulse = (value, delay) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(value, {
            toValue: 1,
            duration: 850,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: 850,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );

    const animation1 = createPulse(wave1, 0);
    const animation2 = createPulse(wave2, 400);

    animation1.start();
    animation2.start();

    return () => {
      animation1.stop();
      animation2.stop();
    };
  }, [voiceMode]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={
        chatOpen
          ? closeChat
          : timelineOpen
          ? closeTimeline
          : onClose
      }
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
          {/* CLOSE MODAL */}
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

          <View
            style={styles.content}
            onLayout={(event) => {
              setContentHeight(event.nativeEvent.layout.height);
            }}
          >
            {/* CALENDAR - ALWAYS VISIBLE */}
            <View
              onLayout={(event) => {
                setCalendarHeight(event.nativeEvent.layout.height);
              }}
            >
              <TripCalendar
                days={tripDays}
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
                dayWidth={calendarDayWidth}
                viewportWidth={calendarViewportWidth}
                scale={scale}
              />
            </View>

            {/* EXPANDING TIMELINE */}
            {!chatOpen && (
              <Pressable
                onPress={openTimeline}
                style={[
                  styles.timelinePressable,
                  { marginTop: panelMarginTop },
                ]}
              >
                <Animated.View
                  style={[
                    styles.pinkPanel,
                    {
                      height: timelineHeight,
                      minHeight: panelMinHeight,
                      borderRadius: panelRadius,
                      paddingVertical: panelPaddingVertical,
                    },
                  ]}
                >
                  {timelineOpen && (
                    <Pressable
                      onPress={closeTimeline}
                      style={[
                        styles.timelineCloseButton,
                        {
                          top: timelineCloseTop,
                          right: timelineCloseRight,
                          padding: timelineClosePadding,
                        },
                      ]}
                    >
                      <Ionicons
                        name="chevron-down"
                        size={backButtonIconSize}
                        color="#F3DCC3"
                      />
                    </Pressable>
                  )}

                  <Timeline
                    rowHeight={20 * scale}
                    rowGap={20 * scale}
                    pointCount={5}
                  />
                </Animated.View>
              </Pressable>
            )}

            {/* WEATHER AND TIPS */}
            {!chatOpen && !timelineOpen && (
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

                  <Text
                    style={[
                      styles.actionText,
                      { fontSize: actionTextSize },
                    ]}
                  >
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

                  <Text
                    style={[
                      styles.actionText,
                      { fontSize: actionTextSize },
                    ]}
                  >
                    Tips
                  </Text>
                </Pressable>
              </View>
            )}

            {/* EXPANDING LOKI ASSISTANT */}
            {!timelineOpen && (
              <Pressable
                onPress={openChat}
                style={[
                  styles.assistantPressable,
                  {
                    marginTop: chatOpen ? "auto" : assistantMarginTop,
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.assistantBox,
                    {
                      height: assistantHeight,
                      minHeight: assistantMinHeight,
                      borderRadius: assistantRadius,
                      padding: assistantPadding,
                    },
                  ]}
                >
                  {/* COLLAPSED MESSAGE */}
                  {!chatOpen && (
                    <View
                      style={[
                        styles.message,
                        {
                          padding: messagePadding,
                          paddingRight: messagePaddingRight,
                          borderRadius: messageRadius,
                        },
                      ]}
                      pointerEvents="none"
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
                  )}

                  {/* EXPANDED CHAT */}
                  {chatOpen && (
                    <>
                      {/* BACK BUTTON */}
                      <Pressable
                        onPress={() => {
                          if (voiceMode) {
                            setVoiceMode(false);
                          } else {
                            closeChat();
                          }
                        }}
                        style={[
                          styles.backButton,
                          {
                            top: backButtonTop,
                            left: backButtonLeft,
                            padding: backButtonPadding,
                          },
                        ]}
                      >
                        <Ionicons
                          name="chevron-down"
                          size={backButtonIconSize}
                          color="#F5F1D1"
                        />
                      </Pressable>

                      {/* VOICE MODE */}
                      {voiceMode && (
                        <View
                          style={[
                            styles.voiceContainer,
                            {
                              marginTop: voiceContainerMarginTop,
                              marginBottom: voiceContainerMarginBottom,
                            },
                          ]}
                        >
                          <View
                            style={[
                              styles.voiceOrb,
                              {
                                width: voiceOrbWidth,
                                height: voiceOrbHeight,
                              },
                            ]}
                          >
                            {/* LEFT SEMICIRCLE WAVES */}
                            {[0, 1].map((item) => {
                              const wave = item === 0 ? wave1 : wave2;

                              return (
                                <Animated.View
                                  key={`left-${item}`}
                                  style={[
                                    styles.voiceWave,
                                    styles.voiceWaveLeft,
                                    {
                                      width:
                                        voiceWaveBaseWidth +
                                        item * voiceWaveWidthStep,
                                      height:
                                        voiceWaveBaseHeight +
                                        item * voiceWaveHeightStep,
                                      left:
                                        voiceWaveLeftBase +
                                        item * voiceWaveSideStep,
                                      borderLeftWidth: voiceWaveBorderWidth,
                                      borderTopWidth: voiceWaveBorderWidth,
                                      borderBottomWidth:
                                        voiceWaveBorderWidth,
                                      borderTopLeftRadius:
                                        voiceWaveTopRadius,
                                      borderBottomLeftRadius:
                                        voiceWaveBottomRadius,
                                      opacity: wave.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.15, 0.8],
                                      }),
                                      transform: [
                                        {
                                          scale: wave.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.9, 1.08],
                                          }),
                                        },
                                      ],
                                    },
                                  ]}
                                />
                              );
                            })}

                            {/* RIGHT SEMICIRCLE WAVES */}
                            {[0, 1].map((item) => {
                              const wave = item === 0 ? wave1 : wave2;

                              return (
                                <Animated.View
                                  key={`right-${item}`}
                                  style={[
                                    styles.voiceWave,
                                    styles.voiceWaveRight,
                                    {
                                      width:
                                        voiceWaveBaseWidth +
                                        item * voiceWaveWidthStep,
                                      height:
                                        voiceWaveBaseHeight +
                                        item * voiceWaveHeightStep,
                                      right:
                                        voiceWaveLeftBase +
                                        item * voiceWaveSideStep,
                                      borderRightWidth:
                                        voiceWaveBorderWidth,
                                      borderTopWidth: voiceWaveBorderWidth,
                                      borderBottomWidth:
                                        voiceWaveBorderWidth,
                                      borderTopRightRadius:
                                        voiceWaveTopRadius,
                                      borderBottomRightRadius:
                                        voiceWaveBottomRadius,
                                      opacity: wave.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.15, 0.8],
                                      }),
                                      transform: [
                                        {
                                          scale: wave.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.9, 1.08],
                                          }),
                                        },
                                      ],
                                    },
                                  ]}
                                />
                              );
                            })}

                            {/* MICROPHONE CIRCLE */}
                            <View
                              style={[
                                styles.microphoneCircle,
                                {
                                  width: microphoneSize,
                                  height: microphoneSize,
                                  borderRadius: microphoneRadius,
                                },
                              ]}
                            >
                              <Ionicons
                                name="mic"
                                size={microphoneIconSize}
                                color="#F5F1D1"
                              />
                            </View>
                          </View>

                          {/* SPEAKING TEXT */}
                          <Text
                            style={[
                              styles.speakingText,
                              {
                                fontSize: speakingTextFontSize,
                                marginTop: speakingTextMarginTop,
                              },
                            ]}
                          >
                            Speaking with Loki
                          </Text>
                        </View>
                      )}

                      {/* CHAT HISTORY */}
                      {!voiceMode && (
                        <ScrollView
                          style={[
                            styles.chatScroll,
                            {
                              marginTop: chatScrollMarginTop,
                              marginBottom: chatScrollMarginBottom,
                            },
                          ]}
                          showsVerticalScrollIndicator={false}
                          keyboardShouldPersistTaps="handled"
                        >
                          {/* LOKI WELCOME MESSAGE */}
                          <View
                            style={[
                              styles.chatBubble,
                              styles.welcomeChatBubble,
                              {
                                borderRadius: chatBubbleRadius,
                                padding: chatBubblePadding,
                                marginBottom: welcomeBubbleMarginBottom,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.chatText,
                                {
                                  fontSize: chatTextFontSize,
                                  lineHeight: chatTextLineHeight,
                                },
                              ]}
                            >
                              Lost? Hungry? Need directions? Looking
                              for a restroom? Wondering where your
                              gate is or how to get there? I can also
                              help you personalize your trip. Just ask!
                            </Text>
                          </View>

                          {/* USER AND LOKI MESSAGES */}
                          {chatMessages.map((item) => (
                            <View
                              key={item.id}
                              style={[
                                styles.chatBubble,
                                item.sender === "user"
                                  ? styles.userChatBubble
                                  : styles.assistantChatBubble,
                                {
                                  borderRadius: chatBubbleRadius,
                                  padding: chatBubblePadding,
                                  marginBottom: chatBubbleMarginBottom,
                                },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.chatText,
                                  {
                                    fontSize: chatTextFontSize,
                                    lineHeight: chatTextLineHeight,
                                  },
                                ]}
                              >
                                {item.text}
                              </Text>
                            </View>
                          ))}
                        </ScrollView>
                      )}

                      {/* QUICK ACTIONS */}
                      {!voiceMode && (
                        <View
                          style={[
                            styles.quickActions,
                            {
                              left: quickActionsLeft,
                              bottom: quickActionsBottom,
                              gap: quickActionsGap,
                            },
                          ]}
                        >
                          {[
                            {
                              icon: "mic-outline",
                              label: "Speak to me",
                            },
                            {
                              icon: "chatbubble-ellipses",
                              label: "Ask anything",
                            },
                            {
                              icon: "build-outline",
                              label: "Edit your trip",
                            },
                          ].map((item, index) => (
                            <Pressable
                              key={index}
                              onPress={() => {
                                setActiveQuickAction(index);

                                if (index === 0) {
                                  setVoiceMode(true);
                                } else if (index === 1) {
                                  setVoiceMode(false);
                                } else if (index === 2) {
                                  // Edit your trip
                                }
                              }}
                              style={[
                                styles.quickAction,
                                activeQuickAction === index &&
                                  styles.quickActionActive,
                                {
                                  borderRadius: quickActionRadius,
                                  paddingHorizontal:
                                    quickActionPaddingHorizontal,
                                  paddingVertical:
                                    quickActionPaddingVertical,
                                },
                              ]}
                            >
                              <Ionicons
                                name={item.icon}
                                size={quickActionIconSize}
                                color={
                                  activeQuickAction === index
                                    ? "#F5F1D1"
                                    : "#D99A91"
                                }
                              />

                              <Text
                                style={[
                                  styles.quickActionText,
                                  activeQuickAction === index &&
                                    styles.quickActionTextActive,
                                  {
                                    fontSize: quickActionTextSize,
                                    marginLeft:
                                      quickActionTextMarginLeft,
                                  },
                                ]}
                              >
                                {item.label}
                              </Text>
                            </Pressable>
                          ))}
                        </View>
                      )}
                    </>
                  )}

                  {/* LOKI - ALWAYS INSIDE THE SECOND RECTANGLE */}
                  <View
                    style={[
                      styles.mascot,
                      {
                        right: mascotRight,
                        bottom: mascotBottom,
                      },
                    ]}
                    pointerEvents="none"
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

                  {/* INPUT - ALWAYS INSIDE THE SECOND RECTANGLE */}
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
                      placeholderTextColor="#F5F1D1"
                      style={[
                        styles.input,
                        { fontSize: inputFontSize },
                      ]}
                      value={message}
                      onChangeText={setMessage}
                      onFocus={openChat}
                    />

                    <Pressable onPress={sendMessage}>
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
                </Animated.View>
              </Pressable>
            )}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
