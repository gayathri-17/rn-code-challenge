import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../theme'

export default StyleSheet.create({
    mainContainer: {
        ...appStyles.screen.container,
        backgroundColor: colors.white
    },
    scrollContainer: {
        ...appStyles.screen.container,
        margin: 10,
        marginTop: 30
    },
    keyboardView: {
        ...appStyles.screen.container,
    },
    imageContainer: {
        margin: 12,
        marginTop: 20
    },
    avatarView: {
        alignSelf: 'center',
        marginTop: 35,
    },
    imageView: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    iconView: {
        height: 30,
        width: 30,
        backgroundColor: colors.white,
        borderRadius: 50,
        position: 'absolute',
        left: 65,
        top: 75,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
    },
    mainView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cancelButton: {
        marginVertical: 20,
        borderColor: colors.ocean,
        backgroundColor: colors.white,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        width: '40%',
    },
    cancelButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.ocean,
        fontWeight: '600'
    },
    saveButton: {
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        width: '40%',
        backgroundColor: colors.ocean,
    },
    saveButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        fontWeight: '600'
    },
    errorBorder: {
        borderColor: colors.coralred,
        borderWidth: 3
    }
})