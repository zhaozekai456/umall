<template>
  <div>
    <el-button type="primary" class="mt" @click="willAdd">添加</el-button>
    <v-list @init='newInit' :list='list' @emit='emit($event)'></v-list>
    <el-pagination @current-change="changePage" background layout="prev, pager, next" :total="total" :page-size="size"></el-pagination>
    <v-form :info='info' @init='newInit' ref='form'></v-form>
  </div>
</template>

<script>
import {reqUserlist,reqUserCount} from '../../utils/http'
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
        title:'添加管理员'
      },
      list:[],
      total:0,
      size:2,
      page:1
    }
  },
  methods: {
    willAdd(){
      this.info.isshow=true,
      this.info.title='添加管理员'
    },
    init(){
      reqUserlist({ page: this.page, size: this.size }).then(res=>{
        let list=res.data.list?res.data.list:[]

        if(list.length===0&&this.page>1){
          this.page--;
          this.init();
          return;
        }
        this.list=list
      })
    },
    getCount(){
       reqUserCount().then(res=>{
         this.total=res.data.list[0].total
       })
    },
    newInit(){
      this.init()
      this.getCount()
    },
    changePage(page){
      this.page=page;
      this.init()
    },
    emit(id){
      this.info.title='编辑管理员'
      this.info.isshow=true
      this.$refs.form.getOne(id)
    }
  },
  mounted(){
    this.init()
    this.getCount()
  }
};
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>