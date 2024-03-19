<template>
    <div class="h-auto">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            isScrolled: false,
            text: "qweqweqweqq",
        };
    },
};
</script>
