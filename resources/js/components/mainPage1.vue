<template>
    <section
        class="h-[1080px] w-full font-PretendMedium flex justify-center items-center bg-[url('../js/assets/mainpage.png')] bg-cover bg-fixed"
    >
        <div
            class="h-full flex flex-col justify-center w-[1300px] items-center min-[1300px]:items-start"
        >
            <div
                class="flex flex-col min-[1300px]:items-start items-center text-white"
            >
                <p
                    class="inline-block mt-[3vh] text-[#5356FF] text-[56px] leading-[80px] font-PretendBold"
                >
                    SANDBURG
                </p>
                <p class="text-[24px] mt-[30px]">MISFIT ORGANIZATION</p>
                <p class="text-[24px] mt-[20px]">
                    국내 유일, 커머스와 핀테크를 잇는 데이터 전문기업
                    샌드버그입니다.
                </p>
                <p class="text-[24px]">
                    온라인 사장님들이 마주하는 사업의 모든 문제를 데이터와
                    연결로 해결하고자 합니다.
                </p>
            </div>
        </div>
    </section>
</template>
<script>
import { useMoveToPage } from "../assets/utils/moveToPage";

export default {
    setup() {
        const { moveToPage } = useMoveToPage();

        return {
            moveToPage,
        };
    },
};
</script>
