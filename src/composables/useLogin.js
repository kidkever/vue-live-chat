import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { login, error };
};

export default useLogin;
