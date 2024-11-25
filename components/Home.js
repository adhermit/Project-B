import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Pressable } from 'react-native';

export default function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>0</Text>
        <Text style={styles.subHeaderText}>Applications Installed</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Enabled</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.settingsGrid}>
            {settings.map(setting => (
            //{/*<TouchableOpacity key={setting.label} style={styles.settingButton}>
            //    <View style={styles.settingIcon}>{setting.icon}</View>
             //   <Text style={styles.settingLabel}>{setting.label}</Text>
            //</TouchableOpacity>*/}
            <Pressable key={setting.label} style={styles.settingButton}>
                <View style={styles.settingIcon}>{setting.icon}</View>
                <Text style={styles.settingLabel}>{setting.label}</Text>
            </Pressable>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};


const settings = [
  { label: 'Battery Settings', icon: <Text>🔋</Text> },
  { label: 'Time Settings', icon: <Text>⏰</Text> },
  { label: 'App Settings', icon: <Text>⚙️</Text> },
  { label: 'Sms Settings', icon: <Text>💬</Text> },
  { label: 'Call Settings', icon: <Text>📞</Text> },
  { label: 'Data Settings', icon: <Text>📶</Text> },
  { label: 'Voice Settings', icon: <Text>🎤</Text> },
  { label: 'Language', icon: <Text>🌐</Text> },
  { label: 'Profile Selection', icon: <Text>📲</Text> },
  { label: 'Select Theme', icon: <Text>🎨</Text> },
  { label: 'Rate Us', icon: <Text>⭐</Text> },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4fc3f7',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 48,
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
  },
  settingsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingButton: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    elevation: 3,
  },
  settingIcon: {
    marginBottom: 8,
  },
  settingLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
});