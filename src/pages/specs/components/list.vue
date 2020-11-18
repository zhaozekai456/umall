<template>
  <div class="table">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="规格编号" sortable width="120">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" sortable width="120">
      </el-table-column>
      <el-table-column label="规格属性" sortable width="700">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.attrs" :key="item">{{
            item
          }}</el-tag>
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
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { successAlert } from "@/utils/alert";
import { reqspecsdelete } from "@/utils/http";
export default {
  computed: {
    ...mapGetters({
      list: "specs/list",
      total: "specs/total",
      size: "specs/size",
    }),
  },
  methods: {
    ...mapActions({
      reqlist: "specs/reqlist",
      changePage: "specs/changePage",
      reqcount: "specs/reqcount",
    }),
    del(id) {
      reqspecsdelete(id).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.reqlist();
          this.reqcount();
        }
      });
    },
    edit(id) {
      this.$emit("emit", id);
    },
  },
  mounted() {
    this.reqlist();
    this.reqcount();
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