/* import { View, Text, Button } from "react-native";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Hello in Home Page</Text>
      <Button
        title="Go to Page 1"
        onPress={() => {
          navigation.navigate("Page1");
        }}
      />

      <Button
        title="Open Camera Component"
        onPress={() => {
          navigation.navigate("MyCamera");
        }}
      />

      <Button
        title="Open img PICker"
        onPress={() => {
          navigation.navigate("img");
        }}
      />
    </View>
  );
};
 */
import { View, Text, Button } from "react-native";
export default  function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Page 1"
        onPress={() => {
          navigation.navigate("Page1");
        }}
      />
      
      <Button
        title="Open Camera Component"
        onPress={() => {
          navigation.navigate("MyCamera");
        }}
      />
        <Button
        title="Open img PICker"
        onPress={() => {
          navigation.navigate("img");
        }}
      />
         <Button
        title="Open WebUrl"
        onPress={() => {
          navigation.navigate("WebUrl");
        }}
      />
         <Button
        title="Open Location"
        onPress={() => {
          navigation.navigate("Location_map");
        }}
      />
         <Button
        title="Open map"
        onPress={() => {
          navigation.navigate("My_Map");
        }}
      />
             <Button
        title="Open network ip"
        onPress={() => {
          navigation.navigate("ShowIp");
        }}
      />
    </View>
  );
}
