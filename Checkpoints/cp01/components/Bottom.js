import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default (props) => {
  const handleLike = () => {
    props.setLikes(prevLikes => prevLikes + 1);
  };
  const handleComment = () => alert("Comentário adicionado!");
  const handleShare = () => alert("Compartilhe a publicação!");
  const handleSave = () => alert("Salvo com sucesso!");
  return (
    <View style={styles.bottom}>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike}>
          <Image
            style={styles.like}
            source={require('../assets/like_button.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment}>
          <Image
            style={styles.image}
            source={require('../assets/comment_button.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Image
            style={styles.image}
            source={require('../assets/share_button.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSave}>
        <Image
          style={styles.image}
          source={require('../assets/save_button.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  image: {
    height: 25,
    width: 25,
  },
  like: {
    height: 30,
    width: 30,
  },
});
