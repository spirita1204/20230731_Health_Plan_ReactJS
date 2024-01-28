import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const LongPressButton = ({ leftLogo, leftText, rightLogo, onPress, dropdownData }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLongPress = () => {
    setIsDropdownVisible(true);
  };

  const handleClick = (index) => {
    console.log(index, 'index');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        onLongPress={handleLongPress}
        delayLongPress={500}
      >
        <View style={styles.leftContent}>
          {leftLogo && <Image source={leftLogo} style={{ width: 40, height: 40 }} />}
          <Text style={styles.leftText}>{leftText}</Text>
        </View>
        {rightLogo && <Image source={rightLogo} style={{ width: 20, height: 20 }} />}
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          {dropdownData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => handleClick(index)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#666666'
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 5,
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  dropdownContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default LongPressButton;
