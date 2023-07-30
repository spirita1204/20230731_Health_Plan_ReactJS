import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Post = ({ username, text, imageSource }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Text content */}
      <Text style={styles.textContent}>{text}</Text>

      {/* Image */}
      <Image source={imageSource} style={styles.image} />

      {/* Like button */}
      <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={24}
          color={isLiked ? 'red' : '#000'}
        />
        <Text style={styles.likeCount}>{likes}</Text>
      </TouchableOpacity>

      {/* Comments */}
      {comments.map((comment, index) => (
        <Text key={index} style={styles.comment}>
          {comment}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    // Add other styles for post container
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    // Add other styles for header
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    // Add other styles for username
  },
  settingsButton: {
    // Add styles for settings button (e.g., icon size, color, etc.)
  },
  textContent: {
    fontSize: 14,
    marginBottom: 10,
    // Add other styles for text content
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    // Add other styles for image
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // Add other styles for like button
  },
  likeCount: {
    marginLeft: 5,
    // Add other styles for like count
  },
  comment: {
    fontSize: 14,
    // Add other styles for comments
  },
});

export default Post;
