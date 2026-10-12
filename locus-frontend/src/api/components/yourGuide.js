

import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function YourGuide({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

const scrollRef = useRef(null);
const [scrollMetrics, setScrollMetrics] = useState({
  contentHeight: 1,
  viewportHeight: 1,
  offsetY: 0,
});

const thumbHeight = Math.max(
  28,
  (scrollMetrics.viewportHeight /
    scrollMetrics.contentHeight) *
    scrollMetrics.viewportHeight
);

const maxThumbTravel = Math.max(
  0,
  scrollMetrics.viewportHeight - thumbHeight
);

const thumbTop =
  scrollMetrics.contentHeight > scrollMetrics.viewportHeight
    ? (scrollMetrics.offsetY /
        (scrollMetrics.contentHeight -
          scrollMetrics.viewportHeight)) *
      maxThumbTravel
    : 0;


  const small = width < 380;
  const panelWidth = Math.min(width - 32, 430);
  const panelHeight = Math.min(height * 0.86, 760);

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
          style={StyleSheet.absoluteFill}
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
              borderRadius: small ? 28 : 34,
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.22)",
  },

  panel: {
    overflow: "hidden",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 18,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 7,
    marginBottom: 18,
  },

  backText: {
    color: "#CF928A",
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    color: "#F5F1D1",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 2,
  },

  titleLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#F5F1D1",
    marginBottom: 17,
  },

 

  scrollWrapper: {
    flex: 1,
    width: "100%",
    position: "relative",
  },

  panelScroll: {
    flex: 1,
    width: "100%",
  },

  panelScrollContent: {
    paddingBottom: 12,
    paddingRight: 10,
  },

  scrollTrack: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderRadius: 10,
    backgroundColor: "rgba(245, 241, 209, 0.12)",
  },

  scrollThumb: {
    width: 3,
    borderRadius: 10,
    backgroundColor: "#CF928A",
  },


sectionTitle: {
  color: "#F5F1D1",
  fontSize: 12,
  fontWeight: "700",
  fontStyle: "italic",
  marginBottom: 13,
  marginTop: 1,
},

paragraph: {
  color: "#F5F1D1",
  fontSize: 12,
  lineHeight: 15,
  fontStyle: "italic",
  marginBottom: 17,
},



});
