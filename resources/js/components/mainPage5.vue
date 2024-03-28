<template>
    <div
        class="w-full h-[1080px] mt-[180px] bg-[#161a1d] flex flex-col items-center text-center"
    >
        <p
            class="w-[809.69px] bg-gradient-to-r from-[#B6B7F7] to-[#7FB2FE] text-[56px] font-PretendBold leading-[80px] text-transparent bg-clip-text mt-[200px]"
        >
            Sandburg In News
        </p>
        <p
            class="w-[809.69px] text-[24px] font-PretendSemiBold leading-[85px] text-white"
        >
            언론에 비친 샌드버그를 만나보세요
        </p>
        <v-carousel
            height="320"
            cycle
            hide-delimiter-background
            class="mt-[100px]"
        >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet
                    :color="colors[i]"
                    height="100%"
                    @click="moveToNews(i)"
                >
                    <div
                        :class="`scale-[1.1] absolute inset-0 blur-md   ${imgsrc[i]} bg-cover`"
                    ></div>
                    <div
                        class="relative z-10 d-flex flex-col fill-height justify-center align-center"
                    >
                        <div class="text-[35px] font-PretendBold">
                            {{ slide }}
                        </div>
                        <div class="text-[24px] font-PretendSemiBold mt-5">
                            {{ years[i] }}
                        </div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
import { ref } from "vue";
import { useMoveToNews } from "../assets/utils/moveToNews";

export default {
    setup() {
        const { moveToNews } = useMoveToNews();

        const colors = ref([
            "indigo",
            "warning",
            "pink darken-2",
            "red lighten-1",
            "deep-purple accent-4",
        ]);
        const imgsrc = ref([
            "bg-[url('../js/assets/news/20230628.jpg')]",
            "bg-[url('../js/assets/news/20230511.png')]",
            "bg-[url('../js/assets/news/20220124.jpg')]",
            "bg-[url('../js/assets/news/20221220.png')]",
            "bg-[url('../js/assets/news/20211209.jpg')]",
            "bg-[url('../js/assets/news/20210705.jpg')]",
        ]);
        const years = ref([
            "2023.06.28",
            "2023.05.11",
            "2022.01.24",
            "2022.12.20",
            "2021.12.10",
            "2021.07.05",
        ]);
        const slides = ref([
            "[창업진흥원]온라인 소상공인의 디지털 전환을 돕는 기묘한 핀테크 회사, 샌드버그",
            "[ChannelPNU]부산 일자리 만드는 유니콘 기업되고 싶어",
            "[매거진한경]배호진 샌드버그 대표, 기부금 정보공개 플랫폼 개발, 퓨처이노베이션스쿨 통해 네트워크 쌓아",
            "[프라임경제]부산연합기술지주, 유망 스타트업 창업역량 및 투자유치 지원",
            "[더드라이브]스타벅스, 중소벤처기업부와 함께 '창업챌린지' 수상자 발표",
            "[이뉴스투데이]'2021학생 창업유망팀 300'... 부산대, 동남권 최다 8개 팀 선정",
        ]);

        return {
            colors,
            imgsrc,
            years,
            slides,
            moveToNews,
        };
    },
};
</script>
