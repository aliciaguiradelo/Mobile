import { Text, View, StyleSheet } from 'react-native';

export default (props) => {
  return (
      <View style={styles.comment}>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    paddingBottom: 1
  },
  username: {
    fontWeight: 600,
  },
  text: {},
});