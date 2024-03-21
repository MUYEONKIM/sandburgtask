<template>
    <img src="../assets/team.jpg" class="w-full h-[300px] object-cover" />
    <div class="w-full flex justify-center mb-[150px]">
        <div class="w-[1300px] flex flex-col items-start">
            <p
                class="font-PretendBold text-[34px] mt-[50px] w-full text-center"
            >
                Member / Welfare
            </p>
            <div class="w-full border-b-2 border-black mt-[20px]"></div>

            <div
                class="w-full flex items-center p-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mt-[50px]"
            >
                <p class="font-PretendSemiBold text-[20px] p-4">
                    기업이 처한 다양한 환경을 분석해, 알맞은 서비스를 효과적으로
                    제공하며<br />
                    목표를 달성할 수 있도록 전문 조직을 구축해 해결하고
                    있습니다.
                </p>
            </div>
            <div class="flex flex-col w-full mt-[100px] p-4">
                <p class="font-PretendBold text-[28px]">Member</p>
                <hr class="w-[60%] border-gray-500 mt-[10px]" />
                <div class="flex mt-[50px] flex-col min-[1300px]:flex-row">
                    <section
                        v-for="(member, i) in members"
                        :key="i"
                        class="font-PretendMedium text-[20px] flex w-full justify-evenly mt-[40px]"
                    >
                        <div class="">
                            <v-avatar
                                color="surface-variant"
                                size="200"
                            ></v-avatar>
                            <div class="pl-5 pt-5">
                                <p class="font-PretendBold">
                                    {{ member.name }}
                                </p>
                                <p
                                    class="font-PretendRegular text-[18px] mt-[5px]"
                                >
                                    {{ member.position }}
                                </p>
                                <hr class="w-[40%] border-gray-500 mt-[5px]" />
                                <p
                                    class="font-PretendRegular text-[16px] mt-[20px]"
                                >
                                    {{ member.job }}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <br />
                <section class="mt-[100px]">
                    <p class="font-PretendBold text-[28px]">Welfare</p>
                    <hr class="w-[60%] border-gray-500 mt-[10px]" />
                    <div class="">
                        <img
                            src="../assets/welfare.png"
                            class="mt-[100px] object-fill"
                        />
                    </div>
                </section>
                <section class="mt-[100px]">
                    <p class="font-PretendBold text-[28px]">Location</p>
                    <hr class="w-[60%] border-gray-500 mt-[10px]" />
                    <div class="flex mt-[50px] font-PretendMedium">
                        <kakaoMap :mapWidth="`700px`" />
                        <div
                            class="ml-[50px] w-[50%] h-[550px] flex flex-col justify-between"
                        >
                            <p class="p-5 text-[20px]">
                                샌드버그는 위워크 BIFC에 위치하고 있으며,<br />
                                4월 1일 부산진구 중앙대로 615 평광빌딩 20층으로
                                확장할 예정입니다. <br /><br />넓고 개인의 업무
                                공간이 보장된 공간에서 쾌적하게 업무에 집중할 수
                                있습니다.
                            </p>
                            <div class="flex w-full">
                                <div class="rounded-[24px] border-2">
                                    <img
                                        src="../assets/images/office1.png"
                                        class="rounded-[24px]"
                                    />
                                </div>
                                <div class="ml-[20px] rounded-[24px] border-2">
                                    <img
                                        src="../assets/images/office2.jpg"
                                        class="rounded-[24px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import kakaoMap from "../components/kakaoMap.vue";
export default {
    components: {
        kakaoMap,
    },
    data() {
        return {
            members: [
                { name: "김영희", position: "이사", job: "CEO" },
                { name: "홍길동", position: "과장", job: "FrontEngineer" },
                { name: "김무연", position: "대리", job: "BackendEngineer" },
                { name: "전지현", position: "사원", job: "Designer" },
                { name: "박보검", position: "사원", job: "Marketer" },
            ],
        };
    },
};
</script>
