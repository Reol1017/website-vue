<template>
    <el-skeleton v-if="skeletonVisible" :animated="true" :rows="10" />
    <div v-else class="content-container relative font-c-t w-full h-full text-xs px-2 pb-4 md:text-sm lg:text-base overflow-y-scroll">
        <div class="pic-container swiper hidden md:block w-[100%] aspect-[5/2]">
            <a-carousel animation-name="fade" indicator-type="line" show-arrow="always" arrow-class="text-black" :auto-play="false" style="width: 100%; height: 100%;">
                <a-carousel-item v-for="(item, index) in Math.ceil(picData?.length / 6)" :key="item">
                    <div class="item-son w-full h-full grid grid-cols-3 grid-rows-2 gap-2">
                        <div v-for="(item2, index2) in 6" class="">
                            <img @click="previewImg(picData[index * 6 + index2]?.['Link To File'])"
                                :src="picData[index * 6 + index2]?.['Link To File']" class="w-full h-full object-cover"
                                alt="">
                        </div>
                    </div>
                </a-carousel-item>
            </a-carousel>
        </div>
        <!-- 移动轮播 -->
        <div class="md:hidden w-full h-[30%] mt-2">
            <van-swipe style="height: 90%;" class="my-swipe" autoplay="3000" :show-indicators="false">
                <van-swipe-item @click="mobilePicPreview(image)"  v-for="(image, index) in picData" :key="image?.['MLS House - Project - Street ID']">
                    <img class="w-full h-full object-cover rounded" :src="image?.['Link To File']" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <p style="font-family: 'Font3';" class="md:text-xl text-base font-bold md:h-[15%] flex items-center justify-center mx-auto w-[100%]">{{ detail['Project Address'] }}</p>
        <div class="md:w-[75%] md:h-[1200px] mx-auto w-full h-[500px] md:flex">
            <div class="md:w-[85%] h-full w-full">
                <p class="h-[30px] flex items-center text-base md:text-lg font-bold">Details</p>
                <div class="details md:text-[14px] w-full h-[200px] mt-1 md:h-[180px] grid md:grid-cols-3 md:grid-rows-4 grid-cols-2 grid-rows-6">
                    <div class="w-full h-full flex truncate items-center" v-for="item in propertyArr" :key="item.text">
                        <span :class="[ 'iconfont', `${item.icon}`, 'mx-1' ]"></span>
                        <span>{{ item.text }}:</span>
                        <span class="ml-1">{{ (item.label.includes('Price') || item.label.includes('SQFT')) ? detail[item.label]?.toLocaleString() : detail[item.label] }}</span>
                    </div>
                </div>
                <p class="h-[30px] flex items-center text-base md:text-lg font-bold mt-2">Others Details</p>
                <div class="details md:text-[14px] w-full h-[200px] mt-1 md:h-[135px] grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6">
                    <div class="w-full h-full flex truncate items-center" v-for="item in propertyArr2" :key="item.text">
                        <span :class="[ 'iconfont', `${item.icon}`, 'mx-1' ]"></span>
                        <span>{{ item.text }}:</span>
                        <span class="ml-1">{{ (item.label.includes('SQFT')) ? detail[item.label]?.toLocaleString() : detail[item.label] }}</span>
                    </div>
                </div>
                <p class="h-[30px] hidden md:flex items-center text-base md:text-lg font-bold mt-2">Description</p>
                <p class="hidden md:block shadow p-1 leading-[2] mt-1 text-[15px]">{{ detail['Description'] }}</p>
                <iframe :src="detail['Google Map Link']" class="w-full h-[500px] hidden md:block mt-4" frameborder="0"></iframe>
            </div>
            <div style="font-family: 'Font3';" class="col-right hidden md:flex md:flex-col md:items-end sticky top-0 btns-container md:w-[15%] h-[150px] text-white">
                <div class="btn group aspect-square h-1/3 relative after:absolute after:right-full transition-all duration-500 flex items-center p-2 cursor-pointer rounded justify-center bg-neutral-500 hover:bg-neutral-400 border-b">
                    <span class="iconfont icon-Brochure text-[24px]"></span>
                    <span class="group-hover:flex hidden bg-neutral-500 h-[60%] p-1 aspect-[5/1] border border-gray-400 rounded absolute right-full items-center justify-center mr-1">BROCHURE</span>
                </div>
                <div class="btn group aspect-square h-1/3 relative after:absolute after:right-full transition-all duration-500 flex items-center p-2 cursor-pointer rounded justify-center bg-neutral-500 hover:bg-neutral-400 border-b">
                    <span class="iconfont icon-video_fill text-[24px]"></span>
                    <span class="group-hover:flex hidden bg-neutral-500 h-[60%] p-1 aspect-[5/1] border border-gray-400 rounded absolute right-full items-center justify-center mr-1">VIDEO TOUR</span>
                </div>
                <div class="btn group aspect-square h-1/3 relative after:absolute after:right-full transition-all duration-500 flex items-center p-2 cursor-pointer rounded justify-center bg-neutral-500 hover:bg-neutral-400 border-b">
                    <span class="iconfont icon-virtual-reality text-[24px]"></span>
                    <span class="group-hover:flex hidden bg-neutral-500 h-[60%] p-1 aspect-[5/1] border border-gray-400 rounded absolute right-full items-center justify-center mr-1">VIRTUAL TOUR</span>
                </div>
            </div>
        </div>
        <div class="w-full h-[7%] mb-4 md:hidden grid grid-rows-1 grid-cols-3 gap-1">
            <div class="w-full h-full flex items-center justify-center border rounded">
                <span class="iconfont icon-Brochure mr-2"></span>
                <span>BROCHURE</span>
            </div>
            <div class="w-full h-full flex items-center justify-center border rounded">
                <span class="iconfont icon-video_fill mr-2"></span>
                <span>VIDEO TOUR</span>
            </div>
            <div class="w-full h-full flex items-center justify-center border rounded">
                <span class="iconfont icon-virtual-reality mr-2"></span>
                <span>VIRTUAL TOUR</span>
            </div>
        </div>
        <!-- 描述和地图 -->
        <!-- <div class="map-des-container hidden mx-auto md:w-[90%] md:h-[80%] h-full w-full md:block">
            <p class="w-[100%] mx-auto md:text-lg text-sm font-bold">Description</p>
            <p class="w-[100%] mx-auto md:text-base leading-loose text-sm">{{ detail['Description'] }}</p>
        </div> -->
        <p class="md:hidden font-bold text-sm mb-2">Description</p>
        <p class="md:hidden text-sm mb-6">{{ detail['Description'] }}</p>
        <iframe :src="detail['Google Map Link']" class="w-full h-full md:hidden" frameborder="0"></iframe>
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
const propertyArr = ref([
    {
        label: 'List Price',
        icon: 'icon-dollar',
        text: 'Price'
    },
    {
        label: 'Number Of Bathrooms',
        icon: 'icon-bathroom-fill',
        text: 'Baths'
    },
    {
        label: 'Number Of Bedrooms',
        icon: 'icon-Bed-1',
        text: 'Beds'
    },
    {
        label: 'Number Of Garage',
        icon: 'icon-garage',
        text: 'Garages'
    },
    {
        label: 'Total Finished SQFT',
        icon: 'icon-sqft',
        text: 'Sq.Ft.'
    },
    {
        label: 'Lot Size Acres',
        icon: 'icon-feature-lot-size',
        text: 'Lot Size.'
    },
    {
        label: 'Main Level Bedroom',
        icon: 'icon-Bed-1',
        text: 'Main Level Bedrooms'
    },
    {
        label: 'Main Level Bathroom',
        icon: 'icon-bathroom-fill',
        text: 'Main Level Bathrooms'
    },
    {
        label: 'Upper Level Bathroom',
        icon: 'icon-bathroom-fill',
        text: 'Upper Level Bathrooms'
    },
    {
        label: 'Upper Level Bedroom',
        icon: 'icon-Bed-1',
        text: 'Upper Level Bedrooms'
    },
    {
        label: 'Lower Level Bedroom',
        icon: 'icon-Bed-1',
        text: 'Lower Level Bedrooms'
    },
    {
        label: 'Lower Level Bathroom',
        icon: 'icon-bathroom-fill',
        text: 'Lower Level Bathrooms'
    },
])
const propertyArr2 = ref([
    {
        label: 'Above Grade Finished SQFT',
        icon: 'icon-sqft',
        text: 'Above Grade Finished SQFT'
    },
    {
        label: 'Below Grade Finished SQFT',
        icon: 'icon-sqft',
        text: 'Below Grade Finished SQFT'
    },
    {
        label: 'Elementary School',
        icon: 'icon-elementary-school-4',
        text: 'Elementary School'
    },
    {
        label: 'Middle Or Junior School',
        icon: 'icon-_huabanfuben',
        text: 'Middle Or Junior School'
    },
    {
        label: 'High School',
        icon: 'icon-high-school-1',
        text: 'High School'
    },
    {
        label: 'Builder Model',
        icon: 'icon-bg-model',
        text: 'Builder Model'
    },
])
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