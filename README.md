## Swtich Theme

- React + Vite 建立
- styled-components

本次練習是運用 useState 的概念將整個網頁具有可切換的亮暗主題

作品連結[https://xinyu714.github.io/react-vite-switch_theme/]

## 說明/核心
把主題想像成是一個有 'light' 和 'dark'的開關
切換主題的方式有很多，本專案是以 :root 以及 <html> 標籤中 `data-theme` 其值改變作為切換的方式


### 主要程式碼
```
#設定state
const [mode, setMode] = useState("light"); //初始值為light主題
function handleClick(event) {
    event.preventDefault();
    setMode((preState) => {  //preState is currentValue
      if (preState == "light") {
        return "dark";
      } else {
        return "light";
      }
    });
    document.querySelector(".switch").classList.toggle("change");  //switch button
}
```
## 心得
想多來練習一下 state 順便來試試看 Vite, 建立專案的速度還真的滿快的！
也學到 Vite 的部署跟 CRA 稍微不同，以下說明一種方法，其他可至 官網[https://cn.vitejs.dev/] 查看

1. `npm install gh-pages --save-dev` //跟CRA一樣
2. 在 `package.json` 檔案中 scripts 加入 
   ``` "predeploy": "npm run build",
    "deploy": "gh-pages -d dist", ```
    
3. 輸入 `npm run deploy`
