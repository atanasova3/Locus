
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Linking,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { getContactsLayoutMetrics } from '../utils/socialMediaLayout';

export default function Contacts({ visible = true, onBack }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const {
    panelWidth,
    panelHeight,
    panelRadius,
    horizontalPadding,
    verticalPadding,
    backFontSize,
    backIconSize,
    titleSize,
    titleMarginTop,
    dividerMarginTop,
    socialMarginTop,
    socialRowGap,
    socialRowHeight,
    socialListMaxHeight,
    iconColumnWidth,
    iconTextGap,
    iconSize,
    socialTextSize,
  } = getContactsLayoutMetrics(width, height);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <Pressable
        style={styles.backdrop}
        onPress={handleBack}
        accessibilityLabel="Close contacts"
      />

      <LinearGradient
        colors={['#405437', '#75615A', '#986C66']}
        locations={[0, 0.55, 1]}
        style={[
          styles.container,
          {
            width: panelWidth,
            height: panelHeight,
            borderRadius: panelRadius,
            paddingHorizontal: horizontalPadding,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
          },
        ]}
      >

        {/* BACK TO PROFILE */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Ionicons
            name="arrow-back"
            size={backIconSize}
            color="#D9948F"
          />

          <Text
            style={[
              styles.backText,
              { fontSize: backFontSize },
            ]}
          >
            Back to my profile
          </Text>
        </TouchableOpacity>


        {/* TITLE */}
        <Text
          style={[
            styles.title,
            { fontSize: titleSize, marginTop: titleMarginTop },
          ]}
        >
          Contacts
        </Text>


        {/* DIVIDER */}
        <View
          style={[
            styles.divider,
            { marginTop: dividerMarginTop },
          ]}
        />


        {/* SOCIAL MEDIA */}
        <View
          style={[
            styles.socialContainer,
            { marginTop: socialMarginTop },
          ]}
        >
          <ScrollView
            style={[
              styles.socialList,
              { maxHeight: socialListMaxHeight },
            ]}
            contentContainerStyle={[
              styles.socialListContent,
              { gap: socialRowGap },
            ]}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={[
                styles.socialButton,
                { minHeight: socialRowHeight, gap: iconTextGap },
              ]}
              onPress={() => openLink('https://www.instagram.com/')}
              activeOpacity={0.7}
              accessibilityRole="link"
              accessibilityLabel="Instagram"
            >
              <View
                style={[
                  styles.iconColumn,
                  { width: iconColumnWidth, height: socialRowHeight },
                ]}
              >
                <FontAwesome5
                  name="instagram"
                  size={iconSize}
                  color="#F0EBCF"
                />
              </View>
              <Text style={[styles.socialLabel, { fontSize: socialTextSize }]}>
                Instagram
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.socialButton,
                { minHeight: socialRowHeight, gap: iconTextGap },
              ]}
              onPress={() => openLink('https://www.tiktok.com/')}
              activeOpacity={0.7}
              accessibilityRole="link"
              accessibilityLabel="TikTok"
            >
              <View
                style={[
                  styles.iconColumn,
                  { width: iconColumnWidth, height: socialRowHeight },
                ]}
              >
                <FontAwesome5
                  name="tiktok"
                  size={iconSize}
                  color="#F0EBCF"
                />
              </View>
              <Text style={[styles.socialLabel, { fontSize: socialTextSize }]}>
                TikTok
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.socialButton,
                { minHeight: socialRowHeight, gap: iconTextGap },
              ]}
              onPress={() => openLink('https://www.facebook.com/')}
              activeOpacity={0.7}
              accessibilityRole="link"
              accessibilityLabel="Facebook"
            >
              <View
                style={[
                  styles.iconColumn,
                  { width: iconColumnWidth, height: socialRowHeight },
                ]}
              >
                <FontAwesome5
                  name="facebook"
                  size={iconSize}
                  color="#F0EBCF"
                  solid
                />
              </View>
              <Text style={[styles.socialLabel, { fontSize: socialTextSize }]}>
                Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.socialButton,
                { minHeight: socialRowHeight, gap: iconTextGap },
              ]}
              onPress={() => openLink('mailto:')}
              activeOpacity={0.7}
              accessibilityRole="link"
              accessibilityLabel="Email"
            >
              <View
                style={[
                  styles.iconColumn,
                  { width: iconColumnWidth, height: socialRowHeight },
                ]}
              >
                <Feather
                  name="mail"
                  size={iconSize}
                  color="#F0EBCF"
                />
              </View>
              <Text style={[styles.socialLabel, { fontSize: socialTextSize }]}>
                Email
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </LinearGradient>

    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.42)',
  },

  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    zIndex: 1,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  backText: {
    color: '#D9948F',
    fontWeight: '600',
  },

  title: {
    color: '#F0EBCF',
    fontWeight: '700',
  },

  divider: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#F0EBCF',
  },

  socialContainer: {
    width: '100%',
    flexShrink: 1,
  },

  socialButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialList: {
    width: '100%',
    flexShrink: 1,
  },

  socialListContent: {
    width: '100%',
  },

  iconColumn: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialLabel: {
    color: '#F0EBCF',
    fontWeight: '500',
  },

});
