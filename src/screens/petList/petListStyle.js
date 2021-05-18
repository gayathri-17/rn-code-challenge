import { StyleSheet } from 'react-native';
import { appStyles, colors } from '../../theme'

export default StyleSheet.create({
  mainContainer: {
    ...appStyles.screen.container,
    backgroundColor: colors.white
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    justifyContent: 'space-evenly'
  },
  avatarView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#000',
    opacity: 0.5
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 25,
    fontWeight: '600',
    color: '#222',
    fontSize: 16,

  },
  breedTxt: {
    marginLeft: 25,
    fontWeight: 'normal',
    color: 'black',
    fontSize: 12,

  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    fontSize: 20,
  },
  deleteIcon: {
    fontSize: 20,
    marginLeft: 12
  },
  emptyView: {
    ...appStyles.screen.container,
  },
  lineStyle: {
    height: '1%',
    width: '100%',
    margin: 0
  },
  fabView: {
    backgroundColor: colors.ocean,
    borderRadius: 50,
    padding: 10
  },
  clearButtonView: {
    textAlign: 'right',
    margin: 20,
    color: colors.ocean
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  floatingButtonStyle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '600'
  },
  bottomView: {
    margin: 10,
    flex: 1
  }

})
