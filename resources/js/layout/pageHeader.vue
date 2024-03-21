<template>
    <div class="w-full flex items-center justify-center">
        <div
            class="w-[1300px] flex items-center h-20 text-[20px] font-PretendSemiBold justify-between"
        >
            <div @click="goHome">
                <mainicon class="w-[80px]" :color="iconColor" />
            </div>
            <div class="ml-auto flex h-full">
                <router-link
                    :class="[
                        'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
                        {
                            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
                                routePath === '/about',
                        },
                    ]"
                    to="/about"
                    >About</router-link
                >
                <router-link
                    :class="[
                        'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
                        {
                            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
                                routePath === '/solution',
                        },
                    ]"
                    to="/solution"
                    >Solution</router-link
                >
                <router-link
                    :class="[
                        'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
                        {
                            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
                                routePath === '/team',
                        },
                    ]"
                    to="/team"
                    >Team</router-link
                >
                <router-link
                    :class="[
                        'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
                        {
                            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
                                routePath === '/recruit',
                        },
                    ]"
                    to="/recruit"
                    >Recruit</router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import mainicon from "../assets/svg/mainicon.vue";
export default {
    components: {
        mainicon,
    },
    props: {
        isScrolled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const route = useRoute(); // 현재 라우트 객체에 접근
        const router = useRouter();
        // 경로가 변경될 때마다 반응하도록 computed 속성 사용
        const routePath = computed(() => {
            console.log(route.path);
            return route.path;
        });

        const iconColor = computed(() => {
            if (routePath.value === "/") {
                return props.isScrolled ? "black" : "white";
            }
            return undefined; // 다른 경로에서는 color prop의 기본값을 사용
        });

        const goHome = () => {
            router.push("/");
        };

        return {
            routePath,
            iconColor,
            goHome,
        };
    },
};
</script>
