import { ref, onMounted } from 'vue'
import { auth, provider, signInWithPopup, signOut } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export function useAuth() {
  const currentUser = ref(null)

  const handleLogin = async () => {
    try { 
      console.log('GitHub 로그인 시도...');
      const result = await signInWithPopup(auth, provider);
      console.log('로그인 성공:', result.user);
    } catch (err) { 
      console.error('로그인 실패 상세:', err);
      alert(`로그인 실패: ${err.message}`);
    }
  }

  const handleLogout = () => signOut(auth)

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user
    })
  })

  return {
    currentUser,
    handleLogin,
    handleLogout
  }
}
