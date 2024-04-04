<template>
    <div class="home-container w-full h-full relative">
        <div class="header sticky w-full h-1/6 flex items-center shadow">
            <img src="../../assets/logo.png" alt="">
            <input v-model="searchValue" type="text" class="border w-1/5 h-1/3 border-green-700 outline-none rounded rounded-r-none">
            <button @click="search" class="border-green-600 w-1/12 h-1/3 bg-green-600 text-white hover:bg-green-500 rounded-r"><i class="fa fa-search"></i></button>
            <a-popover title="Price Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class="ml-40 outline-none rounded border border-green-700 h-1/3 w-1/12 hover:shadow hover:shadow-green-700">Price filters</button>
                <template #content>
                    <input v-model="minPrice" @blur="filterPrice" type="text" class="min-price pl-2 h-8 border-green-700 outline-none border rounded">
                    <span class=" ml-2 mr-2">-</span>
                    <input v-model="maxPrice" @blur="filterPrice" type="text" class="max-price pl-2 h-8 border-green-700 outline-none border rounded">
                </template>
            </a-popover>
            <a-popover title="Beds/Baths Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/3 w-1/12 hover:shadow hover:shadow-green-700">Beds/Baths filters</button>
                <template #content>
                    <p>Beds</p>
                    <div @click="filterBed($event)" class="w-60 h-12 border border-gray-400 rounded flex items-center">
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bed-num hover:border-green-600 hover:border">3+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bed-num hover:border-green-600 hover:border">4+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bed-num hover:border-green-600 hover:border">5+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bed-num hover:border-green-600 hover:border">6+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bed-num hover:border-green-600 hover:border">7+</button>
                    </div>
                    <p>Baths</p>
                    <div @click="filterBath($event)" class=" w-60 h-12 border border-gray-400 rounded flex items-center">
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bath-num hover:border-green-600 hover:border">3+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bath-num hover:border-green-600 hover:border">4+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bath-num hover:border-green-600 hover:border">5+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bath-num hover:border-green-600 hover:border">6+</button>
                        <button style="height: 90%;" class="w-1/2 hover:rounded border-r-2 text-center bath-num hover:border-green-600 hover:border">7+</button>
                    </div>
                </template>
            </a-popover>
            <a-popover title="Home Type Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/3 w-1/12 hover:shadow hover:shadow-green-700">Home Type filters</button>
                <template #content>
                    <button class="border border-green-700 w-28 h-10 rounded hover:bg-green-700 hover:text-white">House</button>
                    <button class="border border-green-700 w-28 h-10 rounded ml-4  hover:bg-green-700 hover:text-white">Townhouse</button>
                </template>
            </a-popover>
            <button type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/3 w-1/12 hover:shadow hover:shadow-green-700"><i class="fa fa-filter"></i>All filters</button>
            <button @click="resetOut($event)" type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/3 w-1/12 hover:shadow hover:shadow-green-700">Reset</button>
        </div>
        <div class="body w-full h-5/6 flex">
            <div class="map w-1/2 h-full">
                <GoogleMap ref="mapRef" api-key="AIzaSyDag9MI2Ss2T52lYGcWI2-uKXDlIpco3fY" style="width: 100%; height: 100%"
                    :center="center" :zoom="13.5">
                    <!-- <Marker ref="markerRef" @click="clickMarker(item)" v-for="item in data" :key="item['Address in MLS']"
                        :options="{ position: { lat: Number(item['Google Map Location Code'].split(',')[0]), lng: Number(item['Google Map Location Code'].split(',')[1]), label: item['Project Address'], title: item['Project Address'] } }">
                    </Marker> -->
                    <CustomMarker @click="clickMarker(item, $event)" v-for="item in data" :key="item['Address in MLS']" :options="{ position: { lat: Number(item['Google Map Location Code'].split(',')[0]), lng: Number(item['Google Map Location Code'].split(',')[1]), label: item['Project Address'], title: item['Project Address'], anchorPoint: 'BOTTOM_CENTER' } }">
                        <div class=" w-8 h-8">
                            <i ref="markerRef"  :class="`m${item['Project - Street ID']} fa fa-map-marker w-full h-full text-2xl text-red-700`"></i>
                        </div>
                    </CustomMarker>
                </GoogleMap>
            </div>
            <div ref="cardContainer" class="card bg-gray-100 w-1/2 h-full overflow-x-hidden overflow-y-scroll flex flex-col items-center">
                <a-card @click="clickCard(item)"  :id="`h${item['Project - Street ID'].trim()}`" style="width: 98%;" class="card mt-3 mb-3 hover:shadow-lg border-green-700" v-for="item in data"
                    :key="item['Address in MLS']">
                    <template #title>
                        <div style="font-size: 1.1vw;">{{ item['Address in MLS'] }}</div>
                    </template>
                    <template #extra>
                        <div style="font-size: 1.1vw;" class="border border-green-700 p-1 rounded text-green-700">{{
                            item['House Status'] }}</div>
                    </template>
                    <div class="w-full h-44 flex">
                        <div class="img w-2/6 h-full rounded" :style="{ backgroundImage: `url(${item['Profile Pic Link']})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }"></div>
                        <div class="info w-4/6 h-full">
                            <p class=" mt-2 mb-2 ml-2">
                                <span class=" font-bold text-black" style="font-size: 1.1vw;">{{ item['Project Address'] }}</span>
                            </p>
                            <p style="font-size: 1vw;" class=" flex leading-7 justify-between ml-2">
                                <span style="width: 200px;"><i class="fa fa-dollar mr-1 text-black"></i>Price: {{ item['List Price'].toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</span>
                                <span style="width: 200px;" class=" ml-2"><i class="fa fa-bath mr-1 text-black"></i>Baths: {{ item['Number Of Bathrooms'] }}</span>
                            </p>
                            <p style="font-size: 1vw;" class=" flex leading-7 justify-between ml-2">
                                <span style="width: 200px;"><i class="fa fa-bed mr-1 text-black"></i>Bed: {{ item['Number Of Bedrooms'] }}</span>
                                <span style="width: 200px;" class=" ml-2"><i class="fa fa-home mr-1 text-black"></i>Garage: {{ item['Number Of Garage'] }}-Car</span>
                            </p>
                            <p style="font-size: 1vw;" class=" flex leading-7 ml-2">
                                <span style="width: 200px;"><i class="fa fa-square mr-1 text-black"></i>SQFT: {{ item['Total Finished SQFT'].toLocaleString() }} SQFT</span>
                            </p>
                            <p style="font-size: 1vw;" class=" flex leading-7 ml-2">
                                <span style="width: 200px;"><i class="fa fa-home mr-1 text-black"></i>Lot Size: {{ item['Lot Size Acres'] }} Acres</span>
                            </p>
                            <p style="font-size: 0.9vw;" class=" flex justify-end leading-7">
                                <button @click="details(item, $event)" class="text-white bg-green-700 hover:bg-green-600 p-2 rounded">View Details</button>
                            </p>
                        </div>
                    </div>
                </a-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map'
import { processData } from '../../hooks/index'
import { onMounted, ref, watch } from 'vue';
import httpObj from '../../api/api';
import { useRouter } from 'vue-router';
const router = useRouter()
const center = ref({ lat: 38.922856383502776, lng: -77.18227289214244 })
const filedNum = []
for (let i = 11; i < 46; i++) {
    filedNum.push(i)
}
const markerRef = ref()
const cardContainer = ref()
const mapRef = ref()
console.log(mapRef.value);
watch([() => mapRef.value?.ready, center], ([ready, center]) => {
    if(!ready){
        return
    }
    console.log(ready, center);
    mapRef.value.map.panTo(center)
}, {
    deep: true
})
const data = ref([])
const data2 = ref([])
const city = ref(['McLean', 'Falls Church', 'Vienna', 'Arlington'])
async function initData() {
    const res = await httpObj.sendPost('/records/query', {
        from: 'btwxxiycs',
        select: [6,7,8,...filedNum]
    })
    data.value = processData(res.data.data, res.data.fields)
    data.value = data.value.sort((a, b) => {
        const cityA = city.value.indexOf(a['Project Address'].split(', ')[1])
		const cityB = city.value.indexOf(b['Project Address'].split(', ')[1])
		return cityA - cityB
    })
    data2.value = processData(res.data.data, res.data.fields)
    data2.value = data.value.sort((a, b) => {
        const cityA = city.value.indexOf(a['Project Address'].split(', ')[1])
		const cityB = city.value.indexOf(b['Project Address'].split(', ')[1])
		return cityA - cityB
    })
}
initData()
function clickMarker(item, event) {
    document.querySelectorAll('.card').forEach(item => {
        item.style.border = 'none'
    })
    markerRef.value.forEach(item => {
        item.classList.remove('text-5xl')
    })
    event.target.classList.toggle('text-5xl')
    document.querySelector(`#h${item['Project - Street ID'].trim()}`).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
    document.querySelector(`#h${item['Project - Street ID'].trim()}`).style.border = '2px solid green'
}
function clickCard(item){
    markerRef.value.forEach(item => {
        item.classList.remove('text-5xl')
    })
    center.value.lat = Number(item['Google Map Location Code'].split(',')[0])
    center.value.lng = Number(item['Google Map Location Code'].split(',')[1])

    document.querySelector(`.m${item['Project - Street ID'].trim()}`).classList.add('text-5xl')
}
function details(item, e){
    console.log(item)
    e.stopPropagation();
    router.push(`/detail/${item['Project - Street ID']}`)
}

const minPrice = ref(0)
const maxPrice = ref(0)
// 外部价格过滤 class="w-1/2 h-11/12 border-r-2"
function filterPrice(){
    if (minPrice.value && !maxPrice.value) {
        data.value = data.value.filter(item => Number(item['List Price']) >= Number(minPrice.value))
    } else if (!minPrice.value && maxPrice.value) {
        data.value = data.value.filter(item => Number(item['List Price']) <= Number(maxPrice.value))
    } else if (minPrice.value && maxPrice.value) {
        data.value = data.value.filter(item => Number(item['List Price']) >= Number(minPrice.value) && Number(item['List Price']) <= Number(maxPrice.value))
    }
    // console.log(minPrice.value, maxPrice.value, data.value)
}

function filterBed(e){
    data.value = data.value.filter(item => item['Number Of Bedrooms'] >= Number(e.target.innerText.split('+')[0]))
}
function filterBath(e){
    data.value = data.value.filter(item => item['Number Of Bathrooms'] >= Number(e.target.innerText.split('+')[0]))
}
function resetOut(e){
    initData()
}

const searchValue = ref('')
async function search(){
    await initData()
    data.value = data.value.filter(item => item['Project Address'].includes(searchValue.value))
}
onMounted(() => {
})
</script>

<style scoped>
::deep(.arco-card-size-medium .arco-card-header-title) {
    font-size: 1.3vw !important;
}
/* 修改滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
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
.three{
    border: 1px solid green;
    background-color: rgba(0, 255, 0, 0.2);
    border-radius: 5px;
}
</style>