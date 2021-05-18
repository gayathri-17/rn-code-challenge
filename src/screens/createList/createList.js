import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, SafeAreaView, TouchableOpacity, ScrollView, Platform, Image, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../reducer/types'
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './createListStyle'
import InputField from '../../components/inputField/inputField'
import Button from '../../components/button/button'
import defaultStrings from '../../constants/defaultStrings'

const CreateList = (props) => {
  const [state, setState] = useState({
    petName: '', breed: '', age: null, description: '', image: null, id: null
  });
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const stateData = useSelector(state => state)
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [isError, setIsError] = useState(false);
  const itemData = props.route.params ? props.route.params.item : null


  useEffect(() => {
    const value = stateData.user.id
    setState({ ...state, id: value })
    if (itemData) {
      setState(itemData)
      setIsUpdateData(true)
    }
  }, [])

  /**
   * save item in redux
   */
  const saveData = () => {
    if (!state.petName || !state.age || !state.breed || !state.description || !state.image) {
      setIsError(true)
      return;
    } else {
      dispatch({
        type: actions.ADD_TO_CART,
        payload: state
      })
      navigation.goBack();
    }
  }

  /**
   * update the array item
   */
  const updateData = () => {
    if (!state.petName || !state.age || !state.breed || !state.description || !state.image) {
      return;
    } else {
      dispatch({
        type: actions.UPDATE_TO_CART,
        payload: state
      })
      navigation.goBack();
    }
  }

  /**
   * select image from gallery
   */
  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setState({ ...state, image: response.uri })
      },
    )
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView style={styles.keyboardView}
          behavior={Platform.OS === "ios" ? "padding" : null}>
            {/* image view */}
          <View style={styles.imageContainer}>
            <View style={styles.avatarView}>
              <Image
                style={[styles.imageView, isError && !state.image && styles.errorBorder]}
                source={state.image !== null ? { uri: state.image } :
                  require('../../assets/cat.png')}
              />
              <TouchableOpacity style={styles.iconView}
                onPress={() => selectImage()}
              >
                <AntDesign name="camera" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* text field view */}
          <View style={styles.mainView}>

            {/* name text view */}
            <InputField
              onChangeText={(text) => setState({ ...state, petName: text })}
              value={state.petName}
              isError={isError}
              placeholder={defaultStrings.ENTER_A_NAME} />

            {/* breed text view */}
            <InputField
              onChangeText={(text) => setState({ ...state, breed: text })}
              value={state.breed}
              isError={isError}
              placeholder={defaultStrings.ENTER_A_BREED}
            />
            {/* age text view */}
            <InputField
              onChangeText={(text) => setState({ ...state, age: text })}
              value={state.age}
              keyboardType={'number-pad'}
              isError={isError}
              placeholder={defaultStrings.ENTER_A_AGE} />

            {/* description text view */}
            <InputField
              onChangeText={(text) => setState({ ...state, description: text })}
              value={state.description}
              isError={isError}
              placeholder={defaultStrings.ENTER_A_DESCRIPTION} />

          </View>

          {/* bottom button view */}
          <View style={styles.bottomContainer}>
            <Button
              buttonStyle={styles.cancelButton}
              buttonTextStyle={styles.cancelButtonText}
              buttonText={defaultStrings.CANCEL}
              onPressButton={() => navigation.goBack()}></Button>

            <Button
              buttonStyle={styles.saveButton}
              buttonTextStyle={styles.saveButtonText}
              buttonText={isUpdateData ? defaultStrings.UPDATE : defaultStrings.SAVE}
              onPressButton={() => isUpdateData ? updateData() : saveData()}></Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView >

  )
}

export default CreateList