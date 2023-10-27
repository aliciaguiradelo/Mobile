import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default (props) => {
  const handleActions = () => alert('Mais ações!');
  const handleProfile = () => alert('Visualize o perfil do usuário!');
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleProfile} style={styles.profile}>
        <Image
          style={styles.profilePic}
          source={props.user.profilePicture}
        />
        <Text>{props.user.username}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleActions}>
        <Image
          style={styles.image}
          source={require('../assets/action_button.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  image: {
    height: 25,
    width: 25,
  },
});
