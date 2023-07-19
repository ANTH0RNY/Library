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
        functionalDOM()
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
            <button class="read ${value.read? 'read': 'unread'}">${value.read? 'Unread': 'I have read'}</button>
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
            console.log(e.target.parentElement.dataset.id === '0' ? 1 : e.target.parentElement.dataset.id);
            // updateDOM()
            document.querySelector(`[data-id="${e.target.parentElement.dataset.id}"]`).style.display="none"

        })
    })

}

function click(id){
    console.log(id);
}