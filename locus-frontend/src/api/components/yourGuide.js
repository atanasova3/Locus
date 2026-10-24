

import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import yourGuideStyles from "../styles/yourGuideStyles";
import {
  getGuideScrollMetrics,
  getYourGuideLayoutMetrics,
} from "../utils/yourGuideLayout";

const styles = yourGuideStyles;

export default function YourGuide({ visible, onClose }) {
  const { width, height } = useWindowDimensions();
  const scrollRef = useRef(null);
  const [scrollMetrics, setScrollMetrics] = useState({
    contentHeight: 1,
    viewportHeight: 1,
    offsetY: 0,
  });
  const { thumbHeight, thumbTop } = getGuideScrollMetrics(scrollMetrics);
  const { panelWidth, panelHeight, panelRadius } =
    getYourGuideLayoutMetrics(width, height);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.root}>
        {/* Blurred background */}
        <BlurView
          intensity={45}
          tint="dark"
          style={styles.backgroundBlur}
        />

        {/* Dark overlay */}
        <Pressable
          style={styles.overlay}
          onPress={onClose}
        />

        {/* Main popup */}
        <LinearGradient
          colors={[
            "#405D38",
            "#536044",
            "#806959",
            "#996C66",
          ]}
          locations={[0, 0.35, 0.68, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            styles.panel,
            {
              width: panelWidth,
              height: panelHeight,
              borderRadius: panelRadius,
            },
          ]}
        >
          {/* Back button */}
          <Pressable
            onPress={onClose}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color="#CF928A"
            />
            <Text style={styles.backText}>
              Back to my profile
            </Text>
          </Pressable>

          {/* Title */}
          <Text style={styles.title}>
            Your guide
          </Text>

          <View style={styles.titleLine} />

          {/* Scrollable guide */}
         

<View style={styles.scrollWrapper}>
  <ScrollView
    ref={scrollRef}
    style={styles.panelScroll}
    contentContainerStyle={styles.panelScrollContent}
    showsVerticalScrollIndicator={false}
    bounces={false}
    nestedScrollEnabled
    onContentSizeChange={(_, contentHeight) =>
      setScrollMetrics((prev) => ({
        ...prev,
        contentHeight,
      }))
    }
    onLayout={(event) =>
      setScrollMetrics((prev) => ({
        ...prev,
        viewportHeight: event.nativeEvent.layout.height,
      }))
    }
    onScroll={(event) =>
      setScrollMetrics((prev) => ({
        ...prev,
        offsetY: event.nativeEvent.contentOffset.y,
      }))
    }
    scrollEventThrottle={16}
  >
    <Text style={styles.sectionTitle}>Overview</Text>
  <Text style={styles.paragraph}>
    Locus is a mobile application with a nature-inspired
    interface designed to provide a simple and intuitive
    user experience. The app allows users to create an
    account, log in securely, and access its core features
    through a clean and minimal design.
  </Text>

  <Text style={styles.sectionTitle}>Getting Started</Text>
  <Text style={styles.paragraph}>
    When you open the app, you will see the welcome screen.
    From here, you can proceed to log in or create a new
    account.
  </Text>

  <Text style={styles.sectionTitle}>Login</Text>
  <Text style={styles.paragraph}>
    To access your account, enter your email address and
    password in the provided fields. After entering your
    credentials, tap the login button to continue. If your
    details are correct, you will be granted access to the
    app.
  </Text>

  <Text style={styles.paragraph}>
    You also have the option to sign in using your Google
    account. Select the Google login option and follow the
    on-screen instructions.
  </Text>

  <Text style={styles.sectionTitle}>Registration</Text>
  <Text style={styles.paragraph}>
    To create a new account, navigate to the registration
    screen. Enter your email address, create a password,
    and confirm your password. Once all fields are completed,
    tap the register button.
  </Text>

  <Text style={styles.paragraph}>
    Make sure your password is secure and matches in both
    fields before submitting.
  </Text>

  <Text style={styles.sectionTitle}>Navigation</Text>
  <Text style={styles.paragraph}>
    After logging in, you can navigate through the app
    using the available buttons and interface elements.
    The design is structured to be simple and easy to use,
    allowing quick access to different sections.
  </Text>

  <Text style={styles.sectionTitle}>Features</Text>
  <Text style={styles.paragraph}>
    The app includes a secure authentication system with
    login and registration functionality. It supports both
    manual login and Google sign-in. The interface is
    designed with a nature theme, providing a visually
    consistent and calming experience.
  </Text>

  <Text style={styles.sectionTitle}>Troubleshooting</Text>
  <Text style={styles.paragraph}>
    If you are unable to log in, verify that your email and
    password are entered correctly. If the issue persists,
    try resetting your password if that option is available.
  </Text>

  <Text style={styles.paragraph}>
    If Google login does not work, check your internet
    connection and ensure your Google account is properly
    configured on your device.
  </Text>

  <Text style={styles.sectionTitle}>Best Practices</Text>
  <Text style={styles.paragraph}>
    Use a strong and unique password to keep your account
    secure. Keep the app updated to ensure the best
    performance and access to new features.
  </Text>
  </ScrollView>

  {scrollMetrics.contentHeight > scrollMetrics.viewportHeight && (
    <View style={styles.scrollTrack} pointerEvents="none">
      <View
        style={[
          styles.scrollThumb,
          {
            height: thumbHeight,
            transform: [{ translateY: thumbTop }],
          },
        ]}
      />
    </View>
  )}
</View>


        </LinearGradient>
      </View>
    </Modal>
  );
}
