import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'


const Post = (props) => {

    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(props.post);
    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {

        setPaused(!paused);
    }

    const onPressHandleLike = () => {
        const likesToAdd = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + likesToAdd
        })
        setIsLiked(!isLiked)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video source={{ uri: post.videoUri }}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode={'cover'}
                        repeat={false}
                        paused={paused}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>

                            <Image style={styles.profilePicture} source={{ uri: post.user.imageUri }}></Image>

                            <TouchableOpacity style={styles.iconContainer} onPress={onPressHandleLike}>
                                <AntDesign name={"heart"} size={35} color={isLiked ? 'red' : 'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <FontAwesome name={"commenting"} size={35} color='white' />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Fontisto name={"share-a"} size={30} color='white' />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>

                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={"beamed-note"} size={24} color='white'></Entypo>
                                    <Text style={styles.songName}>{post.songName}</Text>
                                </View>
                            </View>

                            <Image style={styles.songPicture} source={{ uri: post.songImage }}></Image>

                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View >
    );
};



export default Post;