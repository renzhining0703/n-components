<template>
  <div>
    <div ref="vantaRef" style="width:100%;height:100vh"></div>
    <div class="my_title">Hello World</div>
  </div>
</template>
  
<script>
import * as THREE from 'three'
import Net from 'vanta/src/vanta.net'
export default {
  name: "hello",
  data() {
    return {

    };
  },
  mounted() {
    this.vantaEffect = Net({
      el: this.$refs.vantaRef,
      THREE: THREE
    })

  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
  methods: {

  },

};
</script>
  
<style>
.my_title {
  z-index: 999;
  position: fixed;
  top: 40%;
  left: 40%;
  color: aquamarine;
  font-size: 100px;
  font-weight: bolder;
}
</style>
  
  

<!-- <style lang='scss' scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 40px;
      position: relative;
      top: -100px;
    }
  }
</style> -->