import { View, Text, Button } from "react-native";
import { usePreventScreenCapture } from 'expo-screen-capture';

export const Page2 = ({ navigation }) => {
  usePreventScreenCapture();

  return (
    <View>
      <Text> Hello we are in Page 2 </Text>

      <Button
        title="Goto Page 1"
        onPress={() => {
          navigation.navigate("Page1");
          // console.log(props);
        }}
      />
    </View>
  );
};
