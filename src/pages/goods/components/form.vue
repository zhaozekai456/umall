<template>
  <el-dialog :title="info.title" :visible.sync="info.isshow">
    <el-form :model="user">
      <el-form-item label="一级分类" label-width="120px">
        <el-select v-model="user.first_cateid" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类" label-width="120px">
        <el-select v-model="user.second_cateid" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称" label-width="120px">
        <el-input v-model="user.goodsname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" label-width="120px">
        <el-input v-model="user.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="市场价格" label-width="120px">
        <el-input v-model="user.market_price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图片" label-width="120px">
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-change="changeFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品规格" label-width="120px">
        <el-select v-model="user.specsid" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="规格属性" label-width="120px">
        <el-select v-model="user.specsattr" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否新品" label-width="120px">
        <el-radio v-model="user.isnew" :label="1">是</el-radio>
        <el-radio v-model="user.isnew" :label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否热卖" label-width="120px">
        <el-radio v-model="user.ishot" :label="1">是</el-radio>
        <el-radio v-model="user.ishot" :label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="状态" label-width="120px">
        <el-switch v-model="user.status" :active-value="1" :inactive-value="2">
        </el-switch>
      </el-form-item>
      <el-form-item label="商品描述" label-width="120px">
        <div id="div1"></div>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" v-if="info.title == '添加商品'"
        >添 加</el-button
      >
      <el-button type="primary" v-else>修 改</el-button>
    </div>
  </el-dialog>
</template>

<script>
import E from "wangeditor";
export default {
  props: ["info"],
  data() {
    return {
      user: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: null,
        description: "",
        specsid: "",
        specsattr: "",
        isnew: 1,
        ishot: 1,
        status: 1,
      },
      imgUrl: "",
    };
  },
  methods: {
    cancel() {
      this.info.isshow = false;
    },
    changeFile(e) {
      this.imgUrl = URL.createObjectURL(e.raw);
      this.user.img = e.raw;
    },
  },
  mounted() {
    const editor = new E(document.getElementById("div1"));
    editor.create();
  },
};
</script>

<style scoped lang='stylus'>
.myupload {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 1px dashed #ccc;
  position: relative;
}

.myupload h3 {
  width: 100%;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  color: #666;
  font-weight: 100;
}

.myupload .ipt {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.myupload .img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}

.add >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>