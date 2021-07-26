<template>
  <div>
    <label v-for="menu in menuData"
           :key="menu.id">
      <el-submenu v-if="menu.children"
                  :index="String(menu.id)">
        <template slot="title">
          <i class="el-icon-edit" />
          <span>{{ menu.name }}</span>
        </template>
        <label>
          <menutree :menu-data="menu.children" />
        </label>
      </el-submenu>
      <el-menu-item v-else
                    :index="menu.path"
                    @click="saveNavStart(menu.path)">
        <i class="el-icon-edit" />
        <span>{{ menu.name }}</span>
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
      default: () => { return [] }
    }
  },
  methods: {
    saveNavStart(activePath) {
      this.$emit('saveNavStart', activePath)
    }
  }
}
</script>
