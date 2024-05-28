<template>
    <el-skeleton v-if="skeletonVisible" :animated="true" :rows="10" />
    <div v-else class="content-container relative w-full h-full text-xs px-2 md:text-sm lg:text-base overflow-y-scroll">
        <div class="pic-container hidden md:block w-[100%] aspect-[5/2]">
            <el-carousel :autoplay="false" style="width: 100%; height: 100%;">
                <el-carousel-item v-for="(item, index) in Math.ceil(picData?.length / 6)" :key="item">
                    <div class="item-son w-full h-full grid grid-cols-3 grid-rows-2 gap-2">
                        <div v-for="(item2, index2) in 6" class="">
                            <img @click="previewImg(picData[index * 6 + index2]?.['Link To File'])"
                                :src="picData[index * 6 + index2]?.['Link To File']" class="w-full h-full object-cover"
                                alt="">
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 移动轮播 -->
        <div class="md:hidden w-full">123</div>
        <div class="w-full h-full flex">
            <div class="col-left w-[80%] h-full">
                <p class="md:text-lg text-center mx-auto my-4 w-[100%]">{{ detail['Project Address'] }}</p>
                <div class="md:w-[100%] w-full mx-auto h-[50%]  py-2">
                    <p class="text-center leading-6 text-base my-3 md:text-lg">Details</p>
                    <div class="w-full h-[90%] grid grid-cols-2 grid-rows-6 gap-1">
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-dollar mr-2"></span>Price: {{ detail['List Price']?.toLocaleString('en-US', {style:'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0}) }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-bathroom-fill mr-2"></span>Baths: {{ detail['Number Of Bathrooms'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-Bed-1 mr-2"></span>Beds: {{ detail['Number Of Bedrooms'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-garage mr-2"></span>Garage: {{ detail['Number Of Garage'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-sqft mr-2"></span>SQFT: {{ detail['Total Finished SQFT']?.toLocaleString() }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-feature-lot-size mr-2"></span>Lot Size: {{ detail['Lot Size Acres'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-Bed-1 mr-2"></span>Main Level Bedrooms: {{ detail['Main Level Bedroom'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-bathroom-fill mr-2"></span>Main Level Bathrooms: {{ detail['Main Level Bathroom'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-Bed-1 mr-2"></span>Upper Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-bathroom-fill mr-2"></span>Upper Level Bathrooms: {{ detail['Upper Level Bathroom'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-Bed-1 mr-2"></span>Lower Level Bedrooms: {{ detail['Upper Level Bedroom'] }}</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-bathroom-fill mr-2"></span>Lower Level Bathrooms: {{ detail['Lower Level Bathroom'] }}</span>
                        </div>
                    </div>

                </div>
                <div class="md:w-[100%] w-full mx-auto h-[30%]  py-2">
                    <p class="text-center leading-6 text-base my-3 md:text-lg">Other Details</p>
                    <div class="w-full h-[90%] grid grid-cols-2 grid-rows-3 gap-1">
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-sqft mr-2"></span> Above Grade Finished SQFT: {{ detail['Above Grade Finished SQFT']?.toLocaleString() }} SQFT</span>
                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-sqft mr-2"></span> Below Grade Finished SQFT: {{ detail['Below Grade Finished SQFT']?.toLocaleString() }} SQFT</span>

                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-elementary-school-4 mr-2"></span> Elementary School: {{ detail['Elementary School'] }}</span>

                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-_huabanfuben mr-2"></span> Middle Or Junior School: {{ detail['Middle Or Junior School'] }}</span>

                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-high-school-1 mr-2"></span> High School: {{ detail['High School'] }}</span>

                        </div>
                        <div class="flex w-full h-full">
                            <span class="flex items-center "><span  class="iconfont icon-bg-model mr-2"></span> Builder Model: {{ detail['Builder Model'] }}</span>

                        </div>
                    </div>
                </div>
                <div class="md:w-[100%] w-full pb-3 h-fit  mx-auto px-2 md:px-0">
                    <p class="text-center leading-6 text-base my-3 md:text-lg">Description</p>
                    <p style="font-family: 'Font3';" class=" leading-6">{{ detail['Description'] }}</p>
                </div>
                <div class="iframe-container w-full md:w-[100%] mx-auto my-4 h-full">
                    <iframe v-if="detail['Google Map Link']" class="w-full h-full" :src="detail['Google Map Link']"
                        frameborder="0"></iframe>
                    <div v-else class="w-full h-full flex flex-col justify-center items-center">
                        <CircleClose style="height: 20vh; width: 10vw;"></CircleClose>
                        This map is not available!
                    </div>
                </div>
            </div>
            <div class="col-right w-[20%] h-full">
                <div class="hidden md:flex flex-col sticky my-2 w-[100%] h-[20%] top-0 rounded">
                    <button @click="previewPdf" type="button" class="border w-full mb-2 rounded-lg hover:shadow"
                        style="height: 5vh;">
                        <span  class="iconfont icon-Brochure mr-2"></span>
                        <span>BROCHURE</span>
                    </button>
                    <button @click="locationToggle('https://www.myanchorhomes.com/remote-home-tour')" type="button"
                        class="border w-full mb-2 rounded-lg hover:shadow" style="height: 5vh;">
                        <span  class="iconfont icon-video_fill mr-2"></span>
                        <span>VIDEO TOUR</span>
                    </button>
                    <button @click="locationToggle('https://www.myanchorhomes.com/virtual-tour')" type="button"
                        class="border w-full mb-2 rounded-lg hover:shadow" style="height: 5vh;">
                        <span  class="iconfont icon-virtual-reality mr-2"></span>
                        <span>VIRTUAL TOUR</span>
                    </button>
                </div>
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
const skeletonVisible = ref(true)
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
    skeletonVisible.value = false
    console.log(detail);
}
async function getPic() {
    const res = await httpObj.sendPost('/records/query', {
        from: 'btwxxjnn4',
        select: [3, 6, 7, 8, 9, 10, 11, 12, 13],
        where: `{8.EX.'${route.params.id === '6800' ? '6800 ' : route.params.id}'}`
    })
    picData.value = processData(res.data.data, res.data.fields)
    picData.value.forEach(item => {
        if (item['Pic_Number'] === null) {
            item['Pic_Number'] = 3;
        }
    })
    picData.value = picData.value.sort((a, b) => {
        if (a['Pic_Number'] === b['Pic_Number']) {
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

function changeImage(index) {
    picIndex.value = index;
    document.querySelector('.active').scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })

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
async function previewPdf() {
    const res = await httpObj.sendGet(`${detail.value['Brochure'].url}`)
    if (res.status === 200) {
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
        if (width.value < 1024) {
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

function tabClick(pane, e) {
    detailName.value = e.target.innerText;
}

function previewImg(url) {
    showImagePreview({
        images: [url],
        closeable: true,
    });
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

:deep(.el-tabs__item) {
    font-size: 1vw !important;
}
</style>