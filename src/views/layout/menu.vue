<template>
  <el-menu
    background-color="#304156"
    mode="horizontal"
    text-color="#fff"
    active-text-color="#409eff"
    :collapse="false"
    :collapse-transition="false"
    :unique-opened="true"
    :router="true"
    default-active="activePath">
    <menu-tree :menu-data="treeData"
               @saveNavStart="saveNavStart" />
  </el-menu>
</template>

<script>
import menuTree from '@/views/layout/menuTree'
export default {
  components: {
    menuTree
  },
  data() {
    return {
      activePath: '',
      treeData: [
        {
          name: '小七',
          id: 1,
          children: [
            {
              name: '啥也不是',
              pid: 2
            }
          ]
        },
        {
          name: '小八',
          id: 2,
          children: [
            {
              name: '随便写哦',
              pid: 3,
              children: [
                {
                  name: '再次深入',
                  pid: 4,
                  children: [
                    {
                      name: '撒打算',
                      pid: 666
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '小九',
          id: 3
        }
      ]
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    saveNavStart(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
