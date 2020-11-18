<template>
  <div>
    <el-button type="primary" @click="willAdd()" class="mt">添加</el-button>
    <v-list :list="list" @init="init" @edit='edit($event)'></v-list>
    <v-form :info="info" :list="list" @init="init" ref="form"></v-form>
  </div>
</template>

<script>
import vList from "./list/list";
import vForm from "./form/form";
import { mapActions, mapGetters } from "vuex";
import { reqMenuList } from "../../utils/http";
export default {
  data() {
    return {
      info: {
        isshow: false,
        title: "添加菜单",
      },
      list: [],
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    willAdd() {
      this.info.isshow = true;
      this.info.title="添加菜单"
    },
    init() {
      reqMenuList().then((res) => {
        this.list = res.data.list;
      });
    },
    edit(id){
      this.info.isshow=true
      this.info.title='编辑菜单'
      this.$refs.form.getOne(id)
    }
  },
  components: {
    vList,
    vForm,
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>