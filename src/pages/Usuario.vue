<template>
  <q-page class="container">
    <div class="row justify-center q-pt-xl">
      <div class="col-6  shadow-10 q-pa-md">
        <q-input class="col-12" v-model="form.nome" label="Primeiro Nome" data-cy="nome" />
        <q-input class="col-12" v-model="form.ultimoNome" label="Ultimo Nome" data-cy="sobrenome"/>
        <q-select v-model="form.estado" label="Estado" :options="opcaoEstado" data-cy="estado"/>
        <q-input v-model="form.cpf" mask="###.###.###-##" label="CPF" type="tel" data-cy="cpf"/>
        <!-- Data -->
        <q-input label="Data" mask="##/##/####" v-model="form.data" data-cy="dataInput">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" data-cy="dataDatePicker">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale" :breakpoint="600">
                <q-date v-model="form.data" @input="() => $refs.qDateProxy.hide()" mask="DD/MM/YYYY" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <!-- Data -->
        <q-radio v-model="form.sexo" val="M" label="Masculino" data-cy="masc"/>
        <q-radio v-model="form.sexo" val="F" label="Feminino" data-cy="fem"/>
        <br />
        <!-- <q-badge>Quantidade de livro: {{livros}}</q-badge> -->
        <!-- <q-slider v-model="livros" :min="0" :max="100" /> -->
        <q-btn label="Cadastrar" color="primary" class="float-right" data-cy="botao" @click="cadastrar"/>
        <div v-if="dados">
          <p> Primeiro Nome: {{ nome }} </p>
          <p> Ultimo Nome: {{ ultimoNome }} </p>
          <p> CPF: {{ cpf }} </p>
          <p> Estado: {{ estado }} </p>
          <p> Sexo: {{ sexo }} </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        nome: '',
        ultimoNome: '',
        cpf: '',
        estado: '',
        sexo: '',
        data: ''
      },
      dados: false,
      opcaoEstado: ['AC', 'AM', 'BA', 'DF']
    }
  },
  methods: {
    cadastrar () {
      this.form = {}
      this.dialogSuccess()
    },
    dialogSuccess () {
      const dialog = this.$q.dialog({
        title: 'Cadastro',
        message: 'Usuário cadastrado com sucesso'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        clearTimeout(timer)
        // console.log('I am triggered on both OK and Cancel')
      })

      const timer = setTimeout(() => {
        dialog.hide()
      }, 3000)
    }
  }
}
</script>
