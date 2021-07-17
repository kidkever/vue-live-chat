import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
