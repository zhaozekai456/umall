<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow" @closed='closed'>
      <el-form :model="user">
        <el-form-item label="角色名称" label-width="120px">
          <el-input v-model="user.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" label-width="120px">
          <el-tree
            :data="menuList"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="{ children: 'children', label: 'title' }"
          >
          </el-tree>
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
        <el-button type="primary" v-if="info.title == '添加角色'" @click="add"
          >添 加</el-button
        >
        <el-button type="primary" v-else @click="edit">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { successAlert } from "@/utils/alert";
import {
  reqMenuList,
  reqRoleAdd,
  reqRoleInfo,
  reqRoleEdit,
} from "../../../utils/http";
export default {
  props: ["info"],
  data() {
    return {
      user: {
        rolename: "",
        menus: "",
        status: 2,
      },
      menuList: [],
    };
  },
  methods: {
    cancel() {
      this.info.isshow = false;
    },
    empty() {
      this.user = {
        rolename: "",
        menus: "",
        status: 2,
      };
      this.$refs.tree.setCheckedKeys([]);
    },
    add() {
      this.user.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleAdd(this.user).then((res) => {
        if (res.data.code == 200) {
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    getOne(id) {
      reqRoleInfo(id).then((res) => {
        this.user = res.data.list;
        if (this.user.menus === "undefined") {
          this.$refs.tree.setCheckedKeys([]);
        } else {
          this.$refs.tree.setCheckedKeys(JSON.parse(this.user.menus));
        }
        this.user.id = id;
      });
    },
    edit() {
      this.user.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleEdit(this.user).then((res) => {
        successAlert(res.data.msg);
        this.cancel();
        this.empty();
        this.$emit("init");
      });
    },
    closed() {
      if (this.info.title === "角色修改") {
        this.empty();
      }
    },
  },
  mounted() {
    reqMenuList().then((res) => {
      if (res.data.code == 200) {
        this.menuList = res.data.list;
      }
    });
  },
};
</script>

<style>
</style>