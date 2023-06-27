<script setup>
import { ref, reactive, watchEffect, watch, computed, onMounted, onBeforeMount, onBeforeUpdate } from 'vue'
import { text, changeText } from './JS/changeText.js'

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
const myExp = reactive({
  exp0: false,
  exp1: false,
  exp2: false,
  exp3: false,
  exp4: false,
  exp5: false,
})
const section4Toggle = reactive({
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
const section2 = ref()
const section2_items = ref()
const section2_items_imgs = ref([])
const section4_items = ref()
const section4_hero = ref()

onMounted(()=>{
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
    //滾動到最頂部時
    if(window.scrollY>50){
      scrollDownToggle.small= true
    }else{
      scrollDownToggle.small= false
    }
    //section0
    //控制對話泡泡的出現否
    chatboxWrap.value.offsetTop>100 ? chatboxToggle.item0=true : chatboxToggle.item0=false
    chatboxWrap.value.offsetTop>200 ? chatboxToggle.item1=true : chatboxToggle.item1=false
    chatboxWrap.value.offsetTop>300 ? chatboxToggle.item2=true : chatboxToggle.item2=false
    chatboxWrap.value.offsetTop>400 ? chatboxToggle.item3=true : chatboxToggle.item3=false
    chatboxWrap.value.offsetTop>500 ? chatboxToggle.item4=true : chatboxToggle.item4=false
    chatboxWrap.value.offsetTop>550 ? chatboxToggle.item5=true : chatboxToggle.item5=false

    //****section1
    section1_hero.value.style.opacity = section1_items.value.offsetTop/500  //得到0-1
    section1_hero.value.style.width= section1_items.value.offsetTop/500 *(100-10)+ 10 +'vmax' //得到10-100
    section1_hero.value.style.height= section1_items.value.offsetTop/500 *(100-10)+ 10 +'vmax'
    if (section1_items.value.getBoundingClientRect().top == 0){
    }
    
    section1_items.value.offsetTop <= 451 ? section1Toggle.hero=true : section1Toggle.hero=false
    
    //****myExp
    if(exp0.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp0= true
      changeText('您好，我是祺翔，對於前端網頁設計開發有高度興趣，具一年以上前端網頁自學經驗，讓我養成獨立解決問題的能力；結合攝影及多媒體影像處理專長，目前已從無到有獨立完成數個RWD Website/APP（敬請參考下方作品集與本網站），在前一份工作中也有維護管理網站經驗，並具備後端PHP與資料庫基礎知識，個性圓融合群，有自信能在團隊中能快速進入狀況並達成交付任務。', 100, 30, 120)
    }
    if(exp1.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp1= true
    }
    if(exp2.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp2= true
    }
    if(exp3.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp3= true
    }
    if(exp4.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp4= true
    }
    if(exp5.value.getBoundingClientRect().top < window.innerHeight*2/3){
      myExp.exp5= true
    }
    //****section2
    section2.value.style.height = (section2_items.value.scrollWidth)+'px' //讓section2的高度自動等於可以完整展示items的寬度
    if(section2.value.getBoundingClientRect().top < 0){
      section2_items.value.style.transform= `translateX(${section2.value.getBoundingClientRect().top}px)` //控制section2_items的translateX偏移=section2脫離可視範圍的距離
    }
    //讓圖片在畫面左右兩側時rotate-20~20
    const innerWidthCenter = window.innerWidth/2
    section2_items_imgs.value.forEach(el => {
      let rotate =  Math.round(el.getBoundingClientRect().left / (window.innerWidth-el.getBoundingClientRect().width) *(20+20)-20 ) *-1
      rotate = rotate >= 20 ? 20 : rotate
      rotate = rotate <= -20 ? -20 : rotate
      el.style.transform = `rotateY(${rotate}deg)`
    });
    //****section4
    section4_hero.value.style.width= Math.abs(section4_items.value.offsetTop*0.1-100)+0.5+'vmax' //0 =>100
    section4_hero.value.style.height= Math.abs(section4_items.value.offsetTop*0.1-100)+0.5+'vmax' //1000 => 0
    section4_items.value.offsetTop>=100 ? section4Toggle.hero=true : section4Toggle.hero=false
    //滾動到最底部時
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-5){
      scrollDownToggle.hide = true
    }else{
      scrollDownToggle.hide = false
    }
  }
  window.addEventListener('scroll',scrollHandler)
  window.addEventListener('resize',scrollHandler)
})
</script>

