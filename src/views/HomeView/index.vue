<template>
    <div v-if="width >= 768" class="home-container w-full h-full relative">
        <div style="height: 10%;"class="header sticky w-full flex items-center shadow">
            <input v-model="searchValue" type="text" class=" ml-4 border w-1/5 h-1/2 border-green-700 outline-none rounded rounded-r-none">
            <button @click="search" class="border-green-600 mr-auto w-1/12 h-1/2 bg-green-600 text-white hover:bg-green-500 rounded-r"><i class="fa fa-search"></i></button>
            <a-popover title="Price Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class="ml-40 outline-none rounded border border-green-700 h-1/2 w-1/12 hover:shadow hover:shadow-green-700">Price</button>
                <template #content>
                    <input v-model="minPrice" @blur="filterPrice" type="text" class="min-price pl-2 h-8 border-green-700 outline-none border rounded">
                    <span class=" ml-2 mr-2">-</span>
                    <input v-model="maxPrice" @blur="filterPrice" type="text" class="max-price pl-2 h-8 border-green-700 outline-none border rounded">
                </template>
            </a-popover>
            <a-popover style="width: 20%;"title="Beds/Baths Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/2 w-1/12 hover:shadow hover:shadow-green-700">Beds/Baths</button>
                <template #content>
                    <p>Beds</p>
                    <el-slider @change="changeBedOut" v-model="beds2" range show-stops :max="8" :min="3" />
                    <p>Baths</p>
                    <el-slider @change="changeBathOut" v-model="bath2" range show-stops :max="8" :min="3" />
                </template>
            </a-popover>
            <a-popover title="Home Type Filter" trigger="click">
                <button type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/2 w-1/12 hover:shadow hover:shadow-green-700">Home Type</button>
                <template #content>
                    <button class="border border-green-700 w-28 h-10 rounded hover:bg-green-700 hover:text-white">House</button>
                    <button class="border border-green-700 w-28 h-10 rounded ml-4  hover:bg-green-700 hover:text-white">Townhouse</button>
                </template>
            </a-popover>
            <button @click="drawer = true" type="button" style="font-size: 0.9vw;" class=" outline-none rounded border border-green-700 ml-5 h-1/2 w-1/12 hover:shadow hover:shadow-green-700"><i class="fa fa-filter"></i>All filters</button>
            <button @click="resetOut($event)" type="button" style="font-size: 0.9vw;" class=" mr-4 outline-none rounded border border-green-700 ml-5 h-1/2 w-1/12 hover:shadow hover:shadow-green-700">Reset</button>
        </div>
        <div style="height: 90%;" class="body w-full flex">
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
            <div ref="cardContainer" class="card bg-gray-100 w-1/2 h-full overflow-x-hidden overflow-y-scroll">
                <div @click="clickCard(item)" style="width: 98%; height: 40%;" :id="`h${item['Project - Street ID'].trim()}`" class="card mx-auto rounded-lg bg-white mt-2 mb-2 border hover:shadow-lg" v-for="item in data" :key="item['Address in MLS']">
                    <div class="card-header flex justify-between items-center w-full h-1/4 border border-b">
                        <div style="font-size: 1vw;" class="ml-2 font-bold" >{{ item['Project Address'] }}</div>
                        <div style="font-size: 1vw;" class="mr-2 border border-green-700 rounded p-1 text-green-700" >{{ item['House Status'] }}</div>
                    </div>
                    <div class="card-body w-full h-3/4 p-1 flex">
                        <div class="img w-1/3 h-full rounded-lg flex justify-center items-center">
                            <img :src="item['Profile Pic Link']" class="h-full rounded-lg"lt="">
                        </div>
                        <div class="info w-2/3 h-full py-4 flex flex-col justify-between">
                            <div style="font-size: 0.9vw;" class=" flex-grow conten w-full flex flex-col">
                                <p class=" w-full flex leading-7 justify-between ml-2 flex-grow">
                                    <span class="flex w-1/2 items-center"><img class="mr-1"style="width: 1vw; height: 1vw;" src="../../assets/dollar.svg" alt="">Price: {{ item['List Price'].toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</span>
                                    <span class="flex w-1/2 items-center  ml-2"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/bath.svg" alt="">Baths: {{ item['Number Of Bathrooms'] }}</span>
                                </p>
                                <p class=" w-full flex leading-7 justify-between ml-2 flex-grow">
                                    <span class="flex w-1/2 items-center"><img class="mr-1"style="width: 1vw; height: 1vw;" src="../../assets/bed.svg" alt="">Bed: {{ item['Number Of Bedrooms'] }}</span>
                                    <span class="flex w-1/2 items-center  ml-2"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/car.svg" alt="">Garage: {{ item['Number Of Garage'] }}-Car</span>
                                </p>
                                <p class=" w-full flex leading-7 ml-2 justify-between flex-grow">
                                    <span class="flex w-1/2 items-center"><img class="mr-1"style="width: 1vw; height: 1vw;" src="../../assets/SQFT.svg" alt="">SQFT: {{ item['Total Finished SQFT'].toLocaleString() }} SQFT</span>
                                    <span class="flex w-1/2 items-center  ml-2"><img class="mr-1" style="width: 1vw; height: 1vw;" src="../../assets/ruler.svg" alt="">Lot Size: {{ item['Lot Size Acres'] }} Acres</span>
                                </p>
                            </div>
                            <p style="font-size: 0.85vw;" class=" m-2 flex justify-end items-end flex-grow">
                                <button @click="details(item, $event)" class="text-white h-3/4 bg-green-700 hover:bg-green-600 p-2 rounded flex items-center justify-center">View Details</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer v-model="drawer" title="Filters" size="40%">
            <p class="font-bold">Price Range:</p>
            <p class="my-4">
                <el-input v-model="minPrice2"style="width: 45%;" placeholder="please input min price"></el-input>
                <span class="mx-4">-</span>
                <el-input v-model="maxPrice2"style="width: 45%;" placeholder="please input max price"></el-input>
            </p>
            <hr>
            <p class="font-bold my-2">
                Status:
            </p>
            <el-radio-group v-model="status">
                <el-radio value="For Sale" size="large">For Sale</el-radio>
                <el-radio value="Sold" size="large">Sold</el-radio>
            </el-radio-group>
            <hr>
            <p class="font-bold my-2">Beds</p>
            <el-slider v-model="beds" range show-stops :max="8" :min="3" />
            <p class="font-bold my-2">Baths</p>
            <el-slider v-model="baths" range show-stops :max="8" :min="3" />
            <hr class="my-2">
            <p class="font-bold my-2">Home Type</p>
            <el-checkbox v-model="house" label="House" />
            <el-checkbox v-model="townhouse" label="Townhouse" />
            <hr class="my-2">
            <p class="font-bold my-2">SQFT</p>
            <p class="my-4">
                <el-input v-model="minSqft"style="width: 45%;" placeholder="please input min price"></el-input>
                <span class="mx-4">-</span>
                <el-input v-model="maxSqft"style="width: 45%;" placeholder="please input max price"></el-input>
            </p>
            <hr class="my-2">
            <p class="font-bold my-2">City</p>
            <el-select v-model="cityValue" placeholder="please select city">
              <el-option v-for="item in city" :label="item" :value="item" :key="item"></el-option>
            </el-select>
            <hr class="my-2">
            <p class="text-right">
                <el-button @click="resetIn">Reset</el-button>
                <el-button type="primary" @click="filterIn">Confirm</el-button>
            </p>
        </el-drawer>
    </div>
    <!-- <div v-else-if="width < 1280 && width >= 960" class="home-container w-full h-full relative">平板</div> -->
    <div v-else class="home-container w-full h-full relative bg-gray-50">
        <div class="mobile-header w-full h-1/10 bg-white justify-between flex items-center shadow">
            <!-- <img src="../../assets/logo.png" class=" w-1/3 ml-2" alt=""> -->
            <van-search v-model="searchValue" @search="search"  placeholder="Enter City to Search" />
            <el-icon size="25" class="w-1/3 mr-2" @click="mobileDrawer = true"><Menu /></el-icon>
        </div>
        <div class="body-mobile w-full" style="height: 92%;">
            <div class="map-mobile w-full h-full bg-white my-1">
                <GoogleMap ref="mapMobileRef" api-key="AIzaSyDag9MI2Ss2T52lYGcWI2-uKXDlIpco3fY" style="width: 100%; height: 100%"
                    :center="center" :zoom="13.5">
                    <Marker ref="markerRef" @click="clickMobileMarker(item)" v-for="item in data" :key="item['Address in MLS']"
                        :options="{ position: { lat: Number(item['Google Map Location Code'].split(',')[0]), lng: Number(item['Google Map Location Code'].split(',')[1]), label: item['Project Address'], title: item['Project Address'] } }">
                        <InfoWindow v-model="InfoWindowVisible.find(item2 => item2.id === item['Project - Street ID']).visible" v-if="sid === item['Project - Street ID']">
                                <div class="window h-60 w-64">
                                    <div class="window-header w-full h-1/4 flex justify-between items-center border-b font-bold" style="font-size: 0.6rem;">{{ item['Project Address'] }}</div>
                                        <div class="img w-full h-3/4 rounded" :style="{ backgroundImage: `url(${item['Profile Pic Link']})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }">
                                        </div>
                                        <div class="info w-full">
                                            <p style="font-size: 0.65rem;" class=" flex leading-7 justify-between ml-2">
                                                <span style="width: 8rem;" class="flex items-center"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/dollar.svg" alt="">Price: {{ item['List Price'].toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</span>
                                                <span style="width: 8rem;" class=" ml-2 flex items-center"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/bath.svg" alt="">Baths: {{ item['Number Of Bathrooms'] }}</span>
                                            </p>
                                            <p style="font-size: 0.65rem;" class=" flex leading-7 justify-between ml-2">
                                                <span style="width: 8rem;" class="flex items-center"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/bed.svg" alt="">Bed: {{ item['Number Of Bedrooms'] }}</span>
                                                <span style="width: 8rem;" class=" ml-2 flex items-center"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/car.svg" alt="">Garage: {{ item['Number Of Garage'] }}-Car</span>
                                            </p>
                                            <p style="font-size: 0.65rem;" class=" flex leading-7 ml-2">
                                                <span style="width: 8rem;" class="flex items-center"><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/SQFT.svg" alt="">SQFT: {{ item['Total Finished SQFT'].toLocaleString() }} SQFT</span>
                                                <span style="width: 8rem;" class="flex items-center" ><img class="mr-1"style="width: 0.65rem; height: 0.65rem;" src="../../assets/ruler.svg" alt="">Lot Size: {{ item['Lot Size Acres'] }} Acres</span>
                                            </p>
                                        <el-link @click="mobileDetails(item)" class="my-2" style="font-size: 0.65rem; width: 6rem;" :underline="false" type="primary">View Details</el-link>
                                    </div>
                                </div>
                        </InfoWindow>
                    </Marker>
                    <!-- <CustomMarker @click="clickMobileMarker(item, $event)" v-for="item in data" :key="item['Address in MLS']" :options="{ position: { lat: Number(item['Google Map Location Code'].split(',')[0]), lng: Number(item['Google Map Location Code'].split(',')[1]), label: item['Project Address'], title: item['Project Address'], anchorPoint: 'BOTTOM_CENTER' } }">
                        <div class=" w-8 h-8">
                            <i ref="markerRef"  :class="`m${item['Project - Street ID']} fa fa-map-marker w-full h-full text-2xl text-red-700`"></i>
                        </div>
                    </CustomMarker> -->
                </GoogleMap>
            </div>
        </div>
        <!-- 抽屉 -->
        <el-drawer v-model="mobileDrawer" size="100%" title="Filter" direction="ttb">
            <p class="font-bold">Price Range:</p>
            <p class="my-4">
                <el-input v-model="minPrice2"style="width: 40%;" placeholder="min price"></el-input>
                <span class="mx-4">-</span>
                <el-input v-model="maxPrice2"style="width: 40%;" placeholder="max price"></el-input>
            </p>
            <hr>
            <p class="font-bold my-2">
                Status:
            </p>
            <el-radio-group v-model="status">
                <el-radio value="For Sale" size="large">For Sale</el-radio>
                <el-radio value="Sold" size="large">Sold</el-radio>
            </el-radio-group>
            <hr>
            <p class="font-bold my-2">Beds</p>
            <el-slider v-model="beds" range show-stops :max="8" :min="3" />
            <p class="font-bold my-2">Baths</p>
            <el-slider v-model="baths" range show-stops :max="8" :min="3" />
            <hr class="my-2">
            <p class="font-bold my-2">Home Type</p>
            <el-checkbox v-model="house" label="House" />
            <el-checkbox v-model="townhouse" label="Townhouse" />
            <hr class="my-2">
            <p class="font-bold my-2">SQFT</p>
            <p class="my-4">
                <el-input v-model="minSqft"style="width: 40%;" placeholder="please input min sqft"></el-input>
                <span class="mx-4">-</span>
                <el-input v-model="maxSqft"style="width: 40%;" placeholder="please input max sqft"></el-input>
            </p>
            <hr class="my-2">
            <p class="font-bold my-2">City</p>
            <el-select v-model="cityValue" placeholder="please select city">
              <el-option v-for="item in city" :label="item" :value="item" :key="item"></el-option>
            </el-select>
            <hr class="my-2">
            <p class="text-right">
                <el-button @click="resetIn">Reset</el-button>
                <el-button type="primary" @click="filterIn">Confirm</el-button>
            </p>
        </el-drawer>
    </div>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue'
import { GoogleMap, Marker, CustomMarker, InfoWindow } from 'vue3-google-map'
import { processData } from '../../hooks/index'
import { computed, onMounted, ref, watch } from 'vue';
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
// console.log(mapRef.value);
watch([() => mapRef.value?.ready, center], ([ready, center]) => {
    if(!ready){
        return
    }
    // console.log(ready, center);
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
    // console.log(data.value);
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
    document.querySelectorAll('.card').forEach(item => {
        item.style.border = 'none'
    })
    markerRef.value.forEach(item => {
        item.classList.remove('text-5xl')
    })
    center.value.lat = Number(item['Google Map Location Code'].split(',')[0])
    center.value.lng = Number(item['Google Map Location Code'].split(',')[1])

    document.querySelector(`.m${item['Project - Street ID'].trim()}`).classList.add('text-5xl')
    document.querySelector(`#h${item['Project - Street ID'].trim()}`).style.border = '2px solid green'
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
const beds2 = ref([3,8]);
const bath2 = ref([3,8]);
async function changeBedOut(value){
    await initData()
    data.value = data.value.filter(item => {
        if(value[0] === value[1]){
            return item['Number Of Bedrooms'] === value[0]
        } else {
            return item['Number Of Bedrooms'] >= value[0] && item['Number Of Bedrooms'] <= value[1]
        }
    })
}
async function changeBathOut(value){
    await initData()
    data.value = data.value.filter(item => {
        if(value[0] === value[1]){
            return item['Number Of Bathrooms'] === value[0]
        } else {
            return item['Number Of Bathrooms'] >= value[0] && item['Number Of Bedrooms'] <= value[1]
        }
    })
    // data.value = data.value.filter(item => item['Number Of Bathrooms'] >= Number(e.target.innerText.split('+')[0]))
}
async function resetOut(e){
    await initData()
    beds2.value = [3,8];
    bath2.value = [3,8];
    minPrice.value = 0;
    maxPrice.value = 0;

}

const searchValue = ref('')
async function search(){
    await initData()
    data.value = data.value.filter(item => item['Project Address'].includes(searchValue.value))
}

// 抽屉
const drawer = ref(false);
const minPrice2 = ref('');
const maxPrice2 = ref('');
const status = ref('For Sale')
const beds = ref([3, 8])
const baths = ref([3, 8])
const house = ref(false)
const townhouse = ref(false);
const minSqft = ref(0);
const maxSqft = ref(0);
const cityValue = ref('');
const resetIn = async () => {
    drawer.value = false;
    mobileDrawer.value = false;
    minPrice2.value = '';
    maxPrice2.value = '';
    status.value = 'For Sale';
    beds.value = [3, 8];
    baths.value = [3, 8];
    house.value = false
    townhouse.value = false
    minSqft.value = 0;
    maxSqft.value = 0;
    cityValue.value = '';
    await initData();
}
const filterIn = async () => {
    await initData();
    data.value = data.value.filter(item => item['House Status'] === status.value)
    // console.log(data.value);
    data.value = data.value.filter(item => {
        if(!maxPrice2.value && minPrice2.value){
            return item['List Price'] >= Number(minPrice2.value)
        } else if(!minPrice2.value && maxPrice2.value){
            return item['List Price'] <= Number(maxPrice2.value)
        } else if(minPrice2.value && maxPrice2.value){
            return item['List Price'] <= Number(maxPrice2.value) && item['List Price'] >= Number(minPrice2.value)
        } else{
            return item
        }
    })
    // console.log(data.value)
    data.value = data.value.filter(item => {
        if(beds.value[0] === beds.value[1]){
            return item['Number Of Bedrooms'] === beds.value[0]
        } else {
            return item['Number Of Bedrooms'] >= beds.value[0] && item['Number Of Bedrooms'] <= beds.value[1]
        }
    })
    // console.log(data.value)
    data.value = data.value.filter(item => {
        if(baths.value[0] === baths.value[1]){
            return item['Number Of Bathrooms'] === baths.value[0]
        } else {
            return item['Number Of Bathrooms'] >= baths.value[0] && item['Number Of Bedrooms'] <= baths.value[1]
        }
    })
    // console.log(data.value)
    data.value = data.value.filter(item => {
        if(!maxSqft.value && minSqft.value){
            return Number(item['Total Finished SQFT']) >= Number(minSqft.value)
        } else if(!minSqft.value && maxSqft.value){
            return Number(item['Total Finished SQFT']) <= Number(maxSqft.value)
        } else if(minSqft.value && maxSqft.value){
            return Number(item['Total Finished SQFT']) <= Number(maxSqft.value) && item['Total Finished SQFT'] >= Number(minSqft.value)
        } else{
            return item
        }
    })
    // console.log(data.value)
    data.value = data.value.filter(item => item['Project Address'].includes(cityValue.value))
    // console.log(data.value);
    mobileDrawer.value = false;
    minPrice2.value = '';
    maxPrice2.value = '';
    status.value = 'For Sale';
    beds.value = [3, 8];
    baths.value = [3, 8];
    house.value = false
    townhouse.value = false
    minSqft.value = 0;
    maxSqft.value = 0;
    cityValue.value = '';
}
onMounted(() => {
})


const width = computed(() => {
    return window.innerWidth;
})
const sid = ref('')
const InfoWindowVisible = computed(() => {
    return data.value.map(item => {
        return {
            id: item['Project - Street ID'],
            visible: true
        }
    })
})
function clickMobileMarker(item, event){
    sid.value = item['Project - Street ID']

}
function mobileDetails(item){
    router.push(`/detail/${item['Project - Street ID']}`)
}

const mobileDrawer = ref(false);
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
.active{
    background-color: green;
    color: #fff;
}
hr{
    border-color: #000;
}
.h-1\/10{
    height: 8%;
}
</style>