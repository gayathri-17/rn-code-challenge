import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import PetList from "../screens/petList/petList"
import CreateList from "../screens/createList/createList"
import { View, Text, TouchableOpacity } from 'react-native'
import NavKeys from '../constants/navKeys'
import DefaultStrings from '../constants/defaultStrings'
import { colors } from '../theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux'
import { alertMessage } from '../utils/helpers'
import defaultStrings from '../constants/defaultStrings'
import * as actions from '../reducer/types'


const Stack = createNativeStackNavigator();

function Navigation() {

  const dispatch = useDispatch()
  const stateData = useSelector(state => state)
	const cartItems = stateData.user && stateData.user.list ? stateData.user.list.length : 0

  const showAlert = () => {
    alertMessage(
      defaultStrings.CLEAR_LIST, defaultStrings.DATA_CLEAR_ALERT_MSG, 
      defaultStrings.CANCEL, defaultStrings.DELETE,
      () => clearStore()
    );
  }

const clearStore = () => {
  dispatch({
    type: actions.DELETE_DATA,
    payload: []
  })
}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavKeys.PETLIST}>
        <Stack.Screen
          name={NavKeys.PETLIST}
          component={PetList}
          options={{
            headerStyle: {
              backgroundColor: colors.ocean,
            },
            headerCenter: () => (<View style={{ textAlign: 'center' }}><Text style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: '600'
            }}>{DefaultStrings.PET_LIST}</Text>
            </View>),
            headerRight: () =>  cartItems !== 0 && (
              <View>
                <TouchableOpacity onPress={() => showAlert() }>
                <AntDesign style={{color: colors.white, fontSize: 25 }} name="poweroff" />
                </TouchableOpacity>
              </View>
            )
          }}
          
        />
        <Stack.Screen
          name={NavKeys.CREATELIST}
          component={CreateList}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
