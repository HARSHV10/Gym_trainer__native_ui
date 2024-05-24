import { View,Text,Button } from "react-native";
import Toast from 'react-native-toast-message'

export default function ToastComponent():JSX.Element{
    const showToast = () => {

        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
      }
    return(
        <View>
            <Button
      title='Show toast'
      onPress={showToast}
    />
        </View>
    )
}