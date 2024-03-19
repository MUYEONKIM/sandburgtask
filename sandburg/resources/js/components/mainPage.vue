<template>
    <pageHeader />
    <hr class="border-[1px] border-[#707070] relative z-20" />
    <mainPage1 />
    <div class="w-full flex flex-col items-center">
        <mainPage2 />
        <mainPage3 />
        <mainPage4 />
    </div>
    <mainPage5 />
</template>
<script>
import pageHeader from "./pageHeader.vue";
import mainPage1 from "./mainPage1.vue";
import mainPage2 from "./mainPage2.vue";
import mainPage3 from "./mainPage3.vue";
import mainPage4 from "./mainPage4.vue";
import mainPage5 from "./mainPage5.vue";

export default {
    components: {
        pageHeader,
        mainPage1,
        mainPage2,
        mainPage3,
        mainPage4,
        mainPage5,
    },
    methods: {
        goLogin() {
            this.$router.push("/login");
        },
        goRegister() {
            this.$router.push("/register");
        },
        goMessage() {
            this.$router.push("/message");
        },
    },
};
</script>
