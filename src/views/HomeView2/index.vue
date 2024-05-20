<template>
    <div class="content-container w-full h-full text-xs md:text-sm lg:text-base overflow-y-scroll">
        <div class="header h-7/100 w-full">
            <div class="hidden md:flex lg:flex justify-end w-full h-full md:relative">
                <a-popover style="width: 25%; font-family: 'Font1'" title="Price Filter" trigger="click">
                    <a class=" text-black  cursor-pointer flex items-center mx-2  rounded-lg px-2">Price</a>
                    <template #content>
                        <div class="w-full flex items-center">
                            <span class="mr-4">
                                {{ priceFilter[0].toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}
                            </span>
                            <el-slider style="width: 50%;" :format-tooltip="(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })" @change="filterPrice" v-model="priceFilter" show-stops  :min="2000000" range :max="5000000" :step="100000"></el-slider>
                            <span class="ml-4">
                                {{ priceFilter[1].toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}
                            </span>
                        </div>
                    </template>
                </a-popover>
                <a-popover style="width: 20%;"title="City Filter" trigger="click">
                    <a class=" text-black cursor-pointer flex items-center mx-2  rounded-lg px-2">City</a>
                    <template #content>
                        <div class="w-full flex items-center justify-center">
                            <el-select v-model="cityValue2" @change="cityChangeOut" placeholder="please select city">
                                <el-option v-for="item in city" :label="item" :value="item" :key="item"></el-option>
                            </el-select>
                        </div>
                    </template>
                </a-popover>
                <a-popover style="width: 20%;" title="School District Filter" trigger="click">
                    <a class=" text-black cursor-pointer flex items-center mx-2  rounded-lg px-2">School District</a>
                    <template #content>
                        <el-select @change="schoolChange" v-model="schoolDistrictSelectedValue" placeholder="">
                          <el-option v-for="item in schoolDistrict" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </template>
                </a-popover>
                <a @click="drawer = true" class="text-black  cursor-pointer flex items-center mx-2  rounded-lg px-2">All Filters</a>
                <input  @focus="focusInput($event)" v-model="searchValue" type="text" placeholder="enter number, city or keyword to search" class=" rounded-lg placeholder:text-sm h-full transition-all duration-1000" :class="[ inputWidth ? ' w-1/3 border pl-2 ' : ' w-0' ]">
                <button @click="search" class="h-full aspect-square cursor-pointer hover:bg-gray-50 rounded-full"><i class="fa fa-search text-lg"></i></button>
            </div>
            <div class="flex md:hidden lg:hidden w-full h-full items-center justify-between">
                <van-search v-model="searchValue" @search="search" @focus="vanFocus($event)" style="width: 60%;" placeholder="enter number, city or keyword to search" />
                <el-icon size="25" class="w-1/3 mr-2" @click="mobileDrawer = true"><Menu /></el-icon>
            </div>
        </div>
        <div class="body w-full h-93/100 md:flex md:flex-wrap md:items-start" >
            <template v-if="data.filter((item) => item['House Status'] !== 'Sold').length > 0">
                <div @touchstart="mobileImgIndex = index" @click="details(item, $event)" v-for="(item, index) in data.filter((item) => item['House Status'] !== 'Sold')" class="card  relative mx-auto my-2 w-49/50 md:w-49/100 h-auto aspect-video md:aspect-video border group">
                    <img class="h-full w-full object-cover" :src="item['Profile Pic Link']" />
                    <p class="absolute text-xs h-[8%] md:text-sm bg-c-black-hover flex items-center justify-center text-white top-0 w-5/6">{{ item['Project Address'] }}</p>
                    <div class="absolute h-[8%] text-xs md:text-sm w-1/6 top-0 right-0 flex justify-center items-center text-white bg-c-black-hover">
                        <div class="w-full border-l flex justify-center items-center h-[75%] ">{{ item['House Status'] }}</div>
                    </div>
                    <div v-show="width > 768" class="data absolute bottom-0 text-white bg-c-black-hover w-full h-1/4 opacity-0 transition-all duration-200 md:group-hover:opacity-100">
                        <div class="w-full h-full flex justify-center">
                            <div class="w-4/5 h-full flex justify-center items-center flex-wrap text-xs md:text-sm">
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex items-center justify-end w-1/4 icon-dollar mr-2"></span>
                                    <span class="w-3/4">{{ item['List Price']?.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</span>
                                </div>
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex justify-end w-1/4 icon-bathroom-fill mr-2"></span>
                                    <span class="w-3/4">Baths: {{ item['Number Of Bathrooms'] }}</span>
                                </div>
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex justify-end w-1/4 icon-Bed-1 mr-2"></span>
                                    <span class="w-3/4">Beds: {{ item['Number Of Bedrooms'] }}</span>
                                </div>
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex justify-end w-1/4 icon-garage mr-2"></span>
                                    <span class="w-3/4">Garage: {{ item['Number Of Garage'] }}</span>
                                </div>
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex justify-end w-1/4 icon-sqft mr-2"></span>
                                    <span class="w-3/4">SQFT: {{ item['Total Finished SQFT']?.toLocaleString() }}</span>
                                </div>
                                <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                    <span class="iconfont md:text-2xl flex justify-end w-1/4 icon-feature-lot-size mr-2"></span>
                                    <span class="w-3/4">Lot Size: {{ item['Lot Size Acres'] }}Acres</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="width < 768 && mobileImgIndex === index" class="data absolute bottom-0 text-white bg-c-black-hover w-full h-1/3">
                        <div class="w-full h-full flex justify-center items-center flex-wrap">
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-dollar mr-2"></span>
                                <span class="w-3/4">{{ item['List Price']?.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</span>
                            </div>
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-bathroom-fill mr-2"></span>
                                <span class="w-3/4">Baths: {{ item['Number Of Bathrooms'] }}</span>
                            </div>
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-Bed-1 mr-2"></span>
                                <span class="w-3/4">Beds: {{ item['Number Of Bedrooms'] }}</span>
                            </div>
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-garage mr-2"></span>
                                <span class="w-3/4">Garage: {{ item['Number Of Garage'] }}</span>
                            </div>
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-sqft mr-2"></span>
                                <span class="w-3/4">SQFT: {{ item['Total Finished SQFT']?.toLocaleString() }}</span>
                            </div>
                            <div class="h-1/3 w-1/3 flex items-center justify-center p-1/2">
                                <span style="" class="iconfont text-xl flex justify-end w-1/4 icon-feature-lot-size mr-2"></span>
                                <span class="w-3/4">Lot Size: {{ item['Lot Size Acres'] }} Acres</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card hidden md:block md:mx-auto md:my-2 md:w-49/100 md:aspect-video" v-if="!(data.filter((item) => item['House Status'] !== 'Sold').length % 2 === 0)"></div>
            </template>
            <div v-else class="w-full h-1/2 flex flex-col items-center my-2">
                <CircleClose style="width: 15vw; height: 50vh;"></CircleClose>
                <p style="font-size: 1.5rem;">No Data</p>
            </div>
            <iframe class="w-full h-full mx-auto" src="https://www-myanchorhomes-com.filesusr.com/html/d7263e_8c3695e6dc63abfe88941479ce2f32ce.html"></iframe>
        </div>
    </div>
    <el-drawer v-model="drawer" title="Filters" size="40%">
            <p class="font-bold">Price Range:</p>
            <p class="my-4">
                <el-slider :format-tooltip="(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })" v-model="priceFilter2" show-stops  :min="2000000" range :max="5000000" :step="100000"></el-slider>
            </p>
            <hr>
            <p class="font-bold my-2">
                Status:
            </p>
            <el-radio-group v-model="status">
                <el-radio value="For Sale" size="large">For Sale</el-radio>
                <el-radio value="Pending" size="large">Pending</el-radio>
            </el-radio-group>
            <hr>
            <p class="font-bold my-2">Beds</p>
            <el-slider v-model="beds" range show-stops :max="8" :min="3" />
            <p class="font-bold my-2">Baths</p>
            <el-slider v-model="baths" range show-stops :max="8" :min="3" />
            <hr class="my-2">
            <p class="font-bold my-2">Garage</p>
            <el-slider v-model="garageNumberArrIn" show-stops range :max="5" :min="1" :step="1" />
            <hr class="my-2">
            <p class="font-bold my-2">High School</p>
            <el-select v-model="schoolDistrictSelectedValueIn" placeholder="">
                <el-option v-for="item in schoolDistrict" :key="item" :label="item" :value="item"></el-option>
            </el-select>
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
        <el-drawer v-model="mobileDrawer" size="100%" title="Filter" direction="ttb">
            <p class="font-bold">Price Range:</p>
            <p class="my-4">
                <el-slider :format-tooltip="(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })" @change="filterPrice" v-model="priceFilter2" show-stops  :min="2000000" range :max="5000000" :step="100000"></el-slider>
            </p>
            <hr>
            <p class="font-bold my-2">
                Status:
            </p>
            <el-radio-group v-model="status">
                <el-radio value="For Sale" size="large">For Sale</el-radio>
                <el-radio value="Pending" size="large">Pending</el-radio>
            </el-radio-group>
            <hr>
            <p class="font-bold my-2">Beds</p>
            <el-slider v-model="beds" range show-stops :max="8" :min="3" />
            <p class="font-bold my-2">Baths</p>
            <el-slider v-model="baths" range show-stops :max="8" :min="3" />
            <hr class="my-2">
            <p class="font-bold my-2">Garage</p>
            <el-slider v-model="garageNumberArrIn" show-stops range :max="5" :min="1" :step="1" />
            <hr class="my-2">
            <p class="font-bold my-2">High School</p>
            <el-select v-model="schoolDistrictSelectedValueIn" placeholder="">
                <el-option v-for="item in schoolDistrict" :key="item" :label="item" :value="item"></el-option>
            </el-select>
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
</template>

<script setup>
import { Menu, CircleClose } from '@element-plus/icons-vue'
import { processData } from '../../hooks/index'
import { computed, onMounted, ref, watch, onUnmounted, nextTick } from 'vue';
import httpObj from '../../api/api';
import { useRouter } from 'vue-router';
const router = useRouter()
const center = ref({ lat: 38.922856383502776, lng: -77.18227289214244 })
const filedNum = []
for (let i = 11; i < 46; i++) {
    filedNum.push(i)
}
const mobileImgIndex = ref(-1);
const markerRef = ref()
const cardContainer = ref()
const hrRef = ref()
const mapRef = ref()

function focusInput(e){
    e.preventDefault();
}
// console.log(mapRef.value);
// watch([() => mapRef.value?.ready, center], ([ready, center]) => {
//     if(!ready){
//         return
//     }
//     // console.log(ready, center);
//     mapRef.value.map.panTo(center)
// }, {
//     deep: true
// })
const data = ref([])
const data2 = ref([])
const img_big = ref('https://static.wixstatic.com/media/d7263e_553e79a1d02d4c2da0d526214ab9890b~mv2.jpg/v1/fill/w_1356,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/26-1002_Photo%20-%2010.jpg')
const city = ref([])
async function initData() {
    const res = await httpObj.sendPost('/records/query', {
        from: 'btwxxiycs',
        select: [6,7,8,...filedNum]
    })
    data.value = processData(res.data.data, res.data.fields)
    schoolDistrict.value = [...new Set(data.value.map(item => item['High School']))]
    city.value = [...new Set(data.value.map(item => item['Project Address'].split(', ')[1]))]
    data.value = data.value.sort((a, b) => {
		return b['Project Address'].split(', ')[1].charCodeAt(0) - a['Project Address'].split(', ')[1].charCodeAt(0)
    })
    data.value = data.value.filter(item => item['Display'])
    data.value = data.value.sort((a, b) => a['House Status'].charCodeAt(0) - b['House Status'].charCodeAt(0))
    // data2.value = processData(res.data.data, res.data.fields)
    // data2.value = data.value.sort((a, b) => {
    //     const cityA = city.value.indexOf(a['Project Address'].split(', ')[1])
	// 	const cityB = city.value.indexOf(b['Project Address'].split(', ')[1])
	// 	return cityA - cityB
    // })
    // console.log(data.value);
}
function clickMarker(item, event) {
    if(item['House Status'] === 'For Sale'){
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
    } else {
        ElMessage.warning(`The House Status is ${item['House Status']}!`);
    }
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
    if(item['House Status'] === 'For Sale'){
        router.push(`/detail/${item['Project - Street ID']}`)
    } else {
        ElMessage.info(`The House is ${item['House Status']}!`);
    }
}

const priceFilter = ref([2000000, 5000000])
// 外部价格过滤
async function filterPrice(){
    await initData()
    data.value = data.value.filter(item => {
        if(priceFilter.value[0] === priceFilter.value[1]){
            return item['List Price'] === priceFilter.value[0]
        } else {
            return item['List Price'] >= priceFilter.value[0] && item['List Price'] <= priceFilter.value[1]
        }
    })
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
    priceFilter.value = [2000000, 5000000]
    schoolDistrictSelectedValue.value = ''
    cityValue2.value = '';
    inputWidth.value = false
    searchValue.value = ''
}

const searchValue = ref('')
const inputWidth = ref(false);
async function search(){
    if(searchValue.value){
        await initData()
        data.value = data.value.filter(item => item['Project Address'].includes(searchValue.value))
    } else {
        inputWidth.value = !inputWidth.value
    }
}
const schoolDistrict = ref([])
const schoolDistrictSelectedValue = ref('')
async function schoolChange(){
    await initData()
    data.value = data.value.filter(item => item['High School'] === schoolDistrictSelectedValue.value)
}
const cityValue2 = ref('');
const cityChangeOut = async (value) => {
    await initData();
    data.value = data.value.filter(item => item['Project Address'].includes(value))
}
// 抽屉
const drawer = ref(false);
const priceFilter2 = ref([2000000, 5000000])
const status = ref('For Sale')
const beds = ref([3, 8])
const baths = ref([3, 8])
const house = ref(false)
const townhouse = ref(false);
const minSqft = ref(0);
const maxSqft = ref(0);
const cityValue = ref('');
const schoolDistrictSelectedValueIn = ref('');
const garageNumberArrIn = ref([1, 5]);
const resetIn = async () => {
    drawer.value = false;
    mobileDrawer.value = false;
    priceFilter2.value = [2000000, 5000000]
    status.value = 'For Sale';
    beds.value = [3, 8];
    baths.value = [3, 8];
    house.value = false
    townhouse.value = false
    minSqft.value = 0;
    maxSqft.value = 0;
    cityValue.value = '';
    schoolDistrictSelectedValueIn.value = '';
    garageNumberArrIn.value = [1, 5];
    await initData();
}
const filterIn = async () => {
    await initData();
    data.value = data.value.filter(item => item['House Status'] === status.value)
    // console.log(data.value, 'status');
    data.value = data.value.filter(item => {
        if(priceFilter2.value[0] === priceFilter2.value[1]){
            return item['List Price'] === priceFilter2.value[0]
        } else {
            return item['List Price'] >= priceFilter2.value[0] && item['List Price'] <= priceFilter2.value[1]
        }
    })
    // console.log(data.value, 'price')
    data.value = data.value.filter(item => {
        if(baths.value[0] === baths.value[1]){
            return item['Number Of Bedrooms'] === beds.value[0]
        } else {
            return item['Number Of Bedrooms'] >= beds.value[0] && item['Number Of Bedrooms'] <= beds.value[1]
        }
    })
    // console.log(data.value, 'beds')
    data.value = data.value.filter(item => {
        if(baths.value[0] === baths.value[1]){
            return item['Number Of Bathrooms'] === baths.value[0]
        } else {
            return item['Number Of Bathrooms'] >= baths.value[0] && item['Number Of Bathrooms'] <= baths.value[1]
        }
    })
    // console.log(data.value, 'baths')
    // console.log(data.value, priceFilter2.value)
    data.value = data.value.filter(item => {
        if(garageNumberArrIn.value[0] === garageNumberArrIn.value[1]){
            return item['Number Of Garage'] === garageNumberArrIn.value[0]
        } else {
            return item['Number Of Garage'] >= garageNumberArrIn.value[0] && item['Number Of Garage'] <= garageNumberArrIn.value[1]
        }
    })
    // console.log(data.value, 'garage')
    data.value = data.value.filter(item => {
        if(schoolDistrictSelectedValueIn.value){
            return item['High School'] === schoolDistrictSelectedValueIn.value
        } else {
            return item
        }
    })
    // console.log(data.value, 'school')
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
    // console.log(data.value, 'sqft')
    data.value = data.value.filter(item => {
        if(cityValue.value){
            return item['Project Address'].includes(cityValue.value)
        } else {
            return item
        }
    })
    // console.log(data.value, 'city');
    mobileDrawer.value = false;
    priceFilter2.value = [2000000, 5000000]
    status.value = 'For Sale';
    beds.value = [3, 8];
    baths.value = [3, 8];
    house.value = false
    townhouse.value = false
    minSqft.value = 0;
    maxSqft.value = 0;
    cityValue.value = '';
    schoolDistrictSelectedValueIn.value = '';
    garageNumberArrIn.value = [1, 5];
    drawer.value = false;
    if(width.value < 1024 && data.value.length === 0){
        showToast('There is no data!');
        resetIn();
    }
}
const cardContainerTop = ref();
const cardContainerBottom = ref();
let observer = null;
let observer2 = null;
onMounted(async () => {
    await initData()
    // observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting){
    //             img_big.value = data.value.find(item => {
    //                 if(entry.target.id.split('h')[1] === '6800'){
    //                     return item['Project - Street ID'] === '6800 '
    //                 } else {
    //                     return item['Project - Street ID'] === entry.target.id.split('h')[1]
    //                 }
    //             })['Profile Pic Link']
    //         }
    //     })
    // }, {
    //     root: document.querySelector('.card-container'),
    //     threshold: 0.5,
    //     rootMargin: `-20% 0px -20% 0px`,
    // })
    // document.querySelectorAll('.card').forEach(item => {
    //     observer.observe(item)
    // })
    // observer2 = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting){
    //             if(entry.target.classList.contains('c-top')){
    //                 img_big.value = data.value.filter(item => item['House Status'] === 'For Sale')[0]['Profile Pic Link']
    //             } else {
    //                 img_big.value = data.value.filter(item => item['House Status'] === 'For Sale')[data.value.length - 1]['Profile Pic Link']
    //             }
    //         }
    //     })
    // }, {
    //     root: document.querySelector('.card-container')
    // })
    // observer2.observe(cardContainerTop.value);
    // observer2.observe(cardContainerBottom.value);
})

onUnmounted(() => {
    // observer.disconnect();
    // observer2.disconnect();
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

function mobileImgPreview(url, e){
    e.stopPropagation()
    showImagePreview([url])
}
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