const myLibrary=[]

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read || false;

    this.info=function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read?'Book is read':'not read'}`
    }
}



function addBookLibrary(title, author, pages, read){
    const newBook= new Book(title, author, pages, read);
    myLibrary.push(newBook)
}


function toBoolean(string){
    return string === 'true'
}


const title=document.getElementById('title')
const author=document.getElementById('author')
const pages=document.getElementById('pages')
const read=document.getElementById('read')
const submit=document.getElementById('submit')
const formApp=document.getElementById('form')
const right=document.getElementById('right')


submit.addEventListener('click', (e)=>{
    if (formApp.checkValidity()){
        e.preventDefault()
        addBookLibrary(title.value, author.value,pages.value, toBoolean(read.value))
        formApp.reset()
        updateDOM()
    }
})


function updateDOM(){
    let cards=''
    myLibrary.forEach((value, index)=>{
        const item=`
        <div class="card" id="card" data-id="${index}">
            <title>
                ${value.title}
            </title>
            <quote>
                ${value.author}
            </quote>
            <p>
                ${value.pages}
            </p>
            <p>
                ${value.read?"the book has been read": "Not yet read"}
            </p>
        </div>
        `
        cards+=item        
    })
    right.innerHTML=cards
}