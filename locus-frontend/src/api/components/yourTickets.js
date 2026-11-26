
import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getYourTicketsLayoutMetrics } from '../utils/yourTicketsLayout';
import styles from '../styles/yourTicketsStyles';

export default function YourTickets({
  visible,
  onClose,
  onFindTickets,
  onUploadTickets,
}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const {
    popupWidth,
    popupHeight,
    popupRadius,
    horizontalPadding,
    verticalPadding,
    titleSize,
    ticketIconSize,
    closeTop,
    closeRight,
    closeIconSize,
    dividerMarginTop,
    cardsGap,
    cardsMarginTop,
    cardHeight,
    cardRadius,
    borderSize,
    cardIconSize,
    descriptionSize,
    descriptionLineHeight,
    descriptionMarginTop,
  } = getYourTicketsLayoutMetrics(width, height);

  const handleClose = onClose;

  return (
    <Modal
      visible={visible ?? true}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>

        <LinearGradient
          colors={[
            '#405D38',
            '#806959',
            '#9C6E68',
            '#996C66',
          ]}
          locations={[0, 0.54, 0.67, 0.92]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            styles.container,
            {
              width: popupWidth,
              height: popupHeight,
              borderRadius: popupRadius,
              paddingHorizontal: horizontalPadding,
              paddingTop: verticalPadding,
              paddingBottom: 0,
            },
          ]}
        >

          {/* CLOSE BUTTON */}
          <TouchableOpacity
            style={[
              styles.closeButton,
              {
                top: closeTop,
                right: closeRight,
              },
            ]}
            onPress={handleClose}
          >
            <Ionicons
              name="close"
              size={closeIconSize}
              color="#CF928A"
            />
          </TouchableOpacity>


          {/* HEADER */}
          <View style={styles.header}>

            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={[
                styles.title,
                { fontSize: titleSize },
              ]}
            >
              Your tickets
            </Text>

            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={ticketIconSize}
              color="#F5F1D1"
            />

          </View>


          {/* DIVIDER */}
          <View
            style={[
              styles.divider,
              { marginTop: dividerMarginTop },
            ]}
          />


          {/* CARDS */}
          <View
            style={[
              styles.cardsContainer,
              {
                gap: cardsGap,
                marginTop: cardsMarginTop,
              },
            ]}
          >

            {/* FIND TICKETS */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onFindTickets}
              style={[
                styles.card,
                {
                  height: cardHeight,
                  borderRadius: cardRadius,
                  borderWidth: borderSize,
                },
              ]}
            >

              <MaterialCommunityIcons
                name="magnify"
                size={cardIconSize}
                color="#CF928A"
              />

              <Text
                style={[
                  styles.description,
                  {
                    fontSize: descriptionSize,
                    lineHeight: descriptionLineHeight,
                    marginTop: descriptionMarginTop,
                  },
                ]}
              >
                Click this button to find
                {'\n'}and purchase your
                {'\n'}tickets.
              </Text>

            </TouchableOpacity>


            {/* UPLOAD TICKETS */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onUploadTickets}
              style={[
                styles.card,
                {
                  height: cardHeight,
                  borderRadius: cardRadius,
                  borderWidth: borderSize,
                },
              ]}
            >

              <MaterialCommunityIcons
                name="tray-arrow-up"
                size={cardIconSize}
                color="#CF928A"
              />

              <Text
                style={[
                  styles.description,
                  {
                    fontSize: descriptionSize,
                    lineHeight: descriptionLineHeight,
                    marginTop: descriptionMarginTop,
                  },
                ]}
              >
                Click this button to
                {'\n'}upload your tickets in PDF
                {'\n'}or PNG format
              </Text>

            </TouchableOpacity>

          </View>

        </LinearGradient>

      </View>
    </Modal>
  );
}


