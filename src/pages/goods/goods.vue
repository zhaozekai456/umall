<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-form :info="info"></v-form>
    <v-list></v-list>
  </div>
</template>

<script>
import vForm from "./components/form";
import vList from "./components/list";
export default {
  components: {
    vForm,
    vList,
  },
  data() {
    return {
      info: {
        isshow: false,
        title: "添加商品",
      },
    };
  },
  methods: {
    add() {
      this.info.isshow = true;
      this.info.title = "添加商品";
    },
  },
};
</script>

<style scoped>
.el-button {
  margin-top: 20px;
}
</style>