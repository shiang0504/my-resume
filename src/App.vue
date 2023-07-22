<script setup>
import { ref, reactive, onMounted } from 'vue'
import { typewriterOrder1, typewriterOrder2, typewriterOrder3 } from './JS/typewriter.js'

const noScroll = ref(true)
const loadingfixed = ref(null)
const chatboxToggle1 = ref(null)
const chatboxToggle2 = ref(null)
const chatboxToggle3 = ref(null)
const chatboxToggle4 = ref(null)
const chatboxToggle5 = ref(null)
const chatboxToggle = reactive({
  item0: false,
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
})
const section1Toggle = reactive({
  hero: false,
})
const scrollDownToggle = reactive({
  small: false,
  hide: false,
})

const typewriterDOM1 = ref(null)
const typewriterDOM2 = ref(null)
const typewriterDOM3 = ref(null)

const myExp = reactive({
  exp0: false,
  exp1: false,
  exp2: false,
  exp3: false,
  exp4: false,
  exp5: false,
  exp6: false,
  exp7: false,
})
const section3Toggle = reactive({
  hero: false,
})

const chatboxWrap = ref()
const section1_items = ref()
const section1_hero = ref()
const myExpWrap = ref()
const exp0 = ref()
const exp1 = ref()
const exp2 = ref()
const exp3 = ref()
const exp4 = ref()
const exp5 = ref()
const exp6 = ref()
const exp7 = ref()
const section2 = ref()
const section2_items = ref()
const section2_items_imgs = ref([])
const section3_items = ref()
const section3_hero = ref()
const contentText = ref(true)

