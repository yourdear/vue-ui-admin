<template>
  <div>
    <el-button @click="switchLang">{{ $t('layout.switchLanguage') }}</el-button>
    <div>{{ $t('layout.successMessage') }}</div>
    <goodTest></goodTest>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      value1: ''
    }
  },
  methods: {
    switchLang() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh' // 此处val为 zh 或者 en
    }
  }
}
</script>


