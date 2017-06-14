<template>
  <header class="header">
    <p v-if="seen">{{ header }}</p>
    
  </header>
</template>

<script>
export default {
  name:"header",
  data (){
      return{
        msg:"Header Navtion",
        seen: true
      }
  }
}
</script>

<style lang="css">

</style>
