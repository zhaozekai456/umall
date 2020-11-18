<template>
  <el-table :data="list" stripe style="width: 100%">
    <el-table-column prop="id" label="用户编号" width="100"> </el-table-column>
    <el-table-column prop="nickname" label="昵称"> </el-table-column>
    <el-table-column prop="phone" label="手机号"> </el-table-column>
    <el-table-column label="状态">
      <template v-slot="scope">
        <el-button type="primary" v-if="scope.row.status === 1">启用</el-button>
        <el-button type="info" v-else>禁用</el-button>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template v-slot="scope">
        <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "vip/list",
    }),
  },
  methods: {
    ...mapActions({
      reqlist: "vip/reqlist",
    }),
    edit(id) {
      this.$emit('emit',id)
    },
  },
  mounted() {
    this.reqlist();
  },
};
</script>

<style>
</style>