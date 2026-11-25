
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Animated,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/sideMenuStyles";
import { getSideMenuLayoutMetrics } from "../utils/sideMenuLayout";

const MENU_ITEMS = [
  {
    title: "About you",
    icon: "person-circle-outline",
    key: "AboutYou",
  },
  {
    title: "Your community",
    icon: "people",
    key: "Community",
  },
  {
    title: "Top rated places",
    icon: "star",
    key: "TopRated",
  },
  {
    title: "Low rated places",
    icon: "star-outline",
    key: "LowRated",
  },
  {
    title: "Trips history",
    icon: "calendar-outline",
    key: "TripsHistory",
  },
  {
    title: "Chats history",
    icon: "time-outline",
    key: "ChatsHistory",
  },
  {
    title: "Tickets",
    icon: "ticket-outline",
    key: "Tickets",
  },
];

export default function SideMenu({
  visible,
  onClose,
  onItemPress,
  onLogout,
}) {
  const { width, height } = useWindowDimensions();
  const {
    panelWidth,
    panelHeight,
    panelInset,
    gradientPaddingHorizontal,
    gradientPaddingTop,
    gradientPaddingBottom,
    menuItemHeight,
    itemsHeight,
    itemTextSize,
    iconSize,
    logoutHeight,
    logoutTextSize,
    logoutBottom,
    logoutHorizontal,
  } = getSideMenuLayoutMetrics(width, height);

  const translateX = useRef(
    new Animated.Value(panelWidth + 40)
  ).current;

  const closeMenu = () => {
    Animated.timing(translateX, {
      toValue: panelWidth + 40,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onClose?.();
    });
  };

  useEffect(() => {
    if (visible) {
      translateX.setValue(panelWidth + 40);

      Animated.spring(translateX, {
        toValue: 0,
        tension: 65,
        friction: 12,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, panelWidth, translateX]);

  const handleItemPress = (key) => {
  closeMenu();

  if (key === "AboutYou") {
    
  }

  onItemPress?.(key);
};

   const [myProfileVisible, setmyProfileVisible] = useState(false);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={closeMenu}
    >
      <View style={styles.overlay}>

        {/* BLURRED BACKGROUND */}
        <BlurView
          intensity={35}
          tint="dark"
          style={styles.blur}
        />

        <Pressable
          style={styles.backdrop}
          onPress={closeMenu}
        />

        {/* MENU PANEL */}
        <Animated.View
          style={[
            styles.panel,
            {
              width: panelWidth,
              height: panelHeight,
              top: panelInset,
              right: panelInset,
              transform: [{ translateX }],
            },
          ]}
        >
          <LinearGradient
            colors={[
              "#405D38",
              "#69674E",
              "#806959",
              "#9C6E68",
            ]}
            locations={[0, 0.38, 0.68, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={[
              styles.gradient,
              {
                paddingHorizontal: gradientPaddingHorizontal,
                paddingTop: gradientPaddingTop,
                paddingBottom: gradientPaddingBottom,
              },
            ]}
          >

            {/* MENU OPTIONS */}
            <ScrollView
              style={[
                styles.itemsContainer,
                { height: itemsHeight },
              ]}
              contentContainerStyle={styles.itemsContent}
              showsVerticalScrollIndicator={false}
            >
              {MENU_ITEMS.map((item) => (
                <Pressable
                  key={item.key}
                  style={[
                    styles.menuItem,
                    { minHeight: menuItemHeight },
                  ]}
                  onPress={() => handleItemPress(item.key)}
                >
                  <Text
                    style={[
                      styles.itemText,
                      { fontSize: itemTextSize },
                    ]}
                  >
                    {item.title}
                  </Text>

                  <Ionicons
                    name={item.icon}
                    size={iconSize}
                    color="#F3F0D5"
                  />
                </Pressable>
              ))}
            </ScrollView>

            {/* LOG OUT */}
            <Pressable
              style={[
                styles.logoutButton,
                {
                  bottom: logoutBottom,
                  left: logoutHorizontal,
                  right: logoutHorizontal,
                  height: logoutHeight,
                },
              ]}
              onPress={() => {
                closeMenu();
                onLogout?.();
              }}
            >
              <Text
                style={[
                  styles.logoutText,
                  { fontSize: logoutTextSize },
                ]}
              >
                Log out
              </Text>

              <Ionicons
                name="log-out-outline"
                size={23}
                color="#F3F0D5"
              />
            </Pressable>
            

          </LinearGradient>
        </Animated.View>
      </View>
    </Modal>
  );
}
