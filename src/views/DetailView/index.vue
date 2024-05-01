<template>
    <div v-if="width > 1024" class="pc w-full h-full pb-4">
        <div class="container w-full mx-auto h-full flex justify-center overflow-y-scroll  pt-3 relative">
            <div class="col-left w-4/5">
                <p class="my-2 text-center" style="font-size: 1.2vw;">{{ detail['Project Address'] }}</p>
                <div class="img hover:border hover:border-gray-300 p-1 rounded-lg w-11/12 mx-auto h-2/3 flex">
                    <div class="carsouel h-full w-4/5">
                        <el-carousel @change="changeImage" ref=swiperRef style="height: 100%; width: 100%;" indicator-position="none" arrow="always" :autoplay="false">
                          <el-carousel-item v-for="(img, index) in picData" :key="index">
                            <el-image :hide-on-click-modal="true" fit="contain" style="width: 100%; height: 100%;" :preview-teleported="true" :initial-index="index" :preview-src-list="picData.map(item => item['Link To File'])" :src="img['Link To File']"></el-image>
                          </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="preview h-full w-1/5 overflow-y-scroll flex flex-col" tabindex="0" ref="previewRef" @keydown="pressKeyToggle($event)">
                        <div class="img-container w-full h-1/4 flex justify-center items-center" v-for="(img, index) in picData" :class="{ border: index === picIndex, 'border-green-700': index === picIndex, active: index === picIndex }" @click="picToggle(index)">
                            <img :src="img['Link To File']" class="object-contain w-4/5 h-4/5"  alt="">
                        </div>
                    </div>
                </div>
                <div class="tab-container hover:shadow-lg w-11/12 h-fit my-4 mx-auto shadow">
                    <el-tabs @tab-click="tabClick" v-model="detailName" type="border-card" style="width: 100%; font-size: 1.1vw;" tab-position="top">
                        <el-tab-pane label="Details" name="first">
                            <div class="details w-full h-full">
                                <p class="w-full p-2 text-center" style="font-size: 1.5vw;" >Details</p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-dollar mr-2"></span>Price: {{ detail['List Price']?.toLocaleString('en-US', {style:'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0}) }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-bathroom-fill mr-2"></span>Baths: {{ detail['Number Of Bathrooms'] }}</span>
                                </p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-Bed-1 mr-2"></span>Beds: {{ detail['Number Of Bedrooms'] }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-garage mr-2"></span>Garage: {{ detail['Number Of Garage'] }}</span>
                                </p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-sqft mr-2"></span>SQFT: {{ detail['Total Finished SQFT']?.toLocaleString() }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-feature-lot-size mr-2"></span>Lot Size: {{ detail['Lot Size Acres'] }}</span>
                                </p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-Bed-1 mr-2"></span>Main Level Bedrooms: {{ detail['Main Level Bedroom'] }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-bathroom-fill mr-2"></span>Main Level Bathrooms: {{ detail['Main Level Bathroom'] }}</span>
                                </p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-Bed-1 mr-2"></span>Upper Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-bathroom-fill mr-2"></span>Upper Level Bathrooms: {{ detail['Upper Level Bathroom'] }}</span>
                                </p>
                                <p class="w-full flex justify-around border-b p-2 my-2">
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-Bed-1 mr-2"></span>Lower Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                                    <span class="flex items-center w-1/2"><span style="font-size: 1.25vw;" class="iconfont icon-bathroom-fill mr-2"></span>Lower Level Bathrooms: {{ detail['Lower Level Bathroom'] }}</span>
                                </p>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Description" name="second">
                            <p class="w-full p-2 text-center" style="font-size: 1.5vw;" >Description</p>
                            <p class="w-full p-2" style="line-height: 2.2vw;">{{ detail['Description'] }}</p>
                        </el-tab-pane>
                        <el-tab-pane label="Other Details" name="third">
                            <div class="details w-full h-full">
                                <p class="w-full p-2 text-center" style="font-size: 1.5vw;" >Other Details</p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-sqft mr-2"></span> Above Grade Finished SQFT: {{ detail['Above Grade Finished SQFT']?.toLocaleString() }} SQFT</span>
                                </p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-sqft mr-2"></span> Below Grade Finished SQFT: {{ detail['Below Grade Finished SQFT']?.toLocaleString() }} SQFT</span>
                                </p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-elementary-school-4 mr-2"></span> Elementary School: {{ detail['Elementary School'] }}</span>
                                </p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-_huabanfuben mr-2"></span> Middle Or Junior School: {{ detail['Middle Or Junior School'] }}</span>
                                </p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-high-school-1 mr-2"></span> High School: {{ detail['High School'] }}</span>
                                </p>
                                <p class="w-full flex justify-start border-b p-2 my-2">
                                    <span class="flex"><span style="font-size: 1.25vw;" class="iconfont icon-bg-model mr-2"></span> Builder Model: {{ detail['Builder Model'] }}</span>
                                </p>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="map-container w-11/12 h-full border mx-auto">
                    <iframe v-if="detail['Google Map Link']" :src="detail['Google Map Link']" width="100%" height="100%" frameborder="0"></iframe>
                    <div style="font-size: 1vw;" v-else class="w-full h-full flex flex-col justify-center items-center">
                        <CircleClose style="height: 20vh; width: 10vw;" ></CircleClose>
                        This map is not available!
                    </div>
                </div>
            </div>
            <div class="col-right w-1/5 sticky top-0 h-fit p-3 ml-2">
                <p style="font-size: 0.95vw; font-weight: bold;" class="border hover:border-gray-500 p-2 rounded-lg shadow">
                    Spring Madness Sale! $35K Closing Credit
            Through 04/30/2024! Offer valid only on to-be-built properties owned by Anchor Homes. Contract must be fully
            ratified and full deposit received by 04/30/2024.
                </p>
                <div style="font-size: 1vw;" class="view-other w-full h-fit flex flex-col justify-center items-center border shadow mt-3 p-2 rounded-lg">
                    <button @click="previewPdf" type="button" class="border w-11/12 mb-2 rounded-lg hover:shadow" style="height: 5vh;" >
                        <span style="font-size: 1.25vw;" class="iconfont icon-Brochure mr-2"></span>
                        <span>BROCHURE</span>
                    </button>
                    <button @click="locationToggle('https://www.myanchorhomes.com/remote-home-tour')" type="button" class="border w-11/12 mb-2 rounded-lg hover:shadow" style="height: 5vh;" >
                        <span style="font-size: 1.25vw;" class="iconfont icon-video_fill mr-2"></span>
                        <span>VIDEO TOUR</span>
                    </button>
                    <button @click="locationToggle('https://www.myanchorhomes.com/virtual-tour')" type="button" class="border w-11/12 mb-2 rounded-lg hover:shadow" style="height: 5vh;" >
                        <span style="font-size: 1.25vw;" class="iconfont icon-virtual-reality mr-2"></span>
                        <span>VIRTUAL TOUR</span>
                    </button>
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
        <div class="card mx-auto my-4 w-11/12 h-fit flex flex-col p-2 rounded shadow-md hover:shadow-lg">
                    <p class="title w-full font-bold my-2 text-center text-xs"
                        style="font-size: 0.8rem;">{{ detail['Project Address'] }}
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-dollar mr-2"></span>Price: {{ detail['List Price']?.toLocaleString('en-US', {style:'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0}) }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-bathroom-fill mr-2"></span>Baths: {{ detail['Number Of Bathrooms'] }}</span>
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-Bed-1 mr-2"></span>Beds: {{ detail['Number Of Bedrooms'] }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-garage mr-2"></span>Garage: {{ detail['Number Of Garage'] }}</span>
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-sqft mr-2"></span>SQFT: {{ detail['Total Finished SQFT']?.toLocaleString() }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-feature-lot-size mr-2"></span>Lot Size: {{ detail['Lot Size Acres'] }}</span>
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-Bed-1 mr-2"></span>Main Level Bedrooms: {{ detail['Main Level Bedroom'] }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-bathroom-fill mr-2"></span>Main Level Bathrooms: {{ detail['Main Level Bathroom'] }}</span>
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-Bed-1 mr-2"></span>Upper Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-bathroom-fill mr-2"></span>Upper Level Bathrooms: {{ detail['Upper Level Bathroom'] }}</span>
                    </p>
                    <p class="w-full flex justify-around border-b p-2 my-2" style="font-size: 0.65rem;">
                        <span class="flex items-center w-1/2"><span class="iconfont icon-Bed-1 mr-2"></span>Lower Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                        <span class="flex items-center w-1/2"><span class="iconfont icon-bathroom-fill mr-2"></span>Lower Level Bathrooms: {{ detail['Lower Level Bathroom'] }}</span>
                    </p>
                    <p class="btn-line w-full flex" style="height: 6vh;">
                        <button type="button"
                            class="border w-1/3 rounded border-gray-300 text-xs flex items-center justify-center mx-auto hover:shadow-lg hover:bg-gray-100"><img class="mr-1"style="width: 0.75rem; height: 0.75rem;" src="../../assets/book.svg" alt=""><span
                                style="" @click="previewPdf">BROCHURE</span></button>
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
                <!-- <div class="w-11/12 mx-auto my-4 h-1/2 rounded-lg shadow-md hover:shadow-xl pb-2">
                    <p class="w-full text-center mb-2 text-sm" style="">
                    Direction</p>
                    <GoogleMap api-key="AIzaSyDag9MI2Ss2T52lYGcWI2-uKXDlIpco3fY" style="width: 100%; height: 100%"
                        :center="{ lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]) }"
                        :zoom="16">
                        <Marker
                            :options="{ position: { lat: Number(detail['Google Map Location Code'].split(',')[0]), lng: Number(detail['Google Map Location Code'].split(',')[1]), label: detail['Project Address'], title: detail['Project Address'] } }">
                        </Marker>
                    </GoogleMap>
                </div> -->
                <div class="map-container w-11/12 h-full border mx-auto">
                    <iframe v-if="detail['Google Map Link']" :src="detail['Google Map Link']" width="100%" height="100%" frameborder="0"></iframe>
                    <div style="font-size: 1vw;" v-else class="w-full h-full flex flex-col justify-center items-center">
                        <CircleClose style="height: 20vh; width: 10vw;" ></CircleClose>
                        This map is not available!
                    </div>
                </div>
    </div>
