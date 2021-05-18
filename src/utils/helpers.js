
import { Alert } from "react-native";
 /**
 * Alert message with custom onpress function
 */
  export function alertMessage(header, message, primaryButtonText, secButtonText, onPressFunction) {
    Alert.alert(
      header,
      message,
      [
        {
          text: primaryButtonText,
          style: 'cancel',
        },
        {
          text: secButtonText,
          onPress: onPressFunction,
        },
      ],
      { cancelable: true }
    )
  }