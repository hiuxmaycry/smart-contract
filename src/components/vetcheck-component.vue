<template>
  <div class="casino container">
    <h1>Bienvenido</h1>
    <div v-if="started">
    <p v-if="!editing"> Nombre del perrito: {{name}}</p>
    <p v-if="!editing"> Peso: {{weight}}</p>
    <p v-if="!editing"> Altura: {{height}}</p>
    <p v-if="!editing"> Fecha Antirabica: {{dateRabies}}</p>
    <p v-if="!editing"> Fecha Antiparasitario: {{dateParasite}}</p>

    <p v-if="editing"> Nombre del perrito: <input v-model="nameInput"  v-bind:placeholder="name"> </p>
    <p v-if="editing"> Peso: <input v-model="weightInput" v-bind:placeholder="weight"> </p>
    <p v-if="editing"> Altura: <input  v-model="heightInput"    v-bind:placeholder="height"></p>
    <p v-if="editing"> Fecha Antirabica: <input v-model="dateRabiesInput" type="date" > </p>
    <p v-if="editing"> Fecha Antiparasitario: <input  v-model="dateParasiteInput" type="date"> </p>
    <input type="submit"  value="Refrescar" v-on:click="clickRefresh" placeholder="">
    <input type="submit" v-if="editing" value="Guardar" v-on:click="clickEnter" placeholder="">
      <input type="submit" v-if="!editing" value="Editar" v-on:click="clickEdit" placeholder="">
    </div>
    <div v-if="!started">
      <input type="submit" value="Ingresar" v-on:click="clickRefresh" placeholder="">
    </div>

  </div>
</template>
<!--https://itnext.io/create-your-first-ethereum-dapp-with-web3-and-vue-js-part-3-dc4f82fba4b4-->

<script>

function getWeightAndHeight (store, data) {
  store.state.contractInstance().getWeightAndHeight((err, result) => {
    if (err) {
      console.log(err)
    } else {
      data.weight = result[0].c[0]
      data.height = result[1].c[0]
    }
  })
}
function getRabicDate (store, data) {
  store.state.contractInstance().getDateAntiRabies((err, result) => {
    if (err) {
      console.log(err)
    } else {
      data.dateRabies = String(result[1].c[0]) + '/' + String(result[0].c[0]) + '/' + String(result[2].c[0])
      data.dateParasiteInput = new Date(data.dateRabies)
    }
  })
}
function getParasiteDate (store, data) {
  store.state.contractInstance().getDateParasitic((err, result) => {
    if (err) {
      console.log(err)
    } else {
      data.dateParasite = String(result[1].c[0]) + '/' + String(result[0].c[0]) + '/' + String(result[2].c[0])
    }
  })
}
function setWeight (store, data, weight) {
  var contract = store.state.contractInstance()
  var buyer = store.state.web3.coinbase
  contract.setWeight(weight, {from: buyer}, function (err, result) {
    console.log(err)
    console.log(result)
    data.weight = weight
    data.weightInput = ''
  })
  console.log()
}
function setHeight (store, data, height) {
  var contract = store.state.contractInstance()
  var buyer = store.state.web3.coinbase
  contract.setHeight(height, {from: buyer}, function (err, result) {
    console.log(err)
    console.log(result)
    data.height = height
    data.heightInput = ''
  })
  console.log()
}
function setName (store, data, name) {
  var contract = store.state.contractInstance()
  var buyer = store.state.web3.coinbase
  var nameHexa = name
  contract.setName(nameHexa, {from: buyer}, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      data.name = name
      data.nameInput = ''
    }
  })
}
function setRabiesDate (store, data, rabiesDate) {
  var date = new Date(Date.parse(rabiesDate))
  var contract = store.state.contractInstance()
  var buyer = store.state.web3.coinbase
  contract.setDateAntiRabies(date.getDate() + 1, date.getMonth() + 1, date.getFullYear(), {from: buyer}, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      data.dateRabies = String(date.getMonth() + 1) + '/' + String(date.getDate() + 1) + '/' + String(date.getFullYear() + 1)
      data.dateRabiesInput = ''
    }
  })
}
function setParasiteDate (store, data, parasiteDate) {
  var date = new Date(Date.parse(parasiteDate))
  var contract = store.state.contractInstance()
  var buyer = store.state.web3.coinbase
  contract.setDateParasitic(date.getDate() + 1, date.getMonth() + 1, date.getFullYear(), {from: buyer}, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      data.dateParasite = String(date.getMonth() + 1) + '/' + String(date.getDate() + 1) + '/' + String(date.getFullYear() + 1)
      data.dateParasiteInput = ''
    }
  })
}

function hex2a (hexx) {
  hexx = hexx.replace(/^0x+/, '')
  var hex = hexx.toString()
  var str = ''
  for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) { str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)) }
  return str
}
// function asciiToHexa (str) {
//   console.log('Start asciiToHexa')
//   console.log(str)
//   var arr1 = []
//   for (var n = 0, l = str.length; n < l; n++) {
//     var hex = Number(str.charCodeAt(n)).toString(16)
//     arr1.push(hex)
//   }
//   hex = arr1.join('')
//   console.log('End asciiToHexa')
//   return hex
// }

function getName (store, data) {
  store.state.contractInstance().getName((err, result) => {
    if (err) {
      console.log(err)
    } else {
      data.name = hex2a(result)
    }
  })
}

export default {
  name: 'vetcheck-component',
  data () {
    return {
      weight: 0,
      height: 0,
      name: '',
      dateRabies: '',
      dateParasite: '',
      weightInput: '',
      heightInput: '',
      nameInput: '',
      dateRabiesInput: '',
      dateParasiteInput: '',
      started: false,
      editing: false
    }
  },
  beforeCreate () {
  },

  methods: {
    clickEdit (event) {
      this.editing = true
    },
    clickRefresh (event) {
      getWeightAndHeight(this.$store, this)
      getRabicDate(this.$store, this)
      getParasiteDate(this.$store, this)
      getName(this.$store, this)
      this.started = true
      this.editing = false
    },
    clickEnter (event) {
      if (this.weightInput !== '') {
        setWeight(this.$store, this, this.weightInput)
      }
      if (this.heightInput !== '') {
        setHeight(this.$store, this, this.heightInput)
      }
      if (this.nameInput !== '') {
        setName(this.$store, this, this.nameInput)
      }
      if (this.dateRabiesInput !== '') {
        setRabiesDate(this.$store, this, this.dateRabiesInput)
      }
      if (this.dateParasiteInput !== '') {
        setParasiteDate(this.$store, this, this.dateParasiteInput)
      }
      this.editing = false
    }
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }
}
</script>

<style scoped>
  .casino {
    margin-top: 50px;
    text-align:center;
  }
  #loader {
    width:150px;
  }
  ul {
    margin: 25px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap:25px;
    grid-row-gap:25px;
  }
  li{
    padding: 20px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color:#fff;
    border: -2px solid #bf0d9b;
    color: #bf0d9b;
    box-shadow:3px 5px #bf0d9b;
  }
  li:hover{
    background-color:#bf0d9b;
    color:white;
    box-shadow:0px 0px #bf0d9b;
  }
  li:active{
    opacity: 0.7;
  }
  *{
    color: #444444;
  }
  #has-won {
    color: green;
  }
  #has-lost {
    color:red;
  }
</style>
