import React, { useState } from 'react';
import { View, Text, Switch, Picker, StyleSheet, ScrollView, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TimeSettings() {
  const [timeAnnouncerEnabled, setTimeAnnouncerEnabled] = useState(false);
  const [use24HourFormat, setUse24HourFormat] = useState(false);
  const [announceInCall, setAnnounceInCall] = useState(false);
  const [dontAnnounce, setDontAnnounce] = useState(false);
  const [repeatAnnouncement, setRepeatAnnouncement] = useState('Once');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const onStartTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || startTime;
    setShowStartTimePicker(false);
    setStartTime(currentTime);
  };

  const onEndTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(false);
    setEndTime(currentTime);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.label}>Time Announcer</Text>
        <Switch
          value={timeAnnouncerEnabled}
          onValueChange={setTimeAnnouncerEnabled}
        />
      </View>
      
      <Text style={styles.sectionHeader}>Time Settings</Text>
      
      <View style={styles.settingContainer}>
        <Text style={styles.label}>When to Announce</Text>
        <Picker
          selectedValue="Every ten minutes"
          style={styles.picker}
          enabled={timeAnnouncerEnabled}
        >
          <Picker.Item label="Every ten minutes" value="Every ten minutes" />
          {/* Add other options here */}
        </Picker>
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Repeat Announcement</Text>
        <Picker
          selectedValue={repeatAnnouncement}
          style={styles.picker}
          onValueChange={(itemValue) => setRepeatAnnouncement(itemValue)}
          enabled={timeAnnouncerEnabled}
        >
          <Picker.Item label="Once" value="Once" />
          {/* Add other options here */}
        </Picker>
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Message before</Text>
        <Text style={styles.description}>Message will be played before Caller Name</Text>
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Use 24-hour format</Text>
        <Switch
          value={use24HourFormat}
          onValueChange={setUse24HourFormat}
          disabled={!timeAnnouncerEnabled}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Announce in Call</Text>
        <Switch
          value={announceInCall}
          onValueChange={setAnnounceInCall}
          disabled={!timeAnnouncerEnabled}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Don't Announce</Text>
        <Switch
          value={dontAnnounce}
          onValueChange={setDontAnnounce}
          disabled={!timeAnnouncerEnabled}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Start Time</Text>
        <Button
          title={startTime.toLocaleTimeString()}
          onPress={() => setShowStartTimePicker(true)}
          disabled={!timeAnnouncerEnabled}
        />
        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={use24HourFormat}
            display="default"
            onChange={onStartTimeChange}
          />
        )}
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>End Time</Text>
        <Button
          title={endTime.toLocaleTimeString()}
          onPress={() => setShowEndTimePicker(true)}
          disabled={!timeAnnouncerEnabled}
        />
        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            is24Hour={use24HourFormat}
            display="default"
            onChange={onEndTimeChange}
          />
        )}
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Phone Profiles</Text>
        <Text style={styles.description}>Play Always</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    color: 'orange',
    marginVertical: 8,
  },
  description: {
    fontSize: 12,
    color: 'grey',
  },
  picker: {
    height: 50,
    width: 150,
  },
});