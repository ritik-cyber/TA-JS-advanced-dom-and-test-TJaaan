let quotes = document.querySelector('quotes')


handleScroll(){
    let li = document.createElement('li')
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.innerText= quotes.quoteText
    let p = document.createElement('p')
}


quotes.addEventListener("scroll", handleScroll)
