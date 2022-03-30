<template>
    <ChildComponent5 ref="child_ref"/>
</template>

<script>
import ChildComponent5 from './ChildComponent5.vue'


export default {
    components: {
        ChildComponent5
    },
    computed: {
        msg() {
            return this.$refs.child_ref.msg;
        }
    },
}
</script>

<style>

</style>