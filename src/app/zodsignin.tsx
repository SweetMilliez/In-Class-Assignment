import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import * as z from "zod";


const zodSchema = z.object({
  firstName: z.string().min(2, "First name must be between 2 to 30 characters").max(30),
  lastName: z.string().min(2, "Last name must be between 2 to 30 characters").max(30),
  email: z.string().email("Please enter a valid email address").trim(),
  password:  z.string().min(8),
  confirmPassword:  z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpData = z.infer<typeof zodSchema>;

type SavedSignUpData = Omit<SignUpData, "password" | "confirmPassword">;






export default function SignUpScreen() {
  const router = useRouter();
  

return(
  <View>
    <Text>Welcome to the sign up screen!</Text>


  </View>
)}