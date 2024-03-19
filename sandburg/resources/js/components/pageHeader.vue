<template>
    <div
        class="flex items-center h-20 text-[20px] font-PretendSemiBold"
        :class="{
            'bg-black': color === 'main',
            'bg-white': color === 'notMain',
            'text-[#D9D9D9]': fontColor === 'main',
            'text-black': fontColor === 'notMain',
        }"
    >
        <div>로고넣을자리</div>
        <div class="ml-[201px] flex h-full">
            <router-link
                class="w-[192px] h-full border-[#4E43ED] border-b-2 flex items-center justify-center text-[#4E43ED]"
                to="/message"
                v-if="$route.path === '/message'"
                >메시지</router-link
            >
            <router-link
                class="w-[192px] h-full flex items-center justify-center"
                to="/message"
                v-else
                >메시지</router-link
            >
            <router-link
                class="w-[192px] h-full border-[#4E43ED] border-b-2 flex items-center justify-center text-[#4E43ED]"
                to="/credit"
                v-if="$route.path === '/credit'"
                >크레딧</router-link
            >
            <router-link
                class="w-[192px] h-full flex items-center justify-center"
                to="/credit"
                v-else
                >크레딧</router-link
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
        },
        fontColor: {
            type: String,
        },
    },
};
</script>
