<template>
  <div>
   <component :is="login"></component>
  </div>
</template>
<script>
import login from '../login/login'
export default {
  name: 'Shuangseqiu',
  props: ['testData'],
  components: {
    login: login
  },
  data() {
    return {

    }
  }
}
</script>
