class Quote {
    constructor(author, quote) {
        this._author = author;
        this._quote = quote;
    }
    get author() {
        return this._author;
    }
    get quote() {
        return this._quote;
    }
}
// Quotes
const mandela = new Quote('Nelson Mandela', "The greatest glory in living lies not in never falling, but in rising every time we fall.");
const disney = new Quote('Walt Disney', "The way to get started is to quit talking and begin doing.");
const jobs = new Quote('Steve Jobs', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.");
const roosevelt = new Quote('Eleanor Roosevelt', "If life were predictable it would cease to be life, and be without flavor.");
const winfrey = new Quote('Oprah Winfrey', "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.");
const cameron = new Quote('James Cameron', "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.");
const lennon = new Quote('John Lennon', "Life is what happens when you're busy making other plans.");
const teresa = new Quote('Mother Teresa', "Spread love everywhere you go. Let no one ever come to you without leaving happier.");
const mead = new Quote('Margaret Mead', "Always remember that you are absolutely unique. Just like everyone else.");
const franklin = new Quote('Benjamin Franklin', "Tell me and I forget. Teach me and I remember. Involve me and I learn.");

let arr = [mandela, disney, jobs, roosevelt, winfrey, cameron, lennon, teresa, mead, franklin];

const randNum = () => {
    return Math.floor(Math.random() * arr.length);
}

let buttonx = document.querySelector('button');
let quotex = document.querySelector('.quote');
let authorx = document.querySelector('.author');

let getQuote = () => {
    let x = randNum();
    quotex.innerHTML = '"' + arr[x].quote + '"';
    authorx.innerHTML = arr[x].author;
    
}

buttonx.addEventListener('click', getQuote);

