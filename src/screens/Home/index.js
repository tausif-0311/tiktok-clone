import React from 'react';
import { View, Dimensions, Text, FlatList } from 'react-native';
import Post from '../../components/Post'
import posts from '../../../data/posts'


const Home = () => {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item}></Post>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 130}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            >

            </FlatList>

        </View>
    );
};

export default Home;
