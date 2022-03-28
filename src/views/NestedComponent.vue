<template>
  <div>
      <PageTitleVue :title="title" :myArray="[234, 266,  273]"/>
  </div>
</template>

<script>
import PageTitleVue from '../components/PageTitle.vue'

export default {
    components: {
        PageTitleVue
    },
    data() {
        return {
            title: '동적 페이지 타이틀',
        }
    }
}
</script>

<style>

</style>