<template>
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
            <div class="txt">Hello!👋</div>    
        </div>
        <div class="user local" :class="{active:chatboxToggle.item2}">
            <div class="txt">Hi!</div>    
        </div>
        <div class="user remote" :class="{active:chatboxToggle.item3}">
            <div class="txt">聽說你們在徵前端工程師?</div>    
        </div>
        <div class="user local" :class="{active:chatboxToggle.item4}">
            <div class="txt">對，沒錯!</div>    
        </div>
        <div class="user remote" :class="{active:chatboxToggle.item5}">
            <div class="txt">請給我幾分鐘的時間介紹自己✌</div>    
        </div>
      </div>
    </div>
  </div>
  <div class="scroll_down" :class="{hide:scrollDownToggle.hide,small:scrollDownToggle.small}" @click="section2Toggle.item2=!section2Toggle.item2">SCROLL DOWN</div>
  <!-- <div class="heroText">{{ text }}</div> -->
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
                <li class="indent">{{ text }}</li><br>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp1" ref="exp1" :class="{active:myExp.exp1}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-regular fa-folder-open"></i></div>
            <div class="top_right"><h3>經歷及技能</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_left"></div>
            <div class="bottom_right">
              <ul>
                <span>經歷</span>
                <li>● 中華民國藥師公會全聯會/資訊專員/11年
                  <p>主要工作內容：</p>
                  <p>官方網站維護管理</p>
                  <p>資訊機房管理</p>
                  <p>辦公室電腦軟硬體維護管理</p>
                  <p>資訊軟硬體評估、規劃、採購</p>
                </li>
                <span>技能</span>
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
        <div class="exp2" ref="exp2" :class="{active:myExp.exp2}">
          <div class="exp_top">
            <div class="top_left"><i class="fa-brands fa-vuejs"></i></div>
            <div class="top_right"><h3>使用工具及經驗</h3></div>
          </div>
          <div class="exp_bottom">
            <div class="bottom_content">
              <ul>
                <li>● HTML / SCSS</li>
                <li>● JavaScript ES6+</li>
                <li>● jQuery</li>
                <li>● Vue3</li>
                <li>● PHP</li>
              </ul>
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
                  <div class="title">CODE <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/dessert-shop">
                  <div class="title">DEMO <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
              </div>
              <div class="image">
                <img target=_blank src="./assets/dessert-shop.jpg" alt="甜點店">
              </div>
              <p>資料驅動畫面的SPA應用，以及UX、RWD響應式設計及切版練習，</p>
              <p>搭配hashchange事件做簡單的頁面路由，實現每項商品具有獨立網址的效果。</p>
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
                  <div class="title">CODE <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/calender-project">
                  <div class="title">DEMO <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
              </div>
              <div class="image">
                <img target=_blank src="./assets/calender-project.jpg" alt="萬年曆">
              </div>
              <p>簡易版本的google日曆，並結合天氣預報，</p>
              <p>RWD響應式設計，支援觸控手勢操作(滑動切換行事曆年、月份)。</p>
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
                  <div class="title">CODE <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <a href="https://shiang0504.github.io/image-studio-website">
                  <div class="title">DEMO <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
              </div>
              <div class="image">
                <img target=_blank src="./assets/image-studio-website.jpg" alt="工作室網站">
              </div>
              <p>展示作品及提供資訊的靜態網站，</p>
              <p>RWD響應式設計，動畫使用jQuery完成。</p>
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
  <div class="section4">
    <div class="section4_items" ref="section4_items">
      <div class="bg" :class="{cancel:section4Toggle.hero}"></div>
      
      <div class="text">
        <p :class="{show:scrollDownToggle.hide}"><i class="fa-regular fa-envelope"></i>聯絡信箱</p>
        <p :class="{show:scrollDownToggle.hide}"><span>shiang0504@gmail.com</span></p>
      </div>
      <div class="hero" ref="section4_hero" :class="{active:section4Toggle.hero}"></div>
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
  z-index: 999;
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
// .heroText{
//   position: fixed;
//   width: 100%;
//   top: 30px;
//   left: 30px;
//   color: rgb(255, 255, 255);
//   -webkit-text-stroke: #000000 .5px;
//   font-size: 50px;
//   z-index: 99;
//   &::after{
//     content: '';
//     width: 4px;
//     height: 100%;
//     background-color: rgb(121, 121, 121);
//     position: absolute;
//     animation: cursor infinite 1.2s;
//     @keyframes cursor {
//       0%,50%{opacity: 1;}
//       51%,100%{opacity: 0;}
//     }
//   }
//   @include tablet-768{
//     font-size: 40px;
//   }
// }
.section0{
  height: calc(100vh + 500px);
  display: flex;
  justify-content: center;
  .chatboxWrap{
    position: sticky;
    top: 100px;
    width: 70%;
    height: 80vh;
    background-color: rgb(255, 255, 255);
    margin-bottom: 20px;
    border: 0.1px solid rgb(225, 225, 225);
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgb(235, 235, 235);
    opacity: 0;
    transition: 1s;
    @include tablet-768{
      width: 90%;
    }
    &.active{
      opacity: 1;
    }
    .tool{
      border-bottom: 0.1px solid rgb(192, 192, 192);
      padding: 6px;
      ul{
        display: flex;
        li{
          width: 10px;
          height: 10px;
          margin-right: 4px;
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
      height: 100%;
      padding: 50px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      transition: .5s;
      @include tablet-768{
        padding: 20px 20px 20px 20px;
      }
      .user{
        display: flex;
        align-items: flex-start;
        margin-bottom: 50px;
        opacity: 0;
        &.active{
          opacity: 1;
        }
        .txt{
          background-color: rgb(159, 133, 160);
          padding: 10px 20px;
          border-radius: 20px;
          flex-grow: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
          @include tablet-768{
            font-size: 20px;
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
            top: 10px;
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
          top: 10px;
          left: -16px;
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
                object-fit: cover;
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
                &.indent{
                  text-indent: 2em;
                }
                p{
                  margin-top: 5px;
                  font-size: 18px;
                  color: gray;
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
          align-items: center;
          .img{
            width: 20vmin;
            height: 30vmin;
            border-radius: 50%;
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
                justify-content: end;
                align-items: center;
                border-radius: 0 20px 20px 0;
                &:nth-child(1){
                  width: 0%;
                  transition: width 3s 3s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #59c09a;
                }
                &:nth-child(2){
                  width: 0%;
                  transition: width 3s 3.1s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #51af8c;
                }
                &:nth-child(3){
                  width: 0%;
                  transition: width 3s 3.2s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #459678;
                }
                &:nth-child(4){
                  width: 0%;
                  transition: width 3s 3.3s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #3c8268;
                }
                &:nth-child(5){
                  width: 0%;
                  transition: width 3s 3.4s cubic-bezier(0.070, 0.975, 0.075, 0.845);
                  background-color: #37765f;
                  margin-bottom: 40px;
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
                    width: 80%;
                  }
                  &:nth-child(3){
                    width: 60%;
                  }
                  &:nth-child(4){
                    width: 50%;
                  }
                  &:nth-child(5){
                    width: 30%;
                  }
                }
              }
            }
          }
        }
      }
      .exp3, .exp4, .exp5{
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
            p{
              text-align: center;
              font-size: 20px;
              margin-top: 5px;
              @include tablet-768{
                text-align: left;
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
              }
              &::after{
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
              @include tablet-768{
                width: 100%;
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
    padding-right: 80vw; 
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
        z-index: 2;
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
.section4{
  height: calc(100vh + 1000px);
  position: relative;
  .section4_items{
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
          span{
            color: white;
            background: black;
          }
          color: gray;
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
</style>