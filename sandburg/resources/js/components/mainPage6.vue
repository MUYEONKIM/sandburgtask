<template>
    <div
        class="h-[999px] bg-black w-full text-white font-PretendMedium relative"
    >
        <div
            class="h-full flex items-center flex-col justify-center text-center"
        >
            <p
                class="mt-[3vh] text-white text-[56px] leading-[80px] font-PretendBold"
            >
                Sandburg Workspace
            </p>
            <p class="text-[24px] text-[#FCFCFC]">
                부산 최고의 근무지 Wework BIFC
            </p>
            <div id="map" class="w-[1200px] h-[700px] text-black"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "KakaoMap",
    data() {
        return {
            markerPositions1: [[33.452278, 126.567803]],
            markers: [],
        };
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=973c62c100a0ebbe886384d8c7dcf130";
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(
                    35.148262577794924,
                    129.0652960574159
                ),
                level: 2,
            };

            const marker = new window.kakao.maps.Marker({
                position: options.center,
            });

            var infowindow = new kakao.maps.InfoWindow({
                position: options.center,
                content:
                    '<div style="padding:5px; ">부산광역시 남구 전포대로 133, 14층 116호</div>',
            });

            this.map = new kakao.maps.Map(container, options);
            infowindow.open(this.map, marker);
            marker.setMap(this.map);
        },
    },
};
</script>
