## Swtich Theme

- React + Vite 建立
- styled-components

---

本次練習是運用 useState 的概念將整個網頁有亮暗主題

## 說明

`#設定state
const [mode, setMode] = useState("light"); //初始值為light主題
function handleClick(event) {
    event.preventDefault();
    setMode((preState) => { //preState is currentValue
      if (preState == "light") {
        return "dark";
      } else {
        return "light";
      }
    });
    document.querySelector(".switch").classList.toggle("change"); 
    //switch button
}`
