<template>
  <div>
    <label v-for="menu in menuData" :key="menu.id">
      <el-submenu :index="String(menu.id)" v-if="menu.children">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>{{menu.name}}</span>
        </template>
        <label>
          <menutree :menuData="menu.children"></menutree>
        </label>
      </el-submenu>
      <el-menu-item :index="menu.path" @click="saveNavStart(menu.path)" v-else>
        <i class="el-icon-edit"></i>
        <span>{{menu.name}}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Menutree',
  props: {
    menuData: {
      type: Array,
      default: ()=> {return []}
    }
  },
  methods: {
    saveNavStart(activePath) {
      this.$emit('saveNavStart',activePath)
    }
  }
}
</script>