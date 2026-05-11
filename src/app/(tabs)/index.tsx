import "@/global.css";
import { styled } from 'nativewind'
import { Text, View } from "react-native";
import {Link} from 'expo-router'
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
      <SafeAreaView className="flex-1 items-center justify-center bg-background">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
          <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
          <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign in</Link>
          <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go to Sign up</Link>
          <Link href="/src/app/subscriptions/spotify">Spotfy Subscription</Link>
          <Link href={{
              pathname: "/subscriptions/[id]",
              params: { id: "claude" }

          }}>
              Claude Max Subscriptions
          </Link>
      </SafeAreaView>
  );
}