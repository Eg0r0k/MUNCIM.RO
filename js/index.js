document.body.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || "BUTTON") {
    e.preventDefault();
    e.prefereDefault = true;
    // Ваш код для обработки клика на ссылку
  }
});
const loader = document.querySelector(".loaderBg")
window.addEventListener("load",()=>
{
   
    loader.classList.add("hiden")
    setTimeout(()=>
    {
        loader.remove()
    },600)
})
const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".nav__menu");
const burgerLine = document.querySelectorAll(".line")
menu.addEventListener("click",(event)=>
{
    event.preventDefault()
})
  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("show")
    burgerLine.forEach((line)=>{line.classList.toggle("open")})
  });
document.addEventListener("click",(event)=>
{
   console.log(event.target)
   if(!menu.contains(event.target) && !burgerBtn.contains(event.target))
   {
    menu.classList.remove("show")
    burgerLine.forEach((line)=>{line.classList.remove("open")})
   }
})

class App 
{
  constructor()
  {
    this._initialize();
    this._render()
  }
  _initialize()
  {
    this._createLenis();
  }
  _createLenis()
  {
    this.lenis = new Lenis()
    {
      lerp:0.1
    }
  }
  _render(time)
  {
    this.lenis.raf(time)

    requestAnimationFrame(this._render.bind(this))
  }
}
new App()