<template>
    <div class="flex flex-col items-center">
        <mainPage1 />
        <mainPage2 />
        <mainPage3 />
        <mainPage4 />
        <mainPage5 />
        <mainPage6 />
    </div>
</template>
<script>
import mainPage1 from "../components/mainPage1.vue";
import mainPage2 from "../components/mainPage2.vue";
import mainPage3 from "../components/mainPage3.vue";
import mainPage4 from "../components/mainPage4.vue";
import mainPage5 from "../components/mainPage5.vue";
import mainPage6 from "../components/mainPage6.vue";

export default {
    components: {
        mainPage1,
        mainPage2,
        mainPage3,
        mainPage4,
        mainPage5,
        mainPage6,
    },
};
</script>
