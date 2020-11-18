<template>
  <el-dialog title="会员修改" :visible.sync="info.tag">
    <el-form :model="user">
      <el-form-item label="手机号" label-width="120px">
        <el-input v-model="user.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" label-width="120px">
        <el-input v-model="user.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="120px">
        <el-input v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" label-width="120px">
        <el-switch v-model="user.status" :active-value="1" :inactive-value="2">
        </el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="edit">修 改</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { reqmemberinfo, reqmemberedit } from "@/utils/http";
import { mapActions, mapGetters } from "vuex";
import { successAlert } from "../../../utils/alert";
export default {
  computed: {
    ...mapGetters({
      list: "vip/list",
    }),
  },
  data() {
    return {
      user: {
        nickname: "",
        phone: "",
        password: "",
        status: 1,
      },
    };
  },
  methods: {
    ...mapActions({
      reqlist: "vip/reqlist",
    }),
    empty() {
      this.user = {
        nickname: "",
        phone: "",
        password: "",
        status: 1,
      };
    },
    getOne(id) {
      reqmemberinfo(id).then((res) => {
        this.user = res.data.list;
        this.user.password = "";
        //  console.log(res)
      });
    },
    edit() {
      reqmemberedit(this.user).then((res) => {
        if (res.data.code == 200) {
          successAlert("修改成功");
          this.cancel();
          this.reqlist()
        }
      });
    },
    cancel() {
      this.info.tag = false;
      this.empty();
    },
  },
  props: ["info"],
};
</script>

<style>
</style>