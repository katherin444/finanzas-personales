<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false)
const router = useRouter()

onAuthStateChanged(auth, (user) =>{
  isAuthenticated.value = !!user
})


const logout = async () => {
  await signOut(auth)
  isAuthenticated.value = false
  router.push('/auth')
}

</script>

<template>
  <header>

    
      <nav v-if="isAuthenticated">
        <RouterLink to="/">Dashboard</RouterLink>
        <!-- auth nos servira para la autenticación -->
        <RouterLink to="/transaction">Transactions</RouterLink>
        <button @click="logout">Logout</button>
      </nav>
    
  </header>
  <main>
    <RouterView />
  </main>
  <!-- routherview gestiona el enrutado -->
  <!-- routherview muestra lo que esta en el componente router indexjs -->
 
</template>

<style scoped>
nav{
  text-align: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-size: 1.2rem;

}
main{
  text-align: center;
  margin-top: 3rem;
  
}


</style>
