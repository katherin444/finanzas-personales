<script setup>
import { ref } from 'vue'
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { auth } from '@/firebase';

const type = ref('ingresos')
const amount = ref(0)
const db= getDatabase();

console.log(auth.currentUser.uid);


const addTransaction = async () =>{
    const user = auth.currentUser
    if (user && amount.value != null){
        const transactionRef = dbRef(db, `/transactions/${user.uid}` );
    
        const newTransaction = {
            type: type.value,
            amount: amount.value,
            date: new Date().toISOString().slice(0,10),
            userId: user.uid
        }
    await push(transactionRef, newTransaction)
    alert('Transacción añadida')
    amount.value = null   
    } else{
        alert('Debes ingresar una cantidad válida')
    }


}



</script>

<template>
    <h1>Añadir transacción</h1>
    <form @submit.prevent="addTransaction">
        <div>
            <label style="margin-right: 5px;">Tipo de transacción </label>
            <select v-model="type" id="">
                <option value="ingresos">Ingreso</option>
                <option value="gasto">Gasto</option>            
            </select>      
        </div>
        <div>
            <label style="margin-right: 5px;">Cantidad</label>
            <input v-model="amount" stype="number" required>
        </div>
        <button type="submit">Agregar transacción</button>
    </form>
</template>