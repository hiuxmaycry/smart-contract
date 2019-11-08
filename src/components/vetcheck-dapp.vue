<template>
  <div>
    <hello-metamask/>
    <vetcheck-component/>
  </div>
</template>

<script>
import HelloMetamask from '@/components/hello-metamask'
import VetCheckComponent from '@/components/vetcheck-component'
export default {
  name: 'vetcheck-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'hello-metamask': HelloMetamask,
    'vetcheck-component': VetCheckComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
