import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    // Handle search logic here
    console.log('Search Text:', text);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBox;