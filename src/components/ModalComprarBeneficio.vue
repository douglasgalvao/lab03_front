<template>
  <div class="confirmation-content">
    <p class="confirmation-text">Você tem certeza de que deseja comprar este benefício?</p>

    <div class="button-group">
      <Button label="Confirmar" icon="pi pi-check" class="confirm-button" @click="confirmar" />
      <Button label="Cancelar" icon="pi pi-times" class="cancel-button" @click="cancelar" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits,defineProps } from 'vue';
import Button from "primevue/button";
import alunoService from '@/services/alunoService';


const props = defineProps({
  beneficio: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['confirmarCompra', 'cancelarCompra']);

function confirmar() {
  
  let request = {
    vantagemId: props.beneficio.id,
    alunoId: localStorage.getItem('userId')
  }
  alunoService.comprarBeneficio(request).then(e=> emit('confirmarCompra',e.data));
}

function cancelar() {
  emit('cancelarCompra');
}
</script>

<style scoped>
.confirmation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

.confirmation-text {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.button-group {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  justify-content: center;
}

.confirm-button {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  flex: 1;
  transition: background-color 0.3s ease;
  border: none;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  flex: 1;
  transition: background-color 0.3s ease;
  border: none;
}

.cancel-button:hover {
  background-color: #e53935;
}

.confirm-button:hover {
  background-color: #45a049;
}
</style>
