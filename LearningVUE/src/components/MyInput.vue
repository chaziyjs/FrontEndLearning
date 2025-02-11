<!-- eslint-disable vue/block-lang -->
<template>
  <div class="my-input">
    <v-text-field type="input" ref="inp" v-bind ="$attrs" >
      <template v-for="(value, name) in $slots" #name="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-text-field>
  </div>
</template>
<style scoped>
.my-input {
  transition: 0.3s;
}
.my-input:hover,
.my-input:focus-within {
  filter: drop-shadow(0 0 3px #333);
}
</style>
<script>
export default {
  mounted() {
    Object.entries(this.$refs.inp).forEach(([key, value]) => {
      console.log(key, value);
      this[key] = value;
    });
  },
}
</script>
