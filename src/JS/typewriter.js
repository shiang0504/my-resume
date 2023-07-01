import { ref } from 'vue'

export const typewriterDOM1 = ref(null)
export const typewriterDOM2 = ref(null)
export const typewriterDOM3 = ref(null)
let time = 0
const typewriter=()=>{
    let available = true //私有變數，每個都觸發一次
    return (text, DOM, pushIntervalMin=30, pushIntervalMax=120)=>{
        if(available) {
            for (let i=0; i<text.length; i++) { //產生N個(字串長度決定)的setTimeout計時器
                const random = Math.round(Math.random()*(pushIntervalMax-pushIntervalMin)+pushIntervalMin) //隨機取得最慢~最快的間隔時間
                time += random
                setTimeout(()=>{
                    DOM.value.textContent += text[i]
                }, time)
            }
            available = false
        }
    }
}
export const typewriterText1 = typewriter()
export const typewriterText2 = typewriter()
export const typewriterText3 = typewriter()