<template>
    <div v-if="width >= 768" class="pc w-full h-full">
        <p class="w-11/12 text-sm mx-auto my-2"
            style="font-size: 0.95vw; line-height: 5vh">Spring Madness Sale! $35K Closing Credit
            Through 04/30/2024! Offer valid only on to-be-built properties owned by Anchor Homes. Contract must be fully
            ratified and full deposit received by 04/30/2024.</p>
        <div class="line-one w-11/12 h-3/4 flex m-auto">
            <div class="img w-1/2 h-full flex justify-center items-center">
                <img :src="picData[0]['Link To File']" class="h-5/6 rounded" alt="">
            </div>
            <div class="info w-1/2 h-full flex justify-center items-center">
                <div class="card w-11/12 h-5/6 flex flex-col  p-2 rounded shadow-md hover:shadow-lg">
                    <p class="title w-full flex-grow font-bold text-center"
                        style="font-size: 1.2vw; ">{{ detail['Project Address'] }}
                    </p>
                    <p class="w-11/12 flex-grow leading-6  flex mx-auto"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/dollar.svg" alt=""> Price: {{ detail['List Price'].toLocaleString('en-US', {
                    style:
                        'currency', currency: 'USD'
                }) }}</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bath.svg" alt=""> Baths: {{ detail['Number Of Bathrooms'] }}</span>
                    </p>
                    <p class="w-11/12 flex-grow mx-auto leading-6 flex"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bed.svg" alt=""> Beds: {{ detail['Number Of Bedrooms'] }}</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/car.svg" alt=""> Garage: {{ detail['Number Of Garage'] }}</span>
                    </p>
                    <p class="w-11/12 flex-grow  mx-auto leading-6  flex"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/SQFT.svg" alt=""> SQFT: {{ detail['Total Finished SQFT'].toLocaleString() }}SQFT</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/ruler.svg" alt="">Lot Size: {{ detail['Lot Size Acres'] }} Acres</span>
                    </p>
                    <p class="w-11/12 flex-grow mx-auto leading-6  flex"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bed.svg" alt=""> Main Level Beds: {{ detail['Main Level Bedroom'] }}</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bath.svg" alt=""> Main Level Baths: {{ detail['Main Level Bathroom'] }}</span>
                    </p>
                    <p class="w-11/12 flex-grow mx-auto leading-6 flex"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bed.svg" alt=""> Upper Level Beds: {{ detail['Upper Level Bedroom'] }}</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bath.svg" alt=""> Upper Level Baths: {{ detail['Upper Level Bathroom'] }}</span>
                    </p>
                    <p class="w-11/12 flex-grow  mx-auto leading-6 flex"
                        style="font-size: 0.95vw; ">
                        <span class="flex items-center flex-grow"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bed.svg" alt=""> Lower Level Beds: {{ detail['Lower Level Bedroom'] }}</span>
                        <span class="flex items-center flex-grow justify-end"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bath.svg" alt=""> Lower Level Baths: {{ detail['Lower Level Bathroom'] }}</span>
                    </p>
                    <p class="btn-line flex-grow w-full flex">
                        <button type="button" @click="previewPdf(detail['Brochure'].url)" class="border w-1/4 rounded border-gray-300 flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1" style="width: 1.2vw; height: 1.2vw;" src="../../assets/book.svg" alt=""><span style=" font-size: 1.2vw;">BROCHURE</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/remote-home-tour')" type="button" class="border w-1/4 rounded border-gray-300 flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1" style="width: 1.2vw; height: 1.2vw;" src="../../assets/video.svg" alt=""><span style=" font-size: 1.2vw;">VIDEO TOUR</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/virtual-tour')" type="button" class="border w-1/4 rounded border-gray-300 flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1" style="width: 1.2vw; height: 1.2vw;" src="../../assets/virtual.svg" alt=""><span style=" font-size: 1.2vw;">VIRTUA TOUR</span></button>
                    </p>
                </div>
            </div>
        </div>

        <div class="w-11/12 h-fit mx-auto mt-8">
            <div class="w-full h-full rounded-lg shadow-md hover:shadow-xl pb-2">
                    <p class="w-full h-1/12 text-center my-2" style="font-size: 1.2v;">School And Other Info</p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span class="flex items-center"><img class="mr-2" style="width: 1vw; height: 1vw;" src="../../assets/SQFT.svg" alt=""> Above Grade Finished SQFT: {{ detail['Above Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span class="flex items-center"><img class="mr-2" style="width: 1vw; height: 1vw;" src="../../assets/SQFT.svg" alt=""> Below Grade Finished SQFT: {{ detail['Below Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span><i class="fa fa-graduation-cap"></i> Elementary School: {{ detail['Elementary School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span><i class="fa fa-graduation-cap"></i> Middle Or Junior School: {{ detail['Middle Or Junior School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span><i class="fa fa-graduation-cap"></i> High School: {{ detail['High School'] }}</span>
                    </p>
                    <p class="w-11/12 justify-between mx-auto leading-8 h-8 my-4 flex"
                        style="font-size: 1.2vw;">
                        <span><i class="fa fa-home"></i> Builder Model: {{ detail['Builder Model'] }}</span>
                    </p>
                    <hr/>
                    <p class="w-11/12 m-auto mt-3" style="font-size: 0.95vw; line-height: 5vh">{{
                        detail['Description'] }}</p>
                </div>
        </div>
        <div class="img-carousel w-11/12 h-4/5 m-auto mt-5 mb-5 flex">
            <div class="map-container w-1/2 h-full p-2" ref="mapContainer">
                <p class="w-full text-center mb-2" style="font-size: 1.2vw;">
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
                <p class="w-full text-center mb-2" style="font-size: 1.2vw;">
                    Gallery</p>
                <div class="carousel-container w-full h-2/3">
                    <el-carousel  @change="changeImage" ref="swiperRef" indicator-position="none" style="height: 100%;" :autoplay="false">
                        <el-carousel-item style="height: 100%;" v-for="(image, index) in picData"
                            :key="image['MLS House - Project - Street ID']">
                            <div class="w-full h-full">
                                <el-image style="width: 100%; height: 100%;" :src="image['Link To File']" fit="contain" :preview-teleported="true" :preview-src-list="[image['Link To File']]"></el-image>
                            </div>
                            <!-- <img :src="image['Link To File']" class="w-full h-full" alt=""> -->
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div tabindex="0" ref="previewRef" @keydown="pressKeyToggle($event)"
                    class="img-preview w-full h-1/3 overflow-x-scroll overflow-y-hidden flex items-center">
                    <div @click="picToggle(index)"
                        :class="{ border: index === picIndex, 'border-green-700': index === picIndex, active: index === picIndex }"
                        class=" w-1/4 h-4/5 flex-shrink-0 mx-2 hover:shadow hover:shadow-green-700"
                        v-for="(image, index) in picData" :key="image['MLS House - Project - Street ID']" :style="{ backgroundImage: `url(${image['Link To File']})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }">
                        <!-- <img :id="`i${index}`" class="w-full h-full object-cover" :src="image['Link To File']" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div v-else-if="width <= 1280 && width > 768">平板</div> -->
    <div v-else class="mobile w-full h-full">
        <p class="w-11/12 text-sm mx-auto font-bold my-2 leading-7" style=" ">
            Spring Madness Sale! $35K Closing Credit Through 04/30/2024! Offer valid only on to-be-built properties owned by Anchor Homes. Contract must be fully ratified and full deposit received by 04/30/2024.
        </p>
        <div class="img w-11/12 h-1/3 flex justify-center items-center mx-auto">
            <img :src="picData[0]['Link To File']" class="h-full w-full object-cover rounded" alt="">
        </div>
        <div class="card mx-auto my-4 w-11/12 h-2/3 flex flex-col p-2 rounded shadow-md hover:shadow-lg">
                    <p class="title w-full font-bold text-center text-xs flex-grow"
                        style="">{{ detail['Project Address'] }}
                    </p>
                    <p class="w-11/12 justify-between leading-6 flex mx-auto text-xs items-center flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/dollar.svg" alt=""> Price: {{ detail['List Price'].toLocaleString('en-US', {style:'currency', currency: 'USD'}) }}</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/bath.svg" alt=""> Baths: {{ detail['Number Of Bathrooms'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 flex flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/bed.svg" alt=""> Beds: {{ detail['Number Of Bedrooms'] }}</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/car.svg" alt=""> Garage: {{ detail['Number Of Garage'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 flex flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/SQFT.svg" alt=""> SQFT: {{ detail['Total Finished SQFT'].toLocaleString() }}SQFT</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/ruler.svg" alt=""> Lot Size: {{ detail['Lot Size Acres'] }} Acres</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 flex flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bed.svg" alt=""> Main Level Beds: {{ detail['Main Level Bedroom'] }}</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bath.svg" alt=""> Main Level Baths: {{ detail['Main Level Bathroom'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 flex flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bed.svg" alt=""> Upper Level Beds: {{ detail['Upper Level Bedroom'] }}</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bath.svg" alt=""> Upper Level Baths: {{ detail['Upper Level Bathroom'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 flex flex-grow"
                        style="">
                        <span class="flex items-center flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bed.svg" alt=""> Lower Level Beds: {{ detail['Lower Level Bedroom'] }}</span>
                        <span class="flex items-center justify-end flex-grow"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/bath.svg" alt=""> Lower Level Baths: {{ detail['Lower Level Bathroom'] }}</span>
                    </p>
                    <p class="btn-line w-full flex flex-grow">
                        <button type="button"
                            class="border w-1/3 rounded border-gray-300 text-xs flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/book.svg" alt=""><span
                                style="">BROCHURE</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/remote-home-tour')" type="button"
                            class="border w-1/3 rounded border-gray-300 text-xs flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/video.svg" alt=""><span
                                style="">VIDEO
                                TOUR</span></button>
                        <button @click="locationToggle('https://www.myanchorhomes.com/virtual-tour')" type="button"
                            class="border w-1/3 rounded border-gray-300 text-xs flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/virtual.svg" alt=""><span
                                style="">VIRTUAI
                                TOUR</span></button>
                    </p>
        </div>
        <hr class="w-11/12 mx-auto my-4">
        <div class="w-11/12 mx-auto my-4 h-fit rounded-lg shadow-md hover:shadow-xl pb-2">
                    <p class="w-full h-1/12 text-center my-2 text-xs" style="">School And Other Info</p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span class="flex items-center"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/SQFT.svg" alt=""> Above Grade Finished SQFT: {{ detail['Above Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span class="flex items-center"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/SQFT.svg" alt=""> Below Grade Finished SQFT: {{ detail['Below Grade Finished SQFT'].toLocaleString() }} SQFT</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span><i class="fa fa-graduation-cap"></i> Elementary School: {{ detail['Elementary School'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span><i class="fa fa-graduation-cap"></i> Middle Or Junior School: {{ detail['Middle Or Junior School'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span><i class="fa fa-graduation-cap"></i> High School: {{ detail['High School'] }}</span>
                    </p>
                    <p class="w-11/12 text-xs justify-between mx-auto leading-6 h-8 my-2 flex"
                        style="">
                        <span><i class="fa fa-home"></i> Builder Model: {{ detail['Builder Model'] }}</span>
                    </p>
                </div>
                <hr class="w-11/12 mx-auto my-4">
                <div class="w-11/12 mx-auto my-4 h-1/3 rounded-lg bg-transparent">
                    <p class="w-full text-center mb-2 text-sm" style="height: 10%;">
                    Gallery</p>
                    <van-swipe style="height: 90%;" class="my-swipe" autoplay="3000" :show-indicators="false">
                        <van-swipe-item @click="mobilePicPreview(image)"  v-for="(image, index) in picData" :key="image['MLS House - Project - Street ID']">
                            <img class="w-full h-full object-cover rounded" :src="image['Link To File']" alt="">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <hr class="w-11/12 mx-auto my-4">
                <div class="w-11/12 mx-auto my-4 h-fit rounded-lg shadow-md hover:shadow-xl pb-2">
                    <p class="w-full text-center mb-2 text-sm" style="">
                        Description</p>
                    <p class="w-11/12 text-xs m-auto mt-3 leading-7" style="">{{
                        detail['Description'] }}</p>
                </div>
                <hr class="w-11/12 mx-auto my-4">
                <div class="w-11/12 mx-auto my-4 h-1/2 rounded-lg shadow-md hover:shadow-xl pb-2">
                    <p class="w-full text-center mb-2 text-sm" style="">
                    Direction</p>
                    <GoogleMap api-key="AIzaSyDag9MI2Ss2T52lYGcWI2-uKXDlIpco3fY" style="width: 100%; height: 100%"
                        :center="{ lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]) }"
                        :zoom="16">
                        <Marker
                            :options="{ position: { lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]), label: detail['Project Address'], title: detail['Project Address'] } }">
                        </Marker>
                    </GoogleMap>
                </div>
    </div>
</template>

<script setup>
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map'
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import httpObj from '../../api/api';
import { processData } from '../../hooks';
const route = useRoute()
const filedNum = []
for (let i = 11; i < 47; i++) {
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

function changeImage(index){
    picIndex.value = index;
    document.querySelector('.active').scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' })

}

const user = computed(() => {
    const ua = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
})

const width = computed(() => {
    return window.innerWidth;
})
function previewPdf(url){
    const a = document.createElement('a');
    a.href = 'https://anchorhomes.quickbase.com' + url;
    a.target = '_blank';
    a.click();
}

// 移动端轮播
// const mobilePicIndex = ref(0);
// const vanSwiperRef = ref(null);
function mobilePicPreview(image) {
    showImagePreview([image['Link To File']]);
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

/* 修改滚动条的样式 */
.img-preview::-webkit-scrollbar {
  width: 1px !important;
  /* 设置滚动条的宽度 */
}

/* 滚动条轨道 */
.img-preview::-webkit-scrollbar-track {
  background: transparent;
  /* 设置轨道的背景颜色 */
}

/* 滚动条滑块 */
.img-preview::-webkit-scrollbar-thumb {
  background: #888;
  /* 设置滑块的背景颜色 */
  border-radius: 6px;
  /* 设置滑块的圆角 */
}

/* 滚动条滑块悬停时的样式 */
.img-preview::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* 设置滑块悬停时的背景颜色 */
}
</style>