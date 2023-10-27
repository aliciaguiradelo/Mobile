import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import feedMock from './Services/PostsMock';

import Postagem from './components/Postagem';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await setPosts(feedMock);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        {posts && posts.map((post) => <Postagem key={post.id} post={post} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  safeAreaView: {
    flex: 1,
  },
});
