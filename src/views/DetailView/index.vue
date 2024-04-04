<template>
    <div class="w-full h-full">
        <p class="w-11/12 text-sm mx-auto my-2 leading-7"
            style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">Spring Madness Sale! $35K Closing Credit
            Through 04/30/2024! Offer valid only on to-be-built properties owned by Anchor Homes. Contract must be fully
            ratified and full deposit received by 04/30/2024.</p>
        <div class="line-one w-11/12 h-3/4 flex m-auto">
            <div class="img w-1/2 h-full flex justify-center items-center">
                <img :src="picData[0]['Link To File']" class="h-5/6 rounded" alt="">
            </div>
            <div class="info w-1/2 h-full flex justify-center items-center">
                <div class="card w-11/12 h-5/6  p-2 rounded shadow-md hover:shadow-lg">
                    <p class="title w-full font-bold text-center"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">{{ detail['Project Address'] }}
                    </p>
                    <p class="w-11/12 justify-between leading-6 h-8 my-4 flex mx-auto"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-dollar"></i> Price: {{ detail['List Price'].toLocaleString('en-US', {
                    style:
                        'currency', currency: 'USD'
                }) }}</span>
                        <span><i class="fa fa-bath"></i> Baths: {{ detail['Number Of Bathrooms'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-4 flex"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-bed"></i> Beds: {{ detail['Number Of Bedrooms'] }}</span>
                        <span><i class="fa fa-home"></i> Garage: {{ detail['Number Of Garage'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-4 flex"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-square"></i> SQFT: {{ detail['Total Finished SQFT'].toLocaleString() }}
                            SQFT</span>
                        <span><i class="fa fa-home"></i> Lot Size: {{ detail['Lot Size Acres'] }} Acres</span>
                    </p>
                    <hr>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-bed"></i> Main Level Beds: {{ detail['Main Level Bedroom'] }}</span>
                        <span><i class="fa fa-bath"></i> Main Level Baths: {{ detail['Main Level Bathroom'] }}</span>
                    </p>
                    <hr>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-bed"></i> Upper Level Beds: {{ detail['Upper Level Bedroom'] }}</span>
                        <span><i class="fa fa-bath"></i> Upper Level Baths: {{ detail['Upper Level Bathroom'] }}</span>
                    </p>
                    <hr>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-bed"></i> Lower Level Beds: {{ detail['Lower Level Bedroom'] }}</span>
                        <span><i class="fa fa-bath"></i> Lower Level Baths: {{ detail['Lower Level Bathroom'] }}</span>
                    </p>
                    <p class="btn-line w-full h-16 mt-2 flex">
                        <button type="button"
                            class="border w-1/4 rounded border-gray-300 flex flex-col items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><i
                                style="font-size: 1.2vw;" class="fa m-auto fa-book"></i><span
                                style="font-family: 'Reddit Mono', monospace; font-size: 1.2vw;">BROCHURE</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/remote-home-tour')" type="button"
                            class="border w-1/4 rounded border-gray-300 flex flex-col items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><i
                                style="font-size: 1.2vw;" class="fa m-auto fa-video-camera"></i><span
                                style="font-family: 'Reddit Mono', monospace; font-size: 1.2vw;">VIDEO
                                TOUR</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/virtual-tour')" type="button"
                            class="border w-1/4 rounded border-gray-300 flex flex-col items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><i
                                style="font-size: 1.2vw;" class="fa m-auto fa-rotate-left"></i><span
                                style="font-family: 'Reddit Mono', monospace; font-size: 1.2vw;">VIRTUAI
                                TOUR</span></button>
                    </p>
                </div>
            </div>
        </div>

        <div class="w-11/12 mx-auto mt-8">
            <div class="w-full h-full rounded-lg shadow-md hover:shadow-xl">
                    <p class="w-full h-1/12 text-center my-2" style="font-size: 1.2vw;font-family: 'Reddit Mono', monospace;">School And Other Info</p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-square"></i> Above Grade Finished SQFT: {{ detail['Above Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-square"></i> Below Grade Finished SQFT: {{ detail['Below Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-graduation-cap"></i> Elementary School: {{ detail['Elementary School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-graduation-cap"></i> Middle Or Junior School: {{ detail['Middle Or Junior School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-graduation-cap"></i> High School: {{ detail['High School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="font-size: 1.2vw; font-family: 'Reddit Mono', monospace;">
                        <span><i class="fa fa-home"></i> Builder Model: {{ detail['Builder Model'] }}</span>
                    </p>
                    <hr/>
                    <p class="w-11/12 text-sm m-auto leading-7" style="font-size: 0.95vw; font-family: 'Reddit Mono', monospace;">{{
                        detail['Description'] }}</p>
                </div>
        </div>
        <div class="img-carousel w-11/12 h-4/5 m-auto mt-5 mb-5 flex">
            <div class="map-container w-1/2 h-full p-2" ref="mapContainer">
                <p class="w-full text-center mb-2" style="font-size: 1.2vw;font-family: 'Reddit Mono', monospace;">
                    Direction</p>
                <GoogleMap api-key="AIzaSyDag9MI2Ss2T52lYGcWI2-uKXDlIpco3fY" style="width: 100%; height: 100%"
                    :center="{ lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]) }"
                    :zoom="16">
                    <Marker
                        :options="{ position: { lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]), label: detail['Project Address'], title: detail['Project Address'] } }">
                    </Marker>
                </GoogleMap>

            </div>
            <div class="img-container w-1/2 h-full p-2">
                <p class="w-full text-center mb-2" style="font-size: 1.2vw;font-family: 'Reddit Mono', monospace;">
                    Gallery</p>
                <div class="carousel-container w-full h-2/3">
                    <el-carousel ref="swiperRef" indicator-position="none" style="height: 100%;" :autoplay="false">
                        <el-carousel-item style="height: 100%;" v-for="(image, index) in picData"
                            :key="image['MLS House - Project - Street ID']">
                            <img :src="image['Link To File']" class="h-full w-full" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div tabindex="0" ref="previewRef" @keydown="pressKeyToggle($event)"
                    class="img-preview w-full h-1/3 overflow-x-scroll overflow-y-hidden flex items-center">
                    <div @click="picToggle(index)"
                        :class="{ border: index === picIndex, 'border-green-700': index === picIndex, active: index === picIndex }"
                        class=" w-1/4 h-4/5 flex-shrink-0 mx-2 hover:shadow hover:shadow-green-700"
                        v-for="(image, index) in picData" :key="image['MLS House - Project - Street ID']">
                        <img :id="`i${index}`" class="h-full object-contain" :src="image['Link To File']" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map'
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import httpObj from '../../api/api';
import { processData } from '../../hooks';
const route = useRoute()
const filedNum = []
for (let i = 11; i < 46; i++) {
    filedNum.push(i)
}
const detail = ref({})
const picData = ref([])
const picIndex = ref(0)
const swiperRef = ref()
const previewRef = ref()
async function initDetail() {
    const res = await httpObj.sendPost('/records/query', {
        from: 'btwxxiycs',
        select: [6, 7, 8, ...filedNum],
        where: `{7.EX."${route.params.id === '6800' ? '6800 ' : route.params.id}"}`
    })
    detail.value = processData(res.data.data, res.data.fields)[0]
}
async function getPic() {
    const res = await httpObj.sendPost('/records/query', {
        from: 'btwxxjnn4',
        select: [6, 7, 8, 9, 10, 11],
        where: `{8.EX.'${route.params.id === '6800' ? '6800 ' : route.params.id }'}`
    })
    picData.value = processData(res.data.data, res.data.fields)
    console.log(picData.value)
}
initDetail()
getPic()
function picToggle(index) {
    picIndex.value = index
    swiperRef.value.setActiveItem(index)
}
function pressKeyToggle(e) {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    if (e.target === previewRef.value) {
        if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
            picIndex.value === 0 ? picIndex.value = picData.value.length - 1 : picIndex.value--
        } else {
            picIndex.value === picData.value.length - 1 ? picIndex.value = 0 : picIndex.value++
        }
        picToggle(picIndex.value)
        document.querySelector('.active').scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
}


function locationToggle(url) {
    window.location.href = url;
}
</script>

<style scoped>
:deep(.el-carousel__container) {
    height: 100% !important;
}
/* 修改滚动条的样式 */
::-webkit-scrollbar {
  width: 1px;
  /* 设置滚动条的宽度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: transparent;
  /* 设置轨道的背景颜色 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #888;
  /* 设置滑块的背景颜色 */
  border-radius: 6px;
  /* 设置滑块的圆角 */
}

/* 滚动条滑块悬停时的样式 */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* 设置滑块悬停时的背景颜色 */
}
</style>