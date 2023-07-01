import { ref } from 'vue'

export const text =ref('') //主要功能就是改變text中的文字
let pushIDs = []
let available = true
let currentText = ''

const deleteText =(deleteInterval)=>{ //每0.1秒刪除text中最後一個文字，直到字串長度至0為止
    return new Promise((resolve, reject)=>{
        const deleteID = setInterval(()=>{
            if(!text.value.length){ //在字串已經為0的時候停止計時器和返回resolve()
                clearInterval(deleteID)
                resolve()
            }
            text.value= Array.from(text.value) //轉陣列
            text.value.splice(-1,1) //刪最後一個
            text.value = text.value.join('') //轉回字串
        }, deleteInterval)
    })
}
const pushText=(data, pushIntervalMin, pushIntervalMax)=>{ //每0.3秒加入data中的一個文字，直到字串長度被for跑完
    return new Promise((resolve, reject)=>{
        let total = 0
        for (let i=0; i<data.length; i++) { //產生N個(字串長度決定)的setTimeout計時器
            const random = Math.round(Math.random()*(pushIntervalMax-pushIntervalMin)+pushIntervalMin) //隨機取得最慢~最快的間隔時間
            total += random
            const pushID = setTimeout(()=>{
                // text.value= Array.from(text.value) //轉陣列
                // text.value.push(data[i]) //把data依序推入字串
                // text.value = text.value.join('') //轉回字串
                text.value += data[i]
            }, total)
        pushIDs.push(pushID) //把每個setTimeout計時都記錄起來，方便刪除
        }
        resolve()
    })
}
// changeText(文字內容,刪除每個字時的間隔毫秒,新增每個字時的最快間隔毫秒,新增每個字時的最慢間隔毫秒)
export const changeText =async(text, deleteInterval=100, pushIntervalMin=100, pushIntervalMax=300)=>{
    if(!available || currentText===text)return
    available = false
    currentText = text
    if(pushIDs.length){ //如果有setTimeout就先清掉
        pushIDs.forEach(i=>clearTimeout(i)) //強制停止setTimeout計時    
        pushIDs= []
    }
    await deleteText(deleteInterval) //把字串清空
    await pushText(text, pushIntervalMin, pushIntervalMax) //把要加入的文字依序推入
    available = true //整套結束才打開以免連續觸發
}