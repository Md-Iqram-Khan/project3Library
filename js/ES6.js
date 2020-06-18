class Book{

   constructor  (name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book){
        console.log('adding to ui');
        let tablebody = document.getElementById('tableBody')
        let uiString = `
               <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
               </tr> `
               tablebody.innerHTML += uiString   
    }
    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset()
    }
    validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }else{
            return true;
        }
    }
    show(type,message){
        let msg = document.getElementById('msg')
        let boldTxt = ""
        if(type==='success'){
            boldTxt = 'Success : '
        }else{
            boldTxt = 'Error : '
        }
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldTxt}</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    
      setTimeout(()=>{
        msg.innerHTML = ''
      },4000)
    }
}

//Add submit eventListener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type = '';

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    
    let display = new Display()

    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('success','Your Book hass been successfullay added')
    }else{
        display.show('danger',"Sorry You cann't add this book")
        
    }
    e.preventDefault()   
}

