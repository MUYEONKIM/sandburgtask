<template>
    <div class="fixed bottom-14 right-16 z-20">
        <button
            @click="scrollToTop"
            class="w-[50px] h-[50px] p-2 bg-[#9FBAFD] hover:bg-blue-400 hover:scale-105 duration-150 font-PretendMedium rounded-[24px]"
        >
            <p class="text-[18px] text-black">🔝</p>
        </button>
    </div>
</template>

<script>
export default {
    setup() {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return {
            scrollToTop,
        };
    },
};
</script>
