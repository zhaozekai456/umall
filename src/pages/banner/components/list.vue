<template>
  <div class="table">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
    >
      <el-table-column prop="id" label="编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="轮播图标题" sortable width="180">
      </el-table-column>
      <el-table-column prop="img" label="图片" sortable width="500">
        <template v-slot="scope">
          <img
            :src="$imgPre + scope.row.img"
            alt=""
            v-if="scope.row.img != 'null'"
          />
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template v-slot="scope">
          <el-button type="primary" v-if="scope.row.status === 1"
            >启用</el-button
          >
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <del-btn @confirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { successAlert } from "@/utils/alert";
import { reqbannerdelete } from "@/utils/http";
export default {
  computed: {
    ...mapGetters({
      list: "banner/list",
    }),
  },
  methods: {
    ...mapActions({
      reqlist: "banner/reqlist",
    }),
    del(id) {
      reqbannerdelete(id).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.reqlist();
        }
      });
    },
    edit(id) {
      this.$emit("emit", id);
    },
  },
  mounted() {
    this.reqlist();
  },
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
img {
  width: 80px;
  height: 80px;
}
</style>