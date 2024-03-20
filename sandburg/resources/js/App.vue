<template>
    <div>
        <pageHeader />
        <router-view></router-view>
    </div>
</template>
<script>
import pageHeader from "./layout/pageHeader.vue";

export default {
    name: "app",
    components: {
        pageHeader,
    },
    data() {
        return {
            isScrolled: false,
        };
    },
};
</script>
