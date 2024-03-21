<template>
    <div
        class="h-[1080px] bg-white w-full text-black font-PretendMedium relative"
    >
        <div class="h-full flex items-center flex-col text-center">
            <p class="mt-[100px] text-[56px] leading-[80px] font-PretendBold">
                Sandburg Workspace
            </p>
            <p class="text-[24px] mt-[20px]">부산 최고의 근무지 Wework BIFC</p>
            <kakaoMap class="mt-[30px]" />

            <button
                @click="moveToPage('/team')"
                class="h-[60px] w-[206px] font-PretendBold text-[20px] bg-[#6250FF] mt-9 text-white rounded-[44px] hover:scale-105 duration-300"
            >
                -> &nbsp;ABOUT Inc.
            </button>
        </div>
    </div>
</template>
<script>
import kakaoMap from "./kakaoMap.vue";
import { useMoveToPage } from "../assets/utils/moveToPage";

export default {
    components: {
        kakaoMap,
    },
    setup() {
        const { moveToPage } = useMoveToPage();

        return {
            moveToPage,
        };
    },
};
</script>
