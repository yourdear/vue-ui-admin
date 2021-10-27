<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <span>A、B列可以相互拖动，无法拖到C列</span>
      <div class="col">
        <div class="title" >A列</div>
        <draggable v-model="arr1" group="site"  animation="300" dragClass="dragClass"  ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
          <transition-group>
            <div class="item" v-for="item in arr1" :key="item.id">{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <draggable2></draggable2>
    </div>
  </div>
</template>
<script>
//导入draggable组件
import draggable from 'vuedraggable'
import draggable2 from './VueDraggable2'
export default {
  //注册draggable组件
  components: {
    draggable,
    draggable2
  },
  data() {
    return {
      drag:false,
      //定义要被拖拽对象的数组
      arr1:[
        {id:1,name:'www.itxst.com'},
        {id:2,name:'www.jd.com'},
        {id:3,name:'www.baidu.com'},
        {id:4,name:'www.taobao.com'}
      ]
    };
  },
  methods: {
    //开始拖拽事件
    onStart(){
      // this.drag=true;
    },
    //拖拽结束事件
    onEnd() {
      // this.drag=false;
    },
  },
};
</script>
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass{
  background-color:  blue !important;
}
.chosenClass{
  background-color: red !important;
  opacity: 1!important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
.itxst{
  margin: 10px;

}
.title{
  padding: 6px 12px;
}
.col{
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius:5px ;
  float: left;
}
.col+.col{
  margin-left: 10px;
}

.item{
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border:  solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover{
  background-color: #fdfdfd;
  cursor: move;
}
.item+.item{
  border-top:none ;
  margin-top: 6px;
}
</style>
