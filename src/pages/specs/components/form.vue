<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow" @closed="closed">
      <el-form :model="user">
        <el-form-item label="规格名称" label-width="120px">
          <el-input v-model="user.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="规格属性"
          label-width="120px"
          v-for="(item, index) in attrArr"
          :key="index"
        >
          <div class="line">
            <el-input v-model="item.value" autocomplete="off"></el-input>
            <el-button type="primary" v-if="index == 0" @click="attradd"
              >新增规格属性</el-button
            >
            <el-button type="danger" v-else @click="attrdel(index)"
              >删除</el-button
            >
          </div>
        </el-form-item>
        <el-form-item label="状态" label-width="120px">
          <el-switch
            v-model="user.status"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" v-if="info.title == '规格添加'" @click="add"
          >添 加</el-button
        >
        <el-button type="primary" v-else @click="edit">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { successAlert } from "@/utils/alert";
import { reqspecsadd, reqspecsinfo, reqspecsedit } from "../../../utils/http";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      list: "specs/list",
    }),
  },
  data() {
    return {
      user: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      attrArr: [{ value: "" }],
    };
  },
  methods: {
    ...mapActions({
      reqlist: "specs/reqlist",
      reqcount: "specs/reqcount",
    }),
    attradd() {
      this.attrArr.push({
        value: "",
      });
    },
    attrdel(i) {
      this.attrArr.splice(i, 1);
    },
    cancel() {
      this.info.isshow = false;
    },
    empty() {
      this.user = {
        specsname: "",
        attrs: "",
        status: 1,
      };
    },
    add() {
      this.user.attrs = JSON.stringify(this.attrArr.map((item) => item.value));
      reqspecsadd(this.user).then((res) => {
        if (res.data.code == 200) {
          successAlert("添加成功");
          this.cancel();
          this.empty();
          this.reqlist();
          this.reqcount();
        }
      });
    },
    getOne(id) {
      reqspecsinfo(id).then((res) => {
        this.user = res.data.list[0];
        this.attrArr = JSON.parse(this.user.attrs).map((item) => ({
          value: item,
        }));
      });
    },
    edit() {
      this.user.attrs = JSON.stringify(this.attrArr.map((item) => item.value));
      reqspecsedit(this.user).then((res) => {
        successAlert("修改成功");
        this.cancel();
        this.empty();
        this.reqlist();
      });
    },
    closed() {
      if (this.info.title === "规格修改") {
        this.empty();
      }
    },
  },
  mounted() {
    this.reqlist();
  },
};
</script>

<style scoped>
.line {
  display: flex;
}
.line .el-input {
  flex: 1;
}
.line .el-button {
  width: auto;
}
</style>