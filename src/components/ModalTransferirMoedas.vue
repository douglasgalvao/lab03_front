<template>
  <div>
    <div class="form-group">
      <label for="valor">Valor:</label>
      <InputNumber v-model="quantidadeMoedasASeremEnviadas" :min="1" placeholder="Digite a quantidade de moedas"
        class="w-full" prefix="A$: " currency="BRL" />
    </div>

    <div class="form-group">
      <label for="motivo">Motivo:</label>
      <Textarea v-model="motivo" rows="3" placeholder="Digite o motivo" class="w-full" />
    </div>

    <Button label="Enviar Moedas" icon="pi pi-send" class="w-full" @click="enviarMoedas" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Button from "primevue/button";

const quantidadeMoedasASeremEnviadas = ref(0);
const motivo = ref("");
const alunos = ref([]);

const props = defineProps({
  aluno: {
    type: Object,
    required: true
  }
});



onMounted(() => {
  console.log(props)
});


onBeforeMount(() => {

});





function enviarMoedas() {
  if (selectedAluno.value && valor.value > 0 && motivo.value) {
    console.log("Aluno:", selectedAluno.value);
    console.log("Valor:", valor.value);
    console.log("Motivo:", motivo.value);
    alert(`Moedas enviadas para ${selectedAluno.value.nome}`);
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.w-full {
  width: 100%;
}
</style>
