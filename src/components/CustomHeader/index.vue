<template>
    <div ref="header" style="font-family: 'Font3';" class="header w-full h-[70px] flex items-center sticky top-0 z-10 bg-white/[0.9]">
        <div class="logo lg:w-[150px] w-[120px] ml-2 h-[50px] flex items-center justify-center">
            <router-link to="/">
                <img class="max-w-full max-h-full min-w-[90px] min-h-auto cursor-pointer" src="https://static.wixstatic.com/media/b1c943_05819fe25f0b4d2c99ad10dc492f8708~mv2.png/v1/fill/w_206,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b1c943_05819fe25f0b4d2c99ad10dc492f8708~mv2.png" alt="">
            </router-link>
        </div>
        <div class="menu hidden w-[700px] lg:w-[1050px] h-[50px] mx-auto gap-10 text-center text-[16px]  md:flex items-center justify-center">
            <div class="menu-item cursor-pointer group/item1 relative">
                <span>Build On Your Lot</span>
                <div class="dropdown hidden absolute top-full left-1/2 -translate-x-1/2 text-[15px] w-[250px] h-[90px] rounded-lg border bg-white/90 group-hover/item1:flex group-hover/item1:flex-col">
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/floor-plan">Semi-Custom Floor Plans</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/semi-customprocess">Semi-Custom Process</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/custom-design-build">Custom Design & Build</a>
                    </div>
                </div>
            </div>
            <div class="menu-item cursor-pointer">
                <a href="https://available-homes.myanchorhomes.com">Available Homes</a>
            </div>
            <div class="menu-item cursor-pointer group/item2 relative hover:text-gray-500">
                <span>
                    Virtual Tour
                </span>
                <div class="dropdown hidden absolute top-full left-1/2 -translate-x-1/2 text-[15px] w-[150px] h-[60px] rounded-lg border bg-white/90 group-hover/item2:flex group-hover/item2:flex-col">
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/virtual-tour">Virtual Tour</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/remote-home-tour">Video Tour</a>
                    </div>
                </div>
            </div>
            <div class="menu-item cursor-pointer hidden lg:block">
                <a href="https://www.myanchorhomes.com/we-buy-land">We Buy Land</a>
            </div>
            <div class="menu-item cursor-pointer group/item3 relative hidden lg:block">
                <span>Gallery</span>
                <div class="dropdown hidden absolute top-full left-1/2 -translate-x-1/2 text-[15px] w-[150px] h-[300px] rounded-lg border bg-white/90 group-hover/item3:flex group-hover/item3:flex-col">
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/exterior">Exterior</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/interior">Interior</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/kitchen">Kitchen</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/bathroom">Bathroom</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/fireplace">Fireplace</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/staircase">Staircase</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/theater">Theater</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/wetbar">Wet Bar</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/built-in">Built-in</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/home-office">Home Office</a>
                    </div>
                </div>
            </div>
            <div class="menu-item cursor-pointer group/item4 relative hidden lg:block">
                <span>Contact Us</span>
                <div class="dropdown hidden absolute top-full left-1/2 -translate-x-1/2 text-[15px] w-[250px] h-[120px] rounded-lg border bg-white/90 group-hover/item4:flex group-hover/item4:flex-col">
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/contact-us">Contact Us</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/become-trade-partner">Become a Trade Partner</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/subscribe">Subscribe</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/newjobs">Career</a>
                    </div>
                </div>
            </div>
            <div class="menu-item lg:hidden cursor-pointer group/item5 relative">
                <span>More...</span>
                <div class="dropdown hidden absolute top-full left-1/2 -translate-x-1/2 text-[15px] w-[250px] h-[510px] rounded-lg border bg-white/90 group-hover/item5:flex group-hover/item5:flex-col">
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/we-buy-land">We Buy Land</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">Gallery</div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/exterior">Exterior</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/interior">Interior</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/kitchen">Kitchen</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/bathroom">Bathroom</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/fireplace">Fireplace</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/staircase">Staircase</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/theater">Theater</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/wetbar">Wet Bar</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/built-in">Built-in</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/gallery/home-office">Home Office</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">Contact Us</div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/contact-us">Contact Us</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/become-trade-partner">Become a Trade Partner</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/subscribe">Subscribe</a>
                    </div>
                    <div class="item flex-1 flex items-center justify-center hover:text-gray-500">
                        <a href="https://www.myanchorhomes.com/newjobs">Career</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="whatsapp h-[50px] w-[50px] md:flex items-center mr-2 hidden">
            <a href="https://web.whatsapp.com/send?phone=17039971618&text=Hello%20Anchor%20Homes%20">
                <img class=" object-contain" src="https://static.wixstatic.com/media/11062b_516a2e8c3ab04d55b10a2a8b7119a536~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_516a2e8c3ab04d55b10a2a8b7119a536~mv2.png" alt="">
            </a>
        </div>
        <div @click="drawerVisible = !drawerVisible" class="w-[30px] h-[30px] flex items-center justify-center md:hidden mr-2 ml-auto cursor-pointer">
            <ListIcon />
        </div>
    </div>
    <a-drawer :width="300" :footer="false" :closable="false" :header="false" :visible="drawerVisible" @close="drawerVisible = false" @cancel="drawerVisible = false">
        <div class="w-full h-full relative">
            <div @click="drawerVisible = false" class="close-btn absolute top-0 right-0 cursor-pointer w-[20px] h-[20px] flex items-center justify-center hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg>
            </div>
            <a-menu style="font-family: 'Font3'; height: 90%; margin-top: 30px;">
                <a-sub-menu key="0">
                    <template #title>Build On Your Lot</template>
                    <a-menu-item key="0_0">
                        <a href="https://www.myanchorhomes.com/floor-plan"  style="font-family: 'Font2';">Semi-Custom Floor Plans</a>
                    </a-menu-item>
                    <a-menu-item key="0_1">
                        <a href="https://www.myanchorhomes.com/semi-customprocess" style="font-family: 'Font2';">Semi-Custom Process</a>
                    </a-menu-item>
                    <a-menu-item key="0_2">
                        <a href="https://www.myanchorhomes.com/custom-design-build" style="font-family: 'Font2';">Custom Design & Build</a>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="1">
                    <a href="https://available-homes.myanchorhomes.com/">Available Homes</a>
                </a-menu-item>
                <a-sub-menu key="2">
                    <template #title>Virtual Tour</template>
                    <a-menu-item key="2_1">
                        <a href="https://www.myanchorhomes.com/virtual-tour" style="font-family: 'Font2';">Virtual Tour</a>
                    </a-menu-item>
                    <a-menu-item key="2_2">
                        <a href="https://www.myanchorhomes.com/remote-home-tour" style="font-family: 'Font2';">Video Tour</a>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="3">
                    <a href="https://www.myanchorhomes.com/we-buy-land">We Buy Land</a>
                </a-menu-item>
                <a-sub-menu key="4">
                    <template #title>Gallery</template>
                    <a-menu-item key="4-1">
                        <a href="https://www.myanchorhomes.com/gallery/exterior" style="font-family: 'Font2';">Exterior</a>
                    </a-menu-item>
                    <a-menu-item key="4_2">
                        <a href="https://www.myanchorhomes.com/gallery/interior" style="font-family: 'Font2';">Interior</a>
                    </a-menu-item>
                    <a-menu-item key="4_3">
                        <a href="https://www.myanchorhomes.com/gallery/kitchen" style="font-family: 'Font2';">Kitchen</a>
                    </a-menu-item>
                    <a-menu-item key="4_4">
                        <a href="https://www.myanchorhomes.com/gallery/bathroom" style="font-family: 'Font2';">Bathroom</a>
                    </a-menu-item>
                    <a-menu-item key="4_5">
                        <a href="https://www.myanchorhomes.com/gallery/fireplace" style="font-family: 'Font2';">Fireplace</a>
                    </a-menu-item>
                    <a-menu-item key="4_6">
                        <a href="https://www.myanchorhomes.com/gallery/staircase" style="font-family: 'Font2';">Staircase</a>
                    </a-menu-item>
                    <a-menu-item key="4_7">
                        <a href="https://www.myanchorhomes.com/gallery/theater" style="font-family: 'Font2';">Theater</a>
                    </a-menu-item>
                    <a-menu-item key="4_8">
                        <a href="https://www.myanchorhomes.com/gallery/wetbar" style="font-family: 'Font2';">Wet Bar</a>
                    </a-menu-item>
                    <a-menu-item key="4_9">
                        <a href="https://www.myanchorhomes.com/gallery/built-in" style="font-family: 'Font2';">Built-in</a>
                    </a-menu-item>
                    <a-menu-item key="4_10">
                        <a href="https://www.myanchorhomes.com/gallery/home-office" style="font-family: 'Font2';">Home Office</a>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="5">
                    <template #title>Contact Us</template>
                    <a-menu-item key="5_1">
                        <a href="https://www.myanchorhomes.com/contact-us" style="font-family: 'Font2';">Contact Us</a>
                    </a-menu-item>
                    <a-menu-item key="5_2">
                        <a href="https://www.myanchorhomes.com/become-trade-partner" style="font-family: 'Font2';">Become a Trade Partner</a>
                    </a-menu-item>
                    <a-menu-item key="5_3">
                        <a href="https://www.myanchorhomes.com/subscribe" style="font-family: 'Font2';">Subscribe</a>
                    </a-menu-item>
                    <a-menu-item key="5_4">
                        <a href="https://www.myanchorhomes.com/newjobs" style="font-family: 'Font2';">Career</a>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
    </a-drawer>
</template>

<script setup>
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ref } from 'vue';
const header = ref();
const drawerVisible = ref(false);
const icon = ref(true)
</script>

<style scoped>

</style>