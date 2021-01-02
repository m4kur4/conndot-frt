<template>
    <Nuxt />
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            hoge: 'hoge'
        }
    },
    computed: {
        ...mapState(['humans'])
    }
}
</script>