</template>

<script setup>
import { CircleClose } from '@element-plus/icons-vue'
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map'
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue'
import httpObj from '../../api/api';
import { processData } from '../../hooks';
import { ElMessage } from 'element-plus';
const route = useRoute()
const filedNum = []
for (let i = 11; i < 48; i++) {
    filedNum.push(i)
}
const detailName = ref('first')
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
        select: [3, 6, 7, 8, 9, 10, 11, 12, 13],
        where: `{8.EX.'${route.params.id === '6800' ? '6800 ' : route.params.id }'}`
    })
    picData.value = processData(res.data.data, res.data.fields)
    picData.value.forEach(item => {
        if(item['Pic_Number'] === null){
            item['Pic_Number'] = 3;
        }
    })
    picData.value = picData.value.sort((a, b) => {
        if(a['Pic_Number'] === b['Pic_Number']){
            return a['Record ID#'] - b['Record ID#'];
        }
        return a['Pic_Number'] - b['Pic_Number']
    })
    console.log(picData.value)
}
initDetail()
getPic()
function picToggle(index) {
    picIndex.value = index
    swiperRef.value.setActiveItem(index)
}
function pressKeyToggle(e) {
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();
    if (e.target === previewRef.value) {
        if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
            picIndex.value === 0 ? picIndex.value = picData.value.length - 1 : picIndex.value--
        } else {
            picIndex.value === picData.value.length - 1 ? picIndex.value = 0 : picIndex.value++
        }
        picToggle(picIndex.value)
        document.querySelector('.active').scrollIntoView({ behavior: 'smooth', block: 'center' })
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
// 预览pdf
const pdfUrl = ref('');
async function previewPdf(){
    const res = await httpObj.sendGet(`${detail.value['Brochure'].url}`)
    if(res.status === 200){
        // 将 base64 数据转换为 Blob 对象
        const byteCharacters = atob(res.data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });

        // 创建一个 URL 对象，并设置给 window.open() 方法
        const url = URL.createObjectURL(blob);
        if(width.value < 1024 ){
            const a = document.createElement('a');
            a.href = url;
            a.download = `${detail.value['Project Address']}.pdf`;
            a.click();
            a.remove()
        } else {
            window.open(url, '_blank');
        }
    } else {
        ElMessage({
            type: 'error',
            message: 'Something went wrong!'
        })
    }
    // const a = document.createElement('a');
    // a.href = 'https://anchorhomes.quickbase.com' + url;
    // a.target = '_blank';
    // a.click();
}

function tabClick(pane, e){
    detailName.value = e.target.innerText;
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