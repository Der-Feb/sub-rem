import { Link } from 'expo-router';
import { Text, View, } from 'react-native';

const SignUp = () => {
  return (
    <View>
        <Text>SignUp</Text>
        <Link href={"/(auth)/sign-up"}></Link>
        
        <Link href="/(auth)/sign-in">
            Sign in
        </Link>

        <Link href="/">Home</Link>
    </View>
  )
}

export default SignUp;
