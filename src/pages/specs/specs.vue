<template>
  <div>
    <el-button type="primary" class="mt" @click="willAdd">添加</el-button>
    <v-list @emit="emit($event)"></v-list>
    <v-form :info="info" ref="form"></v-form>
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
        title: "规格添加",
      },
    };
  },
  methods: {
    willAdd() {
      (this.info.isshow = true), (this.info.title = "规格添加");
    },
    emit(id) {
      this.info.title = "规格修改";
      this.info.isshow = true;
      this.$refs.form.getOne(id);
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>