<template>
  <h2>{{ title }}</h2>
  <h3>{{ myArray }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "페이지 제목입니다."
    },
    myArray: {
      type: Array,
      default: new Array('1', '2', '3'),
    }
  }
}
</script>

<style>

</style>