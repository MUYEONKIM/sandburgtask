<template>
    <div>
        <pageHeader :class="headerClass" :isScrolled="isScrolled" />
        <router-view></router-view>
        <pageFooter />
    </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import pageHeader from "./layout/pageHeader.vue";
import pageFooter from "./layout/pageFooter.vue";
export default {
    name: "app",
    components: {
        pageHeader,
        pageFooter,
    },
    setup() {
        const isScrolled = ref(false);
        const route = useRoute();

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 0;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        const headerClass = computed(() => {
            if (route.path === "/") {
                return `z-10 fixed top-0 ${
                    isScrolled.value
                        ? "bg-white text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                        : " text-white"
                }`;
            } else {
                return "sticky top-0 bg-white z-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] ";
            }
        });

        // setup 함수에서는 사용할 변수와 함수들을 반환해주어야 합니다.
        return {
            isScrolled,
            headerClass,
        };
    },
};
</script>
