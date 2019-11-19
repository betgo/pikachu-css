!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        setInterval( ()=>{
            n+= 1;
            container.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            container.scrollTop =container.scrollHeight;
            if(n>= code.length)
            {
                window.clearInterval(id);
                fn && fn.call();
            }
        },10)
    }
    
    let code = `
    .preview{
        height: 100%;
        border:1px solid green;
        display: flex;
        justify-content: center;
        align-content: center;
        background: #fee433;
    }
    .wrapper{
      height:165px;
      width:100%;
    
      position:relative;
    }
    .nose{
      width:0;
      height:0;
      border: solid ;
      border-radius:11px; 
      border-width: 12px;
      border-color:black transparent transparent transparent;
      position:absolute;
      left:50%;
      top:25px;
      margin-left: -11px;
      
    }
    .eye{
      height:49px;
      width:49px;
      background:#2E2E2E;
      position:absolute;
      border-radius:50%;
      border:2px solid black;
    }
    .eye::before{
      content:'';
      display:block;
      width:24px;
      height:24px;
      background:white;
      border-radius:50%;
      left:6px;
      top:-1px;
      position:absolute;
    }
    .eye.left{
       right:50%;
      margin-right:90px;
       
    }
     .eye.right{
       left:50%;
       margin-left:90px;
       
    }
    .face{
      height:68px;
      width:68px;
      background:red;
      border-radius:50%;
      border:2px  solid black;
      position:absolute;
    }
    .face.left{
      right:50%;
      margin-right:116px;
      top:85px;
    }
    .face.right{
      left:50%;
        margin-left:116px;
        top:85px;
    }
    .upperLip{
      height:22px;
      width:80px;
      border:3px solid black;
      
      position:absolute;
      background:#fee433;
      top:43px;
    }
    .upperLip.left{
      right:50%;
    
      border-bottom-left-radius:40px 20px;
      border-top:none;
      transform:rotate(-15deg);
      border-right:none;
    }
    .upperLip.right{
      left:50%;
       border-bottom-right-radius:40px 20px;
        border-top:none;
      border-left:none;
        transform:rotate(15deg);
      
    }
    .mouth-wrapper{
      bottom:0;
      position:absolute;
      left:50%;
       overflow:hidden;
      margin-left:-150px;
     
    
      height:110px;
      width:300px;
    }
    .mouth{
      height:400px;
      width:160px;
      border: 2px solid black;
      position:absolute;
      border-radius:50% / 100% 100% 0 0;
      transform:rotate(180deg);
      left :50%;
      margin-left: -80px;
      top:-290px;
      background:#990513;
       overflow:hidden;
    }
    .mouth::after{
      content:'';
      position:absolute;
     width:100px;
      height:100px;
      background:#fc4a62;
      left:50%;
      margin-left:-50px;
      border-radius:50px;
     
      top:-4px;
    }`;
    writeCode('',code);
}.call()