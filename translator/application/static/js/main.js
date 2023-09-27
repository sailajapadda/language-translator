import {language} from "./language.js";

const textfrom=document.querySelector(".fromtext")
const totext=document.querySelector(".totext")
const change=document.querySelector("#change")
const selector=document.querySelectorAll("select")
const volfrom=document.querySelector("#vol1")
const volto=document.querySelector("#vol2")
const copy1=document.querySelector("#copy1")
const copy2=document.querySelector("#copy2")
const voice=document.querySelector("#voice")



selector.forEach((get,con) =>{
    for(let code in language){
        let selected;
        if(con== 0 && code=="en-GB"){
            selected="selected"
        }
        else if(con==1 && code=="bn-IN") {
            selected="selected"
        }
        let Option='<option value='+`${code}`+'>'+`${language[code]}`+'</option>'
        get.insertAdjacentHTML('beforeend',Option)
       
    }
})
if(textfrom){
    textfrom.addEventListener('input',function(){
        let content=textfrom.value
        var fromcontent=selector[0].value
        var transcontent=selector[1].value

        let tranLink='https://api.mymemory.translated.net/get?q='+`${content}`+'&langpair='+`${fromcontent}`+'|'+`${transcontent}`+''
        fetch(tranLink).then(translate => translate.json()).then(data =>{
            totext.value=data.responseData.translatedText;
        })
    })

}
if(volfrom){
    volfrom.addEventListener('click',function(){
        let fromtalk;
        fromtalk=new SpeechSynthesisUtterance(textfrom.value)
        fromtalk.lang=selector[0].value
        speechSynthesis.speak(fromtalk)
    })
}
if(volto){
    volto.addEventListener('click',function(){
        let fromtalk;
        fromtalk=new SpeechSynthesisUtterance(totext.value)
        fromtalk.lang=selector[0].value
        speechSynthesis.speak(fromtalk)
    })
}
copy1.addEventListener('click',function(){
    navigator.clipboard.writeText(textfrom.value)
})
copy2.addEventListener('click',function(){
    navigator.clipboard.writeText(totext.value)
})
change.addEventListener('click',function(){
    let temptext=textfrom.value
    textfrom.value=totext.value
    totext.value=temptext
    let templang=selector[0].value
    selector[0].value=selector[1].value
    selector[1].value=templang
    
})




      

 



 





