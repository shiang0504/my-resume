let time = 2000 // 公有 第二個以後呼叫的會從第一個呼叫的總延遲時間繼續累計
const typewriter=()=>{
    let available = true //私有變數，每個觸發一次
    return (DOM, text, pushIntervalMin=0, pushIntervalMax=100)=>{
        if(available) {
            for (let i=0; i<text.length; i++) { //產生N個(字串長度決定)的setTimeout計時器
                const random = Math.round(Math.random()*(pushIntervalMax-pushIntervalMin)+pushIntervalMin) //隨機取得最慢~最快的間隔時間
                time += random
                setTimeout(()=>{
                    DOM.textContent += text[i]
                }, time)
            }
            available = false
        }
    }
}
const typewriterOrder1 = typewriter()
const typewriterOrder2 = typewriter()
const typewriterOrder3 = typewriter()

export { typewriterOrder1, typewriterOrder2, typewriterOrder3 }

// import { typewriterOrder1, typewriterOrder2, typewriterOrder3} from './JS/typewriter.js'
// typewriterOrder1(DOM, 'text') //對哪個元素插入什麼文字，typewriterOrder2會在typewriterOrder1完成後才動作