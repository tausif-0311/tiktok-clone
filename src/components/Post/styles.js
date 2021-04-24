import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 130,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'

    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    songPicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 7,
        borderColor: '#808080',

    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'

    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
        // marginLeft: 5
    },
    iconContainer: {
        alignSelf: 'center',
    },


});

export default styles;