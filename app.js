// lorem text
const text = [
  `“Every child is an artist; the problem is staying an artist when you grow up” <br>–--------------  <h4>Pablo Picasso</h4>`,
  `“Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.” <br>–-------------- <h4> Andy Warhol</h4>`,
  `“Art is a collaboration between God and the artist, and the less the artist does the better.” <br>–--------------  <h4>Andre Gide</h4>`,
  `“Every artist was first an amateur.”<br> –--------------  <h4>Ralph Waldo Emerson</h4>`,
  `“I found I could say things with color and shapes that I couldn’t say any other way things I had no words for.” <br>–--------------  <h4>Georgia O’Keeffe</h4>`,
  `“Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.” <br>–-------------- <h4> Ray Bradbury</h4>`,
  `“Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.”<br> –--------------  <h4>Scott Adams</h4>`,
  `“The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So, write and draw and build and play and dance and live only as you can.” <br>–--------------  <h4>Neil Gaiman</h4>`,
  `“To create one’s own world takes courage.” <br>–--------------  <h4>Georgia O’Keeffe</h4>`,
  `“Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.” <br>–-------------- <h4>Georgia O’Keeffe</h4>`,
  `“If everything was perfect you would never learn and you would never grow.” <br>–--------------  <h4>Beyonce</h4>`,
  `“Do what you can, with what you have, where you are.”<br>–-------------- <h4>Theodore Roosevelt</h4>`,
  `“Action may not always bring happiness; but there is no happiness without action.”<br>–-------------- <h4>Benjamin Disrael</h4>`,
  `“You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action.”<br>–-------------- <h4>Tony Robbins</h4>`,
  `“Be happy with what you have. Be excited about what you want.”<br>–-------------- <h4>Alan Cohen</h4>`,
  `“Life is like riding a bicycle. To keep your balance, you must keep moving.”<br>–-------------- <h4>Albert Einstein</h4>`,
  `“Try not to become a person of success, but rather try to become a person of value”<br>–-------------- <h4>Albert Einstein</h4>`,

];
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const form=$('.lorem-form')
const content=$('.lorem-text')
const amount=$('#amount')
const btn=$('.btn')
const shuffle=(array)=>{
  let currentIndex=array.length , randomIndex
  while (currentIndex !==0) {
    randomIndex=Math.floor(Math.random()*currentIndex)
    currentIndex--
    [array[randomIndex],array[currentIndex]]=[array[currentIndex],array[randomIndex]]
  }
  return array
}
const Array=[a,b]=[3,4]
console.log(Array.length)
form.addEventListener('submit',function(e) {
  e.preventDefault()
  let value=Number(amount.value)
 
  if (value==0||value>10||value<0) {
     content.innerHTML=`<p class="result">${text[randomNumber()]}</p>`
  }else{
    
    const selectors=text.slice(0,value)
    const randomize=shuffle(selectors)
    console.log(randomize)
    const looping=selectors.map(function(selector) {
    return `<p class="result">${selector}</p>`
    }).join('')
    content.innerHTML=looping
  }
  
})
const randomNumber=()=>{
   return Math.floor(Math.random()*text.length)
}
