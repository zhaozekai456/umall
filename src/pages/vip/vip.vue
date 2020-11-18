<template>
  <div>
    <v-form :info="info" ref="form"></v-form>
    <v-list @emit='emit($event)'></v-list>
  </div>
</template>

<script>
import vForm from "./components/form";
import vList from "./components/list";
export default {
  data() {
    return {
      info: { tag: false },
    };
  },
  methods: {
      emit(id){
          this.info.tag=true
          this.$refs.form.getOne(id)
      }
  },
  components: {
    vForm,
    vList,
  },
};
</script>

<style>
</style>