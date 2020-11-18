<template>
  <div>
    <el-button type="primary" class="mt" @click="willAdd">添加</el-button>
    <v-list @init='init' :list='list' @emit='emit($event)'></v-list>
    <v-form :info='info' @init='init' ref='form'></v-form>
  </div>
</template>

<script>
import {reqRoleList} from '../../utils/http'
import vForm from "./components/form";
import vList from "./components/list";
export default {
  components: {
    vForm,
    vList,
  },
  data() {
    return {
      info:{
        isshow:false,
        title:'添加角色'
      },
      list:[]
    }
  },
  methods: {
    willAdd(){
      this.info.isshow=true,
      this.info.title='添加角色'
    },
    init(){
      reqRoleList().then(res=>{
        this.list=res.data.list
      })
    },
    emit(id){
      this.info.title='角色修改'
      this.info.isshow=true
      this.$refs.form.getOne(id)
    }
  },
  mounted(){
    this.init()
  }
};
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>