onMounted(()=>{
  // 取消loading狀態
  setTimeout(()=>{
    loadingfixed.value.style.transform = 'translateY(-100%)';
    noScroll.value = false
  }, 1000)
  // 最後面的文字循環
  setInterval(()=>{
    contentText.value = !contentText.value
  }, 5000);
  const scrollHandler=()=>{
    // console.log('整個網站的高度',document.documentElement.scrollHeight)
    // console.log('body垂直捲軸被捲動的距離',document.documentElement.scrollTop)
    // console.log('瀏覽器/可視範圍的寬度',window.innerWidth)
    // console.log('瀏覽器滾動距離',window.scrollY)
    // console.log('瀏覽器滾動距離2',window.pageYOffset)
    // console.log('元素的寬度offsetWidth',section2_items.value.offsetWidth)
    // console.log('元素的寬度clientWidth',section2_items.value.clientWidth)
    // console.log('元素的寬度scrollWidth',section2_items.value.scrollWidth)
    // console.log('元素的寬度getBoundingClientRect().width',section2_items.value.getBoundingClientRect().width)
    
    //滾動到最頂部時 操作滾動提示
    if(window.scrollY>50) scrollDownToggle.small = true
    else scrollDownToggle.small= false

    //section0 控制對話泡泡的出現否
    chatboxToggle.item0 = chatboxWrap.value.offsetTop > 100 ? true : false
    chatboxToggle.item1 = chatboxWrap.value.offsetTop > 200 ? true : false
    chatboxToggle.item2 = chatboxWrap.value.offsetTop > 300 ? true : false
    chatboxToggle.item3 = chatboxWrap.value.offsetTop > 400 ? true : false
    chatboxToggle.item4 = chatboxWrap.value.offsetTop > 500 ? true : false
    chatboxToggle.item5 = chatboxWrap.value.offsetTop > 600 ? true : false

    //****section1 轉場
    section1_hero.value.style.opacity = section1_items.value.offsetTop/500  //得到0-1
    section1_hero.value.style.width = section1_items.value.offsetTop/500 *(100-10)+ 10 +'vmax' //得到10-100
    section1_hero.value.style.height = section1_items.value.offsetTop/500 *(100-10)+ 10 +'vmax'
    section1Toggle.hero = section1_items.value.offsetTop <= 451 ? true : false
    
    //****myExp 主要介紹
    if(exp0.value.getBoundingClientRect().top < window.innerHeight*2/3) {
      myExp.exp0 = true
      typewriterOrder1(typewriterDOM1.value, '您好，我是祺翔，對於網頁設計開發有高度興趣，具一年以上前端網頁自學與開發經驗，讓我養成獨立思考、拆解問題再解決問題的能力，')
      typewriterOrder2(typewriterDOM2.value, '擅長攝影，也對影像品質有要求，結合影像處理專長，已從零到有獨立完成數個RWD Website/APP，敬請參考下方作品集，')
      typewriterOrder3(typewriterDOM3.value, '另已具備後端PHP與MySQL、MongoDB的CRUD基礎，也開始摸索Node.js，了解路由和RestfulAPI設計概念，個性謹慎細心、圓融合群，在前一份工作中有維護管理網站經驗，也常要與工程師和使用者溝通，有信心能在新團隊中快速進入狀況並貢獻所長！')
    }
    if(exp1.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp1 = true
    if(exp2.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp2 = true
    if(exp3.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp3 = true
    if(exp4.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp4 = true
    if(exp5.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp5 = true
    if(exp6.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp6 = true
    if(exp7.value.getBoundingClientRect().top < window.innerHeight*2/3) myExp.exp7 = true

    //****section2 興趣 橫向移動處理
    section2.value.style.height = (section2_items.value.scrollWidth)+'px' //讓section2的高度自動等於可以完整展示items的寬度
    if(section2.value.getBoundingClientRect().top < 0){
      section2_items.value.style.transform= `translateX(${section2.value.getBoundingClientRect().top}px)` //控制section2_items的translateX偏移=section2脫離可視範圍的距離
    }
    //讓圖片在畫面左右兩側時rotate旋轉-20~20deg
    const innerWidthCenter = window.innerWidth/2
    section2_items_imgs.value.forEach(el => {
      let rotate =  Math.round(el.getBoundingClientRect().left / (window.innerWidth-el.getBoundingClientRect().width) *(20+20)-20 ) *-1
      rotate = rotate >= 20 ? 20 : rotate
      rotate = rotate <= -20 ? -20 : rotate
      el.style.transform = `rotateY(${rotate}deg)`
    })
    //****section3 轉場
    section3_hero.value.style.width = Math.abs(section3_items.value.offsetTop*0.1-100)+0.5+'vmax' //0 =>100
    section3_hero.value.style.height = Math.abs(section3_items.value.offsetTop*0.1-100)+0.5+'vmax' //1000 => 0
    section3Toggle.hero = section3_items.value.offsetTop >= 100 ? true : false
    //滾動到最底部時 操作滾動提示隱藏
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-5) scrollDownToggle.hide = true
    else scrollDownToggle.hide = false
  }
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('resize', scrollHandler)
})
</script>

<template>
  <div class="loadingfixed" ref="loadingfixed" @transitionend="loadingfixed.style.display='none'">
    <div class="message">Loading...</div>
    <div class="loading">
      <div class="rectangle"></div>
      <div class="rectangle"></div>
      <div class="rectangle"></div>
    </div>
  </div>
  <div class="scroll_down" :class="{hide:scrollDownToggle.hide,small:scrollDownToggle.small}" @click="section2Toggle.item2=!section2Toggle.item2">SCROLL DOWN</div>

<div :class="{noScroll: noScroll}">
  <div class="section0">
    <div class="chatboxWrap" ref="chatboxWrap" :class="{active:chatboxToggle.item0}">
      <div class="tool">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="chatbox">
        <div class="user remote" :class="{active:chatboxToggle.item1}">
          <span class="txt">Hello!👋</span>    
        </div>
        <div class="user local" :class="{active:chatboxToggle.item2}">
          <span class="txt">Hi!</span>    
        </div>
        <div class="user remote" :class="{active:chatboxToggle.item3}">
          <span class="txt">聽說你們在徵<span class="red">前端工程師</span>?</span>    
        </div>
        <div class="user local" :class="{active:chatboxToggle.item4}">
          <span class="txt">對，沒錯!</span>    
        </div>
        <div class="user remote" :class="{active:chatboxToggle.item5}">
          <span class="txt">請給我幾分鐘的時間介紹自己✌</span>    
        </div>
      </div>
    </div>
  </div>
  <div class="section1">
    <div class="section1_items" ref="section1_items">
      <div class="hero" ref="section1_hero" :class="{active:section1Toggle.hero}">
      </div>
    </div>
  </div>
  <div class="myExp">
    <div class="myExpWrap" ref="myExpWrap">
      <div class="exps">
        <div class="exp0" ref="exp0" :class="{active:myExp.exp0}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-regular fa-face-smile"></i></div>
            <div class="top_right"><h3>關於我</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="img">
                <img src="./assets/photo.jpg" alt="">
              </div>
              <ul>
                <li class="indent" ref="typewriterDOM1"></li>
              </ul>
              <ul>
                <li class="indent" ref="typewriterDOM2"></li>
              </ul>
              <ul>
                <li class="indent" ref="typewriterDOM3"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp7" ref="exp7" :class="{active:myExp.exp7}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-github"></i></div>
            <div class="top_right"><h3>近期作品 - 個人履歷網站</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="buttons">
                <a href="https://github.com/shiang0504/my-resume">
                  <div class="title">Source Code <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
              </div>
              <div class="image">
                <img target=_blank src="./assets/my-resume-demo.png" alt="個人履歷網站" >
              </div>
              <ul class="skill">
                <li><i class="fa-regular fa-circle-check"></i>VUE3</li>
                <li><i class="fa-regular fa-circle-check"></i>RWD</li>
                <li><i class="fa-regular fa-circle-check"></i>SCSS</li>
              </ul>
              <p>就是您目前瀏覽的網站，展示作品與履歷，</p>
              <p>靈感來自Apple官網展示產品常利用position: sticky搭配scroll事件的效果，</p>
              <p>希望您可以透過本網站的內容快速認識我。</p>
            </div>
          </div>
        </div>
        <div class="exp6" ref="exp6" :class="{active:myExp.exp6}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-github"></i></div>
            <div class="top_right"><h3>近期作品 - 寵物認養網站APP</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="buttons">
                <a href="https://github.com/shiang0504/pet-finder">
                  <div class="title">Source Code <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/pet-finder">
                  <div class="title fa-beat-fade">Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></div>
                </a>
              </div>
              <div class="image">
                <a href="https://shiang0504.github.io/pet-finder"><img target=_blank src="./assets/pet-finder-demo.png" alt="領養不棄養" ></a>
              </div>
              <ul class="skill">
                <li><i class="fa-regular fa-circle-check"></i>VUE3</li>
                <li><i class="fa-regular fa-circle-check"></i>SPA</li>
                <li><i class="fa-regular fa-circle-check"></i>串接API</li>
                <li><i class="fa-regular fa-circle-check"></i>非同步處理</li>
                <li><i class="fa-regular fa-circle-check"></i>RWD</li>
                <li><i class="fa-regular fa-circle-check"></i>SCSS</li>
              </ul>
              <p>串接政府資料開放平臺「動物認領養」API，</p>
              <p>把冷冰冰的資料用有趣的UI呈現，查詢待領養寵物的過程像在跟狗狗貓貓互動交朋友，</p>
              <p>搭配RWD和觸控事件設計，手機用單手也方便操作，</p>
              <p>可在喜愛收藏裡面查看待領養寵物的資訊，希望大家領養不棄養。</p>
            </div>
          </div>
        </div>
        <div class="exp3" ref="exp3" :class="{active:myExp.exp3}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-github"></i></div>
            <div class="top_right"><h3>近期作品 - 甜點購物網站APP</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="buttons">
                <a href="https://github.com/shiang0504/dessert-shop">
                  <div class="title">Source Code <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/dessert-shop">
                  <div class="title fa-beat-fade">Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></div>
                </a>
              </div>
              <div class="image">
                <a href="https://shiang0504.github.io/dessert-shop"><img target=_blank src="./assets/dessert-shop-demo.png" alt="甜點店"></a>
              </div>
              <ul class="skill">
                <li><i class="fa-regular fa-circle-check"></i>VUE3</li>
                <li><i class="fa-regular fa-circle-check"></i>SPA</li>
                <li><i class="fa-regular fa-circle-check"></i>Router</li>
                <li><i class="fa-regular fa-circle-check"></i>RWD</li>
                <li><i class="fa-regular fa-circle-check"></i>SCSS</li>
              </ul>
              <p>甜點主題的購物網站，資料驅動畫面渲染的動態網站，</p>
              <p>用兩筆json模擬跟後端request資料，</p>
              <p>搭配hashchange事件做頁面路由，實現每項商品都有獨立網址的效果，</p>
              <p>使用Vue3 Composition API、Vite管理開發。</p>
            </div>
          </div>
        </div>
        <div class="exp4" ref="exp4" :class="{active:myExp.exp4}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-github"></i></div>
            <div class="top_right"><h3>近期作品 - 行事曆APP</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="buttons">
                <a href="https://github.com/shiang0504/calender-project">
                  <div class="title">Source Code <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/calender-project">
                  <div class="title fa-beat-fade">Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></div>
                </a>
              </div>
              <div class="image">
                <a href="https://shiang0504.github.io/calender-project"><img target=_blank src="./assets/calender-project-demo.png" alt="行事曆"></a>
              </div>
              <ul class="skill">
                <li><i class="fa-regular fa-circle-check"></i>VUE3</li>
                <li><i class="fa-regular fa-circle-check"></i>串接API</li>
                <li><i class="fa-regular fa-circle-check"></i>非同步處理</li>
                <li><i class="fa-regular fa-circle-check"></i>RWD</li>
                <li><i class="fa-regular fa-circle-check"></i>SCSS</li>
              </ul>
              <p>簡易版本的google日曆，並串接OpenWeather API天氣預報，</p>
              <p>支援觸控手勢操作(滑動切換行事曆年、月份)，</p>
              <p>使用Vue3 Composition API、Vite管理開發。</p>
            </div>
          </div>
        </div>
        <div class="exp5" ref="exp5" :class="{active:myExp.exp5}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-github"></i></div>
            <div class="top_right"><h3>近期作品 - 工作室網站website</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <div class="buttons">
                <a href="https://github.com/shiang0504/image-studio-website">
                  <div class="title">Source Code <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/image-studio-website">
                  <div class="title fa-beat-fade">Live Demo <i class="fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></div>
                </a>
              </div>
              <div class="image">
                <a href="https://shiang0504.github.io/image-studio-website"><img target=_blank src="./assets/image-studio-website-demo.png" alt="工作室網站"></a>
              </div>
              <ul class="skill">
                <li><i class="fa-regular fa-circle-check"></i>jQuery</li>
                <li><i class="fa-regular fa-circle-check"></i>RWD</li>
                <li><i class="fa-regular fa-circle-check"></i>SCSS</li>
              </ul>
              <p>我的第一個網站，使用Javascript、jQuery、SCSS開發，</p>
              <p>展示作品及提供資訊的靜態網站，動畫使用jQuery完成。</p>
            </div>
          </div>
        </div>
        <div class="exp2" ref="exp2" :class="{active:myExp.exp2}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-vuejs"></i></div>
            <div class="top_right"><h3>使用工具及經驗</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_content">
              <ul>
                <li><img src="./assets/logo/html5.png" alt="">● HTML5</li>
                <li><img src="./assets/logo/sass.png" alt="">● SCSS</li>
                <li><img src="./assets/logo/Javascript.png" alt="">● JavaScript ES6+</li>
                <li><img src="./assets/logo/vue.png" alt="">● Vue3</li>
                <li><img src="./assets/logo/jQuery.png" alt="">● jQuery</li>
                <li><img src="./assets/logo/PHP.png" alt="">● PHP</li>
                <li><img src="./assets/logo/mysql.png" alt="">● MySQL</li>
                <li><img src="./assets/logo/nodeJS.png" alt="">● Node.js</li>
                <li><img src="./assets/logo/Mongodb.png" alt="">● MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp1" ref="exp1" :class="{active:myExp.exp1}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-regular fa-folder-open"></i></div>
            <div class="top_right"><h3>經歷及專長</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <ul>
                <span>學經歷</span>
                <li>● 景文科技大學/電子工程系畢</li>
                <li>● 藥師公會全聯會/資訊專員
                  <p class="indent">2011/1-2022/4</p>
                  <p class="indent">主要工作內容：</p>
                  <p class="indent">官方網站維護管理</p>
                  <p class="indent">資訊機房管理</p>
                  <p class="indent">辦公室電腦軟硬體維護管理</p>
                  <p class="indent">資訊軟硬體評估、規劃、採購</p>
                </li>
                <span>專長</span>
                <li>● 前端網頁開發</li>
                <li>● 美食、商品攝影</li>
                <li>● 影片拍攝及剪輯</li>
              </ul>
              <div class="img">
                <img src="./assets/certificate.jpg" alt="">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="section2" ref="section2">
    <div class="stickyer">
      <div class="section2_items" ref="section2_items">
        <div class="title">其他專長與興趣</div>
        <div class="item">
          <div class="image" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/food-1.jpg" alt="">
          </div>
          <div class="imageSub" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/food-2.jpg" alt="">
          </div>
          <div class="content">#美食攝影</div>
        </div>
        <div class="item">
          <div class="image" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/commodity-1.jpg" alt="">
          </div>
          <div class="imageSub" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/commodity-2.jpg" alt="">
          </div>
          <div class="content">#商品攝影</div>
        </div>
        <div class="item">
          <div class="image" :ref="(el)=>section2_items_imgs.push(el)">
            <video src="./assets/omega.mp4" loop autoplay muted playsinline></video>
          </div>
          <div class="imageSub" :ref="(el)=>section2_items_imgs.push(el)">
            <video src="./assets/burger.mp4" loop autoplay muted playsinline></video>
          </div>
          <div class="content">#影片拍攝&剪輯</div>
        </div>
        <div class="item">
          <div class="image" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/dog-1.jpg" alt="">
          </div>
          <div class="imageSub" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/dog-2.jpg" alt="">
          </div>
          <div class="content">#狗派</div>
        </div>
        <div class="item">
          <div class="image" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/coffee-1.jpg" alt="">
          </div>
          <div class="imageSub" :ref="(el)=>section2_items_imgs.push(el)">
            <img src="./assets/coffee-2.jpg" alt="">
          </div>
          <div class="content">#Coffee Art</div>
        </div>
      </div>
    </div>
  </div>
  <div class="section3">
    <div class="section3_items" ref="section3_items">
      <div class="bg" :class="{cancel:section3Toggle.hero}"></div>
      <div class="text">
        <p :class="{show:scrollDownToggle.hide}"><i class="fa-regular fa-envelope"></i>
          <Transition name="slideUp" mode="out-in">
          <span v-if="contentText">謝謝觀看</span>
          <span v-else>聯絡信箱</span>
          </Transition>
        </p>
        <p :class="{show:scrollDownToggle.hide}"><a href="mailto:shiang0504@gmail.com">shiang0504@gmail.com</a></p>
      </div>
      <div class="hero" ref="section3_hero" :class="{active:section3Toggle.hero}"></div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@mixin tablet-768{
    @media(max-width:768px){
        @content;
}
    }
@mixin mobile-576{
    @media(max-width:576px){
        @content;
    }
}
.noScroll{
  overflow: hidden;
  height: 100vh;
}
.loadingfixed{
  width: 100%;
  height: 100%;
  background-color: #6f6f6f;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  transform: translateY(0%);
  opacity: 1;
  .message{
    font-size: 22px;
    color: #ffffff;
  }
  .loading{
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    .rectangle{
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      border-radius: 8px;
      background: #ffffff;
      animation: loadingAnimation .5s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      &:nth-child(1){
        left: 8px;
        animation-delay: -0.24s;
      }
      &:nth-child(2){
        left: 32px;
        animation-delay: -0.12s;
      }
      &:nth-child(3){
        left: 56px;
        animation-delay: 0;
      }
    }
    @keyframes loadingAnimation{
      0%        { top: 8px;  height: 64px; }
      50%, 100% { top: 24px; height: 32px; }
    }
  }
}
.scroll_down{
  width: 200px;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 50%;
  margin: auto;
  color: rgb(121, 121, 121);
  font-size: 22px;
  animation: scroll_down_breath 5s infinite ease-in-out;
  z-index: 100;
  transition: 1s;
  transform: scale(1.8);
  &.small{
    bottom: 50px;
    transform: scale(1);
  }
  &.hide{
    display: none;
  }
  &::before,
  &::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px;
    border-color: rgb(121, 121, 121) transparent transparent transparent;
    transition: 1s;
    animation: scroll_down .8s infinite linear;
  }
  &::after{
    animation-delay: .4s;
  }
  @keyframes scroll_down {
    0%{opacity: 0;}
    25%{opacity: 1;}
    50%{opacity: 1;}
    75%{opacity: 1;}
    100%{opacity: 0; top:200%}
  }
  @keyframes scroll_down_breath {
    0%{opacity: 0.1;}
    25%{opacity: 1;}
    50%{opacity: 1;}
    75%{opacity: 1;}
    100%{opacity: 0.1}
  }
}

.section0{
  height: calc(100vh + 600px);
  display: flex;
  justify-content: center;
  .chatboxWrap{
    position: sticky;
    top: 100px;
    width: 70%;
    height: 70vh;;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgb(99, 99, 99);
    opacity: 0;
    transition: 1s;
    display: flex;
    flex-direction: column;
    @include tablet-768{
      width: 90%;
      height: 60vh;
    }
    &.active{
      opacity: 1;
    }
    .tool{
      background-color: rgb(53, 57, 65);
      border-radius: 10px 10px 0 0;
      flex: 0 0 60px;
      display: flex;
      align-items: center;
      ul{
        display: flex;
        margin-left: 16px;
        li{
          width: 16px;
          height: 16px;
          margin-right: 8px;
          border-radius: 50%;
          &:nth-child(1){
            background-color: rgb(255, 96, 88);
            border: 1px solid rgb(207, 64, 55);
          }
          &:nth-child(2){
            background-color: rgb(255, 189, 45);
            border: 1px solid rgb(220, 153, 15);
          }
          &:nth-child(3){
            background-color: rgb(40, 205, 66);
            border: 1px solid rgb(15, 160, 28);
          }
        }
      }
    }
    .chatbox{
      flex: 1 1;
      padding: 50px;
      background-color: rgb(40, 44, 52);
      border-radius: 0 0 10px 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      transition: .5s;
      @include tablet-768{
        padding: 20px;
      }
      .user{
        flex:0 0;
        display: flex;
        align-items: flex-start;
        margin-bottom: 30px;
        opacity: 0;
        &.active{
          opacity: 1;
        }
        .txt{
          display: inline;
          background-color: rgb(159, 133, 160);
          padding: 10px 20px;
          border-radius: 20px;
          flex-grow: 0;
          position: relative;
          font-size: 50px;
          @include tablet-768{
            font-size: 20px;
          }
          .red{
            color: rgb(255, 29, 29);
          }
        }
      }
      .local{
        align-self: flex-end;
        .txt{
          background-color: rgb(22, 207, 31);
          order: -1;
          &::before{
            content: '';
            position: absolute;
            right: -16px;
            top: 40%;
            transform: translateY(-50%);
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid rgb(22, 207, 31) ;
            border-right: 10px solid transparent;
          }
        }
      }
      .remote .txt{
        background-color: rgb(177, 177, 177);
        color: rgb(255, 255, 255);
        &::before{
          content: '';
          position: absolute;
          left: -16px;
          top: 40%;
          transform: translateY(-50%);
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid rgb(177, 177, 177) ;
          border-left: 10px solid transparent;
        }
      }
    }
  }
}
.section1{
  height: calc(100vmax + 500px);
  position: relative;
  .section1_items{
    height: 100vmax;
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.myExp{
  overflow-x: hidden;
  .myExpWrap{
    background-color: #000000;
    padding: 100px 0;
    width: 100%;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .exps{
      width: 80%;
      color: white;
      display: flex;
      flex-direction: column;
      @include tablet-768{
        width: 95%;
      }
      .exp0, .exp1{
        flex: 1 0 auto;
        margin-bottom: 100px;
        padding: 30px;
        box-sizing: border-box;
        border: 1px white solid;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        flex-direction: column;
        font-size: 30px;
        transform: translateX(30px);
        opacity: 0;
        transition: all 1s;
        .exp_top{
          flex: 0 0;
          display: flex;
          align-items: center;
          .top_left{
            i{
              font-size: 50px;
            }
          }
          .top_right{
            margin-left: 20px;
          }
        }
        .exp_bottom{
          flex: 0 0;
          padding-bottom: 60px;
          margin-top: 60px;
          display: flex;
          width: 100%;
          .bottom_left{
            flex: 0 0 1px;
            max-height: 0;
            background-color: #616161;
            position: relative;
            font-size: 20px;
            left: -10px;
            transition: max-height 1s 1s;
            &::after{
              content: '<h3>';
              position: absolute;
              top: -30px;
              color: #616161;
            }
            &::before{
              content: '</h3>';
              position: absolute;
              bottom: -30px;
              color: #616161;
            }
          }
          .bottom_right{
            flex: 1;
            margin-left: 20px;
            transform: translateX(-30px);
            opacity: 0;
            transition: all 1s 2s;
            display: flex;
            align-items: center;
            @include tablet-768{
              flex-direction: column;
            }
            ul, .img{
              flex: 1;
              margin: 30px;
              position: relative;
              img{
                width: 100%;
                height: 100%;
                border-radius: 20px;
              }
              @include tablet-768{
                margin: 10px;
              }
              span{
                background-color: white;
                color: black;
                border-radius: 20px;
                padding: 5px;
                margin: 30px 0 0 0;
                display: inline-block;
              }
              li{
                p{
                  margin-top: 5px;
                  font-size: 18px;
                  color: gray;
                  &.indent{
                    text-indent: 1.5em;
                  }
                }
              }
            }
            .img::after{
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 10px;
              left: 10px;
              border-radius: 20px;
              border: 1px solid white;
              z-index: -1;
            }
          }
        }
        &.active{
          opacity: 1;
          transform: translateX(0px);
          .bottom_left{
            max-height: 1500px;
          }
          .bottom_right{
            transform: translateX(0px);
            opacity: 1;
          }
        }
      }
      .exp0{
        .bottom_right{
          flex-direction: column;
          ul{
            display: block;
            width: 100%;
            margin-bottom: 5px !important;
            li.indent{
              text-indent: 2em;
            }
          }
          .img{
            width: 20vmin;
            height: 30vmin;
              img{
                object-position: center 20%;
                width: 100%;
                height: 100%;
            }
          }
        }
      }
      .exp2{
        flex: 1 0 auto;
        margin-bottom: 100px;
        padding: 30px 30px 60px 30px;
        box-sizing: border-box;
        border: 1px white solid;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        flex-direction: column;
        font-size: 30px;
        transform: translateX(30px);
        opacity: 0;
        transition: all 1s;
        .exp_top{
          flex: 0 0;
          display: flex;
          align-items: center;
          .top_left{
            i{
              font-size: 50px;
            }
          }
          .top_right{
            margin-left: 20px;
          }
        }
        .exp_bottom{
          flex: 0 0;
          display: flex;
          margin-top: 60px;
          padding-top: 30px;
          width: 100%;
          position: relative;
          &::before{
            content: '';
            height: 0%;
            width: 3px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #055034;
            z-index: 1;
            transition: height 1s 2s;
          }
          &::after{
            content: '1 year';
            white-space: nowrap;
            height: 3px;
            width: 0%;
            text-align: right;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 20px;
            background-color: #055034;
            opacity: 0;
            transition: opacity 1s 1s, width 1s 2s;
          }
          .bottom_content{
            width: 100%;
            opacity: 0;
            transition: opacity 1s 3s;
            ul{
              li{
                position: relative;
                box-sizing: border-box;
                font-size: 16px;
                padding: 2px 10px 2px 10px;
                margin-bottom: 20px;
                white-space: nowrap;
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 0 20px 20px 0;
                &:nth-child(1){
                  width: 0%;
                  transition: width 3s 3s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #64d6ac;
                }
                &:nth-child(2){
                  width: 0%;
                  transition: width 3s 3s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #59c09a;
                }
                &:nth-child(3){
                  width: 0%;
                  transition: width 3s 3.1s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #51af8c;
                }
                &:nth-child(4){
                  width: 0%;
                  transition: width 3s 3.2s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #459678;
                }
                &:nth-child(5){
                  width: 0%;
                  transition: width 3s 3.3s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #3c8268;
                }
                &:nth-child(6){
                  width: 0%;
                  transition: width 3s 3.4s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #37765f;
                }
                &:nth-child(7){
                  width: 0%;
                  transition: width 3s 3.4s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #2d604d;
                }
                &:nth-child(8){
                  width: 0%;
                  transition: width 3s 3.4s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #265040;
                }
                &:nth-child(9){
                  width: 0%;
                  transition: width 3s 3.4s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #1f4033;
                  margin-bottom: 40px;
                }
                img{
                  height: 100%;
                }
              }
            }
          }
        }
        &.active{
          opacity: 1;
          transform: translateX(0px);
          .exp_bottom{
            &::before{
              height: 100%;
            }
            &::after{
              width: 100%;
              opacity: 1;
            }
            .bottom_content{
              opacity: 1;
              width: 100%;
              ul{
                li{
                  &:nth-child(1){
                    width: 100%;
                  }
                  &:nth-child(2){
                    width: 100%;
                  }
                  &:nth-child(3){
                    width: 80%;
                  }
                  &:nth-child(4){
                    width: 60%;
                  }
                  &:nth-child(5){
                    width: 50%;
                  }
                  &:nth-child(6){
                    width: 30%;
                  }
                  &:nth-child(7){
                    width: 30%;
                  }
                  &:nth-child(8){
                    width: 15%;
                  }
                  &:nth-child(9){
                    width: 15%;
                  }
                }
              }
            }
          }
        }
      }
      .exp3, .exp4, .exp5, .exp6, .exp7{
        flex: 1 0 auto;
        margin-bottom: 100px;
        padding: 30px;
        box-sizing: border-box;
        border: 1px white solid;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        flex-direction: column;
        font-size: 30px;
        transform: translateX(30px);
        opacity: 0;
        transition: all 1s;
        .exp_top{
          flex: 0 0;
          display: flex;
          align-items: center;
          .top_left{
            i{
              font-size: 50px;
            }
          }
          .top_right{
            margin-left: 20px;
          }
        }
        .exp_bottom{
          width: 100%;
          flex: 0 0;
          display: flex;
          padding-bottom: 60px;
          margin-top: 60px;
          .bottom_left{
            width: 1px;
            max-height: 0;
            background-color: #616161;
            position: relative;
            font-size: 20px;
            left: -10px;
            transition:max-height 1s 1s;
            &::after{
              content: '<h3>';
              position: absolute;
              top: -30px;
              color: #616161;
            }
            &::before{
              content: '</h3>';
              position: absolute;
              bottom: -30px;
              color: #616161;
            }
          }
          .bottom_right{
            width: 100%;
            margin-left: 20px;
            opacity: 0;
            transform: translateX(-30px);
            transition: all 1s 2s;
            .buttons{
              display: flex;
              justify-content: center;
              align-items: center;
              a{
                text-decoration: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                
                &:visited{
                  color: #000000;
                }
                
                &::after{
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border-radius: 20px;
                  border: 1px solid white;
                  z-index: -1;
                }
                .title{   
                  font-size: 20px;
                  padding: 10px;
                  border-radius: 20px;
                  color: #000000;
                  background-color: rgb(232, 232, 232); 
                  transition: all .5s;
                  &:hover{
                    transform: translate(-6px, -6px);
                    background-color: rgb(185, 185, 185);
                  }
                }
                &:last-child{
                  margin-left: 10px;
                }
              }
            }
            .image{
              width: 50%;
              margin: 30px auto;
              position: relative;
              font-size: 0;
              img{
                width: 100%;
                border-radius: 20px;
                filter: drop-shadow(0px 0px 160px #055034);
              }
              // &::after{
              //   content: '';
              //   position: absolute;
              //   top: 10px;
              //   left: 10px;
              //   width: 80%;
              //   height: 80%;
              //   background: #a4c1b6;
              //   border-radius: 20px;
              //   border: 1px solid white;
              //   z-index: -1;
              // }
              @include tablet-768{
                width: 100%;
              }
            }
            .skill{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              @include tablet-768{
                justify-content: start;
              }
              li{
                font-size: 20px;
                line-height: 30px;
                height: 30px;
                background-color: #055034;
                margin: 5px;
                padding: 0px 5px;
                border-radius: 30px;
                i{
                  margin-right: 2px;
                }
              }
            }
            p{
              text-align: center;
              font-size: 20px;
              margin-top: 5px;
              @include tablet-768{
                text-align: left;
              }
            }
          }
        }
        &.active{
          opacity: 1;
          transform: translateX(0px);
          .bottom_left{
            max-height: 1000px;
          }
          .bottom_right{
            transform: translateX(0px);
            opacity: 1;
          }
        }
      }
    }
  }
}
.section2{
  height: 1000px; //由JS處理
  width: 100%;
  background-color: #000000;
  .stickyer{
    position: sticky;
    top: 0;
    overflow-x: hidden;
  }
  .section2_items{
    height: 100vh;
    background-color: #000000;
    padding-right: 80vmax; 
    display: flex;
    align-items: center;
    @include tablet-768{
      padding: 0 0 0 200px; 
    }
    .title{
      flex-shrink: 0;
      width: 100vw;
      height: 80vmin;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      color: white;
    }
    .item{
      flex-shrink: 0;
      width: 80vmin;
      height: 80vmin;
      background-color: #000000; 
      margin: 100px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-end;
      perspective: 400px;
      .image{
        width: 55%;
        height: 55%;
        position: relative;
        z-index: 1;
        transition: all .5s;
        &:hover{
          width: 60%;
          height: 60%;
          transform: rotateY(0deg) !important;
        }
        img, video{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .imageSub{
        width: 35%;
        height: 35%;
        position: relative;
        transition: all .5s;
        margin: auto;
        &:hover{
          width: 40%;
          height: 40%;
          transform: rotateY(0deg) !important;
        }
        img, video{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .content{
        font-size: 16px;
        width: 50%;
        height: 30%;
        z-index: 3;
        display: flex;
        align-items: center;
        margin: auto;
        color: #ffffff;
        font-size: 50px;
      }
      &:nth-child(1){
        .imageSub{
          top: 100px;
        }
      }
      &:nth-child(2){
        .image{
          top: 50px;
        }
      }
      &:nth-child(3){
        .image{
          top: -100px;
        }
        .imageSub{
          order: 1;
          top: -100px;
        }
      }
      &:nth-child(4){
        .imageSub{
          top: -150px;
        }
        .content{
          order: -1;
        }
      }
    }
  }
}
.section3{
  height: calc(100vh + 1000px);
  position: relative;
  .section3_items{
    height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .bg{
      width: 100%;
      height: 30%;
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
      position: absolute;
      top: 0;
      &.cancel{
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%);
      }
    }
    .text{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      @include tablet-768{
        flex-direction: column; 
      }
      p{
        z-index: -1;
        font-size: 40px;
        font-weight: 800;
        opacity: 0;
        transition: all 1s;
        width: 50vmax;
        overflow: hidden;
        &:nth-child(1){
          transform: translateX(-50px);
          padding-right: 1vmax;
          text-align: right;
          @include tablet-768{
            text-align: center;
            transform: translateY(-50px);
            margin-bottom: 10px;
            padding-right: unset;
          }
        }
        &:nth-child(2){
          transform: translateX(50px);
          padding-left: 1vmax;
          text-align: left;
          a{
            color: white;
            background: black;
            text-decoration: none;
            pointer-events: auto;
            cursor: pointer;
          }
          @include tablet-768{
            text-align: center;
            transform: translateY(50px);
            margin-top: 10px;
            padding-left: unset;
          }
        }
        &.show{
          opacity: 1;
          transform: translateX(0px);
        }
        i {
          margin-right: 5px;
        }
      }
    }
  }
}
.hero{
  background: url(./assets/hero-col.jpg) no-repeat center center / cover;
  display: flex;
  justify-content: center;
  border-radius: unset;
  transition: all .1s;
  &.active{
    border-radius: 50%;
  }
}
.slideUp-enter-active, .slideUp-leave-active {
  transition: all .3s linear;
  position: relative;
  top: 0;
}
.slideUp-enter-from {
  opacity: 0;
  top: 50px;
}
.slideUp-leave-to {
  opacity: 0;
  top: -50px;
}
</style>