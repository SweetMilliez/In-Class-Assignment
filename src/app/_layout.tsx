import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} />
          ),
        }}
      />
      <Tabs.Screen
      name="zodsignin"
      options={{
        title:"Account",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" size={size} />
          ),
      }}
      />

    </Tabs>
  );
}
