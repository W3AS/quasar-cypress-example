<template>
  <q-page class="container">
    <div class="row justify-center q-pt-xl">
      <div class="col-6  shadow-10 q-pa-md">
        <q-input class="col-12" v-model="nome" label="Primeiro Nome" />
        <q-input class="col-12" v-model="ultimoNome" label="Ultimo Nome" />
        <q-select v-model="estado" label="Estado" :options="opcaoEstado" />
        <q-input v-model="cpf" mask="###.###.###-##" label="CPF" type="tel"/>
        <q-radio v-model="sexo" val="M" label="Masculino" />
        <q-radio v-model="sexo" val="F" label="Feminino" />
        <br />
        <q-badge>Quantidade de livro: {{livros}}</q-badge>
        <q-slider v-model="livros" :min="0" :max="100" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      nome: '',
      ultimoNome: '',
      cpf: '',
      estado: '',
      opcaoEstado: ['AC', 'AM', 'BA', 'DF'],
      sexo: '',
      livros: 0
    }
  }
}
</script>
