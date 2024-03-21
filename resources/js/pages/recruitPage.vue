<template>
    <img src="../assets/recruit.jpg" class="w-full h-[300px] object-cover" />
    <div class="w-full flex justify-center mb-[150px]">
        <div class="w-[1300px] flex flex-col items-start">
            <p
                class="font-PretendBold text-[34px] mt-[50px] w-full text-center"
            >
                채용
            </p>
            <div class="w-full border-b-2 border-black mt-[20px]"></div>
            <div
                class="w-full flex items-center p-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mt-[50px]"
            >
                <p
                    class="font-PretendSemiBold text-[20px] p-4 w-full text-center"
                >
                    데이터와 IT로 세상을 바꿀 열정을 가진 여러분을 모시고
                    싶습니다!
                </p>
            </div>
            <p class="font-PretendSemiBold text-[24px] mt-[80px]">
                G & A (General & Administartion) Team
            </p>
            <hr class="w-[60%] border-gray-500 mt-[10px]" />
            <v-card class="w-[100%] mt-[10px]" flat>
                <v-data-iterator :items="recruit1">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row dense>
                                <v-col
                                    v-for="item in items"
                                    :key="item.title"
                                    cols="auto"
                                    class="transition duration-300 ease-in-out hover:scale-105"
                                >
                                    <v-card
                                        class="pb-3 mr-2 w-[300px]"
                                        border
                                        flat
                                    >
                                        <div class="h-[250px]">
                                            <v-img
                                                src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F50230afc-ad5b-4721-8782-37c926de6310%2F4e76700e-939c-4cc6-8da9-00064bfe32a0%2FUntitled.jpeg&blockId=2a0603fa-b6ad-4c14-96df-5142b3398cc4"
                                                cover
                                            ></v-img>
                                        </div>

                                        <v-list-item
                                            :subtitle="item.raw.subtitle"
                                            class="mb-2"
                                        >
                                            <template v-slot:title>
                                                <strong class="text-h6 mb-2">{{
                                                    item.raw.title
                                                }}</strong>
                                            </template>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </template>
                </v-data-iterator>
            </v-card>
            <p class="font-PretendSemiBold text-[24px] mt-[80px]">
                R & D (Research & Development) Team
            </p>
            <hr class="w-[60%] border-gray-500 mt-[10px]" />
            <v-card class="w-[100%] mt-[10px]" flat>
                <v-data-iterator :items="recruit2">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row dense>
                                <v-col
                                    v-for="item in items"
                                    :key="item.title"
                                    cols="auto"
                                    class="max-w-xs transition duration-300 ease-in-out hover:scale-105"
                                >
                                    <v-card
                                        border
                                        class="pb-3 mr-[6px] w-[300px]"
                                        flat
                                    >
                                        <div class="h-[250px]">
                                            <v-img
                                                src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F50230afc-ad5b-4721-8782-37c926de6310%2F4e76700e-939c-4cc6-8da9-00064bfe32a0%2FUntitled.jpeg&blockId=2a0603fa-b6ad-4c14-96df-5142b3398cc4"
                                                cover
                                            ></v-img>
                                        </div>

                                        <v-list-item
                                            :subtitle="item.raw.subtitle"
                                            class="mb-2"
                                        >
                                            <template v-slot:title>
                                                <strong class="text-h6 mb-2">{{
                                                    item.raw.title
                                                }}</strong>
                                            </template>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </template>
                </v-data-iterator>
            </v-card>
            <p class="font-PretendSemiBold text-[24px] mt-[80px]">
                S & M (Sales & Marketing) Team
            </p>
            <hr class="w-[60%] border-gray-500 mt-[10px]" />
            <v-card class="w-[100%] mt-[10px]" flat>
                <v-data-iterator :items="recruit3">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row dense>
                                <v-col
                                    v-for="item in items"
                                    :key="item.title"
                                    cols="auto"
                                    class="max-w-xs transition duration-300 ease-in-out hover:scale-105"
                                >
                                    <v-card
                                        class="pb-3 mr-2 w-[300px]"
                                        border
                                        flat
                                    >
                                        <div class="h-[250px]">
                                            <v-img
                                                src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F50230afc-ad5b-4721-8782-37c926de6310%2F4e76700e-939c-4cc6-8da9-00064bfe32a0%2FUntitled.jpeg&blockId=2a0603fa-b6ad-4c14-96df-5142b3398cc4"
                                                cover
                                            ></v-img>
                                        </div>

                                        <v-list-item
                                            :subtitle="item.raw.subtitle"
                                            class="mb-2"
                                        >
                                            <template v-slot:title>
                                                <strong class="text-h6 mb-2">{{
                                                    item.raw.title
                                                }}</strong>
                                            </template>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </template>
                </v-data-iterator>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        search: "",
        recruit1: [
            {
                title: "Administartion",
                subtitle: "5년 이상",
            },
        ],
        recruit2: [
            {
                title: "Backend Engineer",
                subtitle: "1년 이상",
            },
            {
                title: "Frontend Engineer",
                subtitle: "1년 이상",
            },
        ],
        recruit3: [
            {
                title: "Marketer",
                subtitle: "2년 이상",
            },
        ],
    }),
};
</script>
