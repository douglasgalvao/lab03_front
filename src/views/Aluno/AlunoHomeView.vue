<template>
  <div class="container">
    <Card v-for="vantagem in vantagens" :key="vantagem.nome" :disabled="(vantagem.preco > saldo ? true : false)" class="card">
      <img :src="vantagem.imagem" alt="Imagem" class="card-image" />
      <div class="card-content">
        <div class="card-title">{{ vantagem.nome }}</div>
        <div class="card-description">{{ vantagem.descricao }}</div>
        <div class="card-price">
          <img :src="aracoin" alt="Aracoin" style="width: 36px; height: 32px; margin-right: 5px" />
          <span class="priceText">{{ vantagem.preco }}</span>
        </div>
        <Button label="Comprar" class="buttonComprarVantagem" :disabled="(vantagem.preco > saldo ? true : false)"  @click="comprarVantagem(vantagem)"></Button>
      </div>
    </Card>

    <Toast />


    <Dialog v-model:visible="showDialog" modal>

      <template #header>
        <div class="headerDialog">
          <p>Comprar Beneficio</p>
        </div>
      </template>
      <ModalComprarBeneficio
      :beneficio="beneficioSelecionado"
      @confirmarCompra="onConfirmarCompra" 
      @cancelarCompra="onCancelarCompra" 
      />
    </Dialog>



  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";

import aracoin from "../../assets/aracoin.png";
import Dialog from "primevue/dialog";
import ModalComprarBeneficio from "@/components/ModalComprarBeneficio.vue";
import alunoService from "../../services/alunoService.js";
const vantagens = ref([]);

const beneficioSelecionado = ref(null);
const showDialog = ref(false);
const toast = useToast();
const saldo = ref(null);
const visibilityButton = ref(false);


function comprarVantagem(vantagem) {
  beneficioSelecionado.value = vantagem;
  showDialog.value = true;
}


onMounted(() => {
  alunoService.getVantagens().then((response) => {
    vantagens.value = response.data;
  });
  
  alunoService.getHeader().then(e=> saldo.value = e.data.saldoMoedas)
  

});


function onCancelarCompra() {
  showDialog.value = false;
}

function onConfirmarCompra(message) {
  showDialog.value = false;
  toast.add({ severity: 'success', summary: 'Info', detail: message, life: 3000 });
}

</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card:not(.disabled):hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Estilo para o card desabilitado */
.card.disabled {
  transform: none;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #333;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

.card-price {
  display: flex;
  align-items: center;
}

.card-description {
  font-size: 1rem;
  color: white;
  line-height: 1.4;
}

.priceText {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

.buttonComprarVantagem {
  background: #555;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.buttonComprarVantagem:hover {
  background: #afafa7;
  opacity: 0.8;
}


.buttonComprarVantagem:disabled {
  opacity: 0.5;
}



</style>
