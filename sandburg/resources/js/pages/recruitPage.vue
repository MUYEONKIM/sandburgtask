<template>
    <img src="../assets/recruit.jpg" class="w-full h-[300px] object-cover" />
    <div class="w-full flex justify-center">
        <div class="w-[1420px] flex flex-col items-start">
            <p class="font-PretendBold text-[34px] mt-[50px]">채용</p>
            <div class="w-full border-b-2 border-black mt-[20px]"></div>
            <p class="font-PretendSemiBold text-[24px]">
                G & A (General & Administartion) Team
            </p>
            <v-card>
                <v-data-iterator :items="recruit1">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col v-for="item in items" :key="item.title">
                                    <v-card class="pb-3" border flat>
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
            <p class="font-PretendSemiBold text-[24px]">
                R & D (Research & Development) Team
            </p>
            <v-card>
                <v-data-iterator :items="recruit2">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row dense>
                                <v-col
                                    v-for="item in items"
                                    :key="item.title"
                                    cols="auto"
                                    md="4"
                                >
                                    <v-card class="pb-3" border flat>
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
            <p class="font-PretendSemiBold text-[24px]">
                S & M (Sales & Marketing) Team
            </p>
            <v-card>
                <v-data-iterator :items="recruit1">
                    <template v-slot:default="{ items }">
                        <v-container class="pa-2" fluid>
                            <v-row dense>
                                <v-col
                                    v-for="item in items"
                                    :key="item.title"
                                    cols="auto"
                                    md="4"
                                >
                                    <v-card class="pb-3" border flat>
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
                title: "Undefined",
                subtitle: "Undefined",
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
    }),
};
</script>
