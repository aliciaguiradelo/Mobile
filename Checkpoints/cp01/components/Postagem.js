import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Header from './Header';
import Bottom from './Bottom';
import Footer from './Footer';

export default (props) => {
  const [likes, setLikes] = useState(props.post.likes);

  return (
    <View style={styles.container}>
      <Header user={props.post.user}></Header>
      <Image source={props.post.midia} style={styles.gallery} />
      <Bottom setLikes={setLikes}></Bottom>
      <Footer
        likes={likes}
        description={props.post.description}
        comments={props.post.comments}></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
  },
  gallery: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
