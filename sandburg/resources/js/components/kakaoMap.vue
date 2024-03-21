<template>
    <div
        id="map"
        :style="{ width: mapWidth, height: mapHeight }"
        class="text-black rounded-[24px] border-2"
    ></div>
</template>
<script>
export default {
    name: "KakaoMap",
    props: {
        mapWidth: {
            type: String,
            default: "1000px",
        },
        mapHeight: {
            type: String,
            default: "600px",
        },
    },
    data() {
        return {
            markerPositions1: [[33.452278, 126.567803]],
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
                    '<div style="padding:5px; ">Sandburg Office<br/>부산광역시 남구 전포대로 133, 14층 116호</div>',
            });

            this.map = new kakao.maps.Map(container, options);
            infowindow.open(this.map, marker);
            marker.setMap(this.map);
        },
    },
};
</script>
