<template>
  <!-- <h5 ref="widget" class="widget" :id="_props.id" v-bind:style=:style="{'height':height ,'width':width,'top':top,'letf':left}">  -->
  <h5  ref="widget" class="widget"  :id="_props.id" v-bind:style="{ height: height, width: width,top:top,left:left}">
      zheshibiaoti
    {{text}}
  </h5>
</template>
<script>
import viewVue from '../view.vue'
export default {
  name: 'heading',
  extends: viewVue,
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text: '',
      height: '100px',
      width: '100px',
      top: '0px',
      left: '0px'
    }
  }
}
</script>

<style lang="less">

</style>
