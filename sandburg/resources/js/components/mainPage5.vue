<template>
    <div
        class="h-[1080px] mt-[225px] bg-black flex flex-col justify-center items-center text-center"
    >
        <!-- <p
            class="w-[809.69px] bg-gradient-to-r from-[#B6B7F7] to-[#7FB2FE] text-[64px] font-PretendBold leading-[85px] text-transparent bg-clip-text"
        >
            비지니스 광고의 시작,<br />
            이제 샌드고와 함께 하세요
        </p>
        <button
            class="h-[65px] w-[206px] mt-[66px] bg-[#6250FF] rounded-[44px] text-[21px] text-white"
            @click="goMessage"
        >
            메시지 바로가기
        </button> -->
        <v-carousel
            height="400"
            show-arrows="hover"
            cycle
            hide-delimiter-background
        >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <div
                        class="d-flex flex-col fill-height justify-center align-center"
                    >
                        <div class="text-h2">{{ slide }}</div>
                        <div class="text-h2">{{ years[i] }}</div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4",
            ],
            years: [
                "2023.06.28",
                "2023.05.11",
                "2022.01.24",
                "2022.12.20",
                "2021.12.10",
                "2021.07.05",
            ],
            slides: [
                "[창업진흥원]온라인 소상공인의 디지털 전환을 돕는 기묘한 핀테크 회사, 샌드버그",
                "[ChannelPNU]부산 일자리 만드는 유니콘 기업되고 싶어",
                "[매거진한경]배호진 샌드버그 대표, 기부금 정보공개 플랫폼 개발, 퓨처이노베이션스쿨 통해 네트워크 쌓아",
                "[프라임경제]부산연합기술지주, 유망 스타트업 창업역량 및 투자유치 지원",
                "[더드라이브]스타벅스, 중소벤처기업부와 함께 '창업챌린지' 수상자 발표",
                "[이뉴스투데이]'2021학생 창업유망팀 300'... 부산대, 동남권 최다 8개 팀 선정",
            ],
        };
    },
};
</script>
