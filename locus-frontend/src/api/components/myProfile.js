
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  useWindowDimensions,
  Modal,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import YourGuide from "../components/yourGuide";
import myProfileStyles from "../styles/myProfileStyles";
import { getMyProfileLayoutMetrics } from "../utils/myProfileLayout";

const styles = myProfileStyles;

export default function MyProfile({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [yourGuideVisible, setYourGuideVisible] = useState(false);
  const {
    horizontalPadding,
    contentWidth,
    topMargin,
    bottomMargin,
    panelHeight,
    scale,
    panelPadding,
    titleSize,
    rowTextSize,
    sectionTextSize,
    rowHeight,
    sectionGap,
    panelRadius,
  } = getMyProfileLayoutMetrics(width, height);

  const openItem = (label) => {
    console.log(`${label} pressed`);
  };

  // SECTION TITLE
  const SectionTitle = ({ children }) => (
    <View
      style={[
        styles.sectionTitleRow,
        {
          marginBottom: 5 * scale,
          minHeight: 17 * scale,
          gap: 7 * scale,
        },
      ]}
    >
      <View style={styles.sectionLine} />

      <Text
        style={[
          styles.sectionTitle,
          { fontSize: sectionTextSize },
        ]}
      >
        {children}
      </Text>

      <View style={styles.sectionLine} />
    </View>
  );

  // SETTINGS ROW
  const SettingsRow = ({
    label,
    value,
    onPress,
    showChevron = false,
    showSwitch = false,
    switchValue = false,
    onSwitchChange,
    isLast = false,
  }) => (
    <TouchableOpacity
      activeOpacity={showSwitch ? 1 : 0.72}
      onPress={showSwitch ? undefined : onPress}
      style={[
        styles.settingsRow,
        {
          minHeight: rowHeight,
          paddingHorizontal: 3 * scale,
          paddingVertical: 2 * scale,
        },
        isLast && styles.lastRow,
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          styles.rowLabel,
          { fontSize: rowTextSize },
          label === "Change password" && styles.strongLabel,
        ]}
      >
        {label}
      </Text>

      <View style={styles.rowRight}>
        {value ? (
          <Text
            numberOfLines={1}
            style={[
              styles.rowValue,
              { fontSize: sectionTextSize + 2 * scale },
            ]}
          >
            {value}
          </Text>
        ) : null}

        

{showSwitch ? (
  <Pressable
    onPress={() => onSwitchChange(!switchValue)}
    accessibilityRole="switch"
    accessibilityState={{ checked: switchValue }}
    style={[
      styles.switchTrack,
      {
        width: 42 * scale,
        height: 22 * scale,
        borderRadius: 20 * scale,
        backgroundColor: switchValue ? "#CF928A" : "#827B70",
        padding: 3 * scale,
      },
    ]}
  >
    <View
      style={[
        styles.switchThumb,
        {
          width: 18 * scale,
          height: 16 * scale,
          borderRadius: 12 * scale,
          alignSelf: switchValue ? "flex-end" : "flex-start",
        },
      ]}
    />
  </Pressable>
) : null}



        {showChevron ? (
          <Ionicons
            name="chevron-forward"
            size={20 * scale}
            color="rgba(245,241,209,0.75)"
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalRoot}>
        <View style={styles.overlay} />

        {/* CLOSE WHEN TAPPING OUTSIDE */}
        <Pressable
          style={styles.outsideTap}
          onPress={onClose}
          accessibilityLabel="Close profile"
        />

        <SafeAreaView
          pointerEvents="box-none"
          style={[
            styles.safeArea,
            {
              paddingHorizontal: horizontalPadding,
              paddingTop: topMargin,
              paddingBottom: bottomMargin,
            },
          ]}
        >
          {/* THE PANEL HAS A LIMITED HEIGHT */}
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
              styles.profilePanel,
              {
                width: contentWidth,
                height: panelHeight,
                paddingHorizontal: panelPadding,
                paddingTop: panelPadding * 0.7,
                paddingBottom: panelPadding,
                borderRadius: panelRadius,
              },
            ]}
          >
            {/* SCROLL INSIDE THE PANEL */}
            <ScrollView
              style={styles.panelScroll}
              contentContainerStyle={styles.panelScrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
              nestedScrollEnabled
              keyboardShouldPersistTaps="handled"
            >
              {/* HEADER */}
              <View
                style={[
                  styles.header,
                  {
                    minHeight: 38 * scale,
                    marginBottom: 10 * scale,
                    gap: 7 * scale,
                  },
                ]}
              >
                <View style={styles.headerLine} />

                <Text
                  style={[
                    styles.headerTitle,
                    { fontSize: titleSize },
                  ]}
                >
                  My profile
                </Text>

                <View style={styles.headerLine} />

                <TouchableOpacity
                  accessibilityLabel="Close profile"
                  onPress={onClose}
                  style={styles.closeButton}
                  hitSlop={12}
                >
                  <Ionicons
                    name="close"
                    size={22 * scale}
                    color="#CF928A"
                  />
                </TouchableOpacity>
              </View>

              {/* PROFILE CARD */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => openItem("Edit profile")}
                style={[
                  styles.identityCard,
                  {
                    minHeight: 58 * scale,
                    paddingHorizontal: 9 * scale,
                    paddingVertical: 5 * scale,
                    borderRadius: 13 * scale,
                  },
                ]}
              >
                <View
                  style={[
                    styles.avatar,
                    {
                      width: 38 * scale,
                      height: 38 * scale,
                      borderRadius: 20 * scale,
                      marginRight: 9 * scale,
                    },
                  ]}
                >
                  <Ionicons
                    name="person-outline"
                    size={25 * scale}
                    color="#F5F1D1"
                  />
                </View>

                <View style={styles.identityText}>
                  <Text
                    style={[
                      styles.profileName,
                      { fontSize: rowTextSize + 3 * scale },
                    ]}
                  >
                    Nikol
                  </Text>

                  <Text
                    numberOfLines={1}
                    style={[
                      styles.email,
                      { fontSize: sectionTextSize },
                    ]}
                  >
                    petrova.nikol@gmail.com
                  </Text>
                </View>

                <Ionicons
                  name="create-outline"
                  size={19 * scale}
                  color="#CF928A"
                />
              </TouchableOpacity>

              {/* ACCOUNT */}
              <View style={{ marginTop: sectionGap }}>
                <SectionTitle>Account</SectionTitle>

                <SettingsRow
                  label="Change password"
                  showChevron
                  onPress={() => openItem("Change password")}
                />

                <SettingsRow
                  label="Region"
                  value="Bulgaria"
                  onPress={() => openItem("Region")}
                />

                <SettingsRow
                  label="Language"
                  value="ENG"
                  onPress={() => openItem("Language")}
                />

                <SettingsRow
                  label="Enable location"
                  showSwitch
                  switchValue={locationEnabled}
                  onSwitchChange={setLocationEnabled}
                />

                <SettingsRow
                  label="Enable notifications"
                  showSwitch
                  switchValue={notificationsEnabled}
                  onSwitchChange={setNotificationsEnabled}
                />

                <SettingsRow
                  label="Currencies"
                  value="EUR"
                  isLast
                  onPress={() => openItem("Currencies")}
                />
              </View>

              {/* PREFERENCES */}
              <View
                style={[
                  styles.section,
                  { marginTop: sectionGap },
                ]}
              >
                <SectionTitle>Preferences</SectionTitle>

                <SettingsRow
                  label="About you"
                  showChevron
                  onPress={() => openItem("About you")}
                />

                <SettingsRow
                  label="Your community"
                  showChevron
                  onPress={() => openItem("Your community")}
                />

                <SettingsRow
                  label="Your trips"
                  showChevron
                  onPress={() => openItem("Your trips")}
                />

                <SettingsRow
                  label="Gallery"
                  showChevron
                  isLast
                  onPress={() => openItem("Gallery")}
                />
              </View>

              {/* SUPPORT */}
              <View
                style={[
                  styles.section,
                  { marginTop: sectionGap },
                ]}
              >
                <SectionTitle>Support</SectionTitle>

                
                <SettingsRow
                  label="Your guide"
                  showChevron
                  onPress={() => setYourGuideVisible(true)}
                />


                <SettingsRow
                  label="Contact us"
                  showChevron
                  isLast
                  onPress={() => openItem("Contact us")}
                />
              </View>

              <YourGuide
                      visible={yourGuideVisible}
                      onClose={() => setYourGuideVisible(false)}
                    />
            </ScrollView>
          </LinearGradient>
        </SafeAreaView>
      </View>
    </Modal>
  );
}
