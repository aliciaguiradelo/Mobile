import { Text, View, StyleSheet } from 'react-native';

import Comment from './Comment';

export default (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.likes}>
        {props.likes.toLocaleString('pt-BR')} likes
      </Text>
      <Text style={styles.description}>{props.description}</Text>
      {props.comments.map((comentario, index) => (
        <Comment
          key={index}
          username={comentario.username}
          text={comentario.text}></Comment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  likes: {
    paddingBottom: 5,
    fontWeight: 600,
    fontSize: 16,
  },
  description: {
    paddingBottom: 10,
  },
});
