import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Image } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#484e57",
        tabBarInactiveTintColor: "#94A3B8",
        headerTintColor: "#7C3AED",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Play",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gamepad" size={15} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-friends" size={15} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={15} color={String(color ?? "black")} />
          ),
        }}
      />
      <Tabs.Screen
        name="Connections"
        options={{
          title: "Connections",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/connections.png")}
              style={{ width: 15, height: 15 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
