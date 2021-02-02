const quotes=[
    {
        id:1,
        quote:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",        
        author:"-Buddha"
    },
    {
        id:2,
        quote:"It is better to travel well than to arrive.",
        author:"-Buddha"
    },
    {
        id:3,
        quote:"Just as a snake sheds its skin, we must shed our past over and over again.",
        author:"-Buddha"
    },
    {
        id:4,
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"-Nelson Mandela"
    },
    {
        id:5,
        quote:"The way to get started is to quit talking and begin doing.",
        author:"-Walt Disney"
    },
    {
        id:6,
        quote:"If life were predictable it would cease to be life, and be without flavor",
        author:"-Eleanor Roosevelt"
    },
    {
        id:7,
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author:"-Steve Jobs"
    },
    {
        id:8,
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author:"-Oprah Winfrey"
    },
    {
        id:9,
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author:"-Mother Teresa"
    },
    {
        id:10,
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"-Franklin D. Roosevelt"
    },
    {
        id:11,
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        author:"-Margaret Mead"
    },
    {
        id:12,
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author:"-Robert Louis Stevenson"
    },
    // {
    //     id:13,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:14,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },
    // {
    //     id:2,
    //     quote:"It is better to travel well than to arrive.",
    //     author:"-Buddha"
    // },

]

// var img = document.getElementById('my-image');
// var canvas = document.createElement('canvas');
// canvas.width = img.width;
// canvas.height = img.height;
// console.log(canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height));
const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const tweet=document.querySelector(".twitter-share-button");
const copyBtn=document.querySelector('quote-btn');
function randomizer(elem){
    let random = Math.floor(Math.random()*elem.length);
    return random;
}

quoteBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let random = randomizer(quotes);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
});

window.addEventListener('load',(e)=>{
    let random = randomizer(quotes);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})


copyBtn.onclick = () => {

    copyText.select();    // Selects the text inside the input
    document.execCommand('copy');    // Simply copies the selected text to clipboard 
}



tweet.addEventListener('click',(e,quote,author)=>{
    e.preventDefault();
    const quoteElement=document.querySelector(".quote");
    const authorElement=document.querySelector(".author");
    quote=quoteElement.textContent;
    author=authorElement.textContent;
    window.location.href="https://twitter.com/intent/tweet?text="+quote.replace(/\t/g, '')+"\n"+author;
});