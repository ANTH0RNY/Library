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

const form=`<div class="right">
                <form class="form" id="form">
                <div class="title">
                <label for="title">Title</label>
                <input type="text" id="title" placeholder="Title" required autofocus>
                </div>
                <div class="author">
                <label for="author">Author</label>
                <input type="text" id="author" placeholder="author" required>
                </div>
                <div class="pages">
                <label for="Pages">Pages</label>
                <input type="number" id="pages" placeholder="Pages of the book" required>
                </div>
                <div class="read">
                <label for="read">Read</label>
                <select id="read">
                    <option value="true">Read</option>
                    <option value="false">Not Read</option>
                </select>
                </div>
                <div class="form-btn">
                <button type="submit" id="submit" class="button">
                    ADD NEW BOOK
                </button>
                </div>
                </form>
            </div>
            <div class="right" id="right"></div>
            `


const title=document.getElementById('title')
const author=document.getElementById('author')
const pages=document.getElementById('pages')
const read=document.getElementById('read')
const submit=document.getElementById('submit')
const formApp=document.getElementById('form')
const right=document.getElementById('right')
const btn=document.getElementById("btn")
const app=document.getElementById('app')
const main=document.getElementById('main')
const left=document.querySelector(".left")
const heading=document.querySelector(".heading")

btn.addEventListener('click',()=>{
    btn.remove()
    main.classList.toggle('not-visible')
    left.classList.toggle('not-visible')
    app.classList.remove('ref')
    heading.classList.remove('ref')
    right.classList.add('add-bg')

    title.focus()

})


    submit.addEventListener('click', (e)=>{
        if (formApp.checkValidity()){
            e.preventDefault()
            addBookLibrary(title.value, author.value,pages.value, toBoolean(read.value))
            formApp.reset()
            functionalDOM()
            // updateDOM()
            title.focus()
        }
    })


function updateDOM(){
    let cards=''
    myLibrary.forEach((value, index)=>{
        const item=`
        <div class="card" id="card" data-id="${index}">
            <h3>
                ${value.title}
            </h3>
            <quote>
                ${value.author}
            </quote>
            <p>
                ${value.pages}
            </p>
            <p>
                ${value.read?"the book has been read": "Not yet read"}
            </p>
            <button class="remove">Remove</button>
            <button class="read-btn ${value.read? '': 'unread'}">${value.read? 'Unread?': 'I have read'}</button>
        </div>
        `
        cards+=item        
    })
    right.innerHTML=cards
}


function functionalDOM(){
    updateDOM()
    const button=document.querySelectorAll(".remove")
    button.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            console.log(e.target.parentElement.dataset.id);
            myLibrary.splice(e.target.parentElement.dataset.id, e.target.parentElement.dataset.id === '0' ? 1 : e.target.parentElement.dataset.id)
            // console.log(e.target.parentElement.dataset.id === '0' ? 1 : e.target.parentElement.dataset.id);
            // updateDOM()
            // document.querySelector(`[data-id="${e.target.parentElement.dataset.id}"]`).style.display="none"
            document.querySelector(`[data-id="${e.target.parentElement.dataset.id}"]`).remove()
        })
    })

    
    const readBtn=document.querySelectorAll(".read-btn")
    readBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            const id=parseInt(e.target.parentElement.dataset.id)
            myLibrary[id].read=!myLibrary[id].read
            
            btn.classList.toggle('unread')
            btn.innerHTML=`${myLibrary[id].read? 'Unread?': 'I have read'}`
            // console.log(myLibrary[id].read);
        })
    })
}


function toggleRead() {
    
}