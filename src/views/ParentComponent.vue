<template>
  <ChildComponent @send-message="sendMessage" ref="child_component_test" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
    components: {
        ChildComponent
    },
    mounted() {
        this.$refs.child_component_test.$refs.btn.click();
    }
}
</script>

<style>

</style>