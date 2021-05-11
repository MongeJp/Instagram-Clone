import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificiationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotificiationsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificiationsScreen;
