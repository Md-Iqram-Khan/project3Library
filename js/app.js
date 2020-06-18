//contructor for Book
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display(){

}

//Add method to display prototype
Display.prototype.add = function(book){
    console.log('adding to ui');
    tablebody = document.getElementById('tableBody')
    let uiString = `
           <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
           </tr> `
           tablebody.innerHTML += uiString   
}

//Implement the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}

//Implement the validate function
Display.prototype.validate = function(book){
  if(book.name.length < 2 || book.author.length < 2){
      return false;
  }else{
      return true;
  }
}

//Implement the show function
Display.prototype.show = function(type,message){
    let msg = document.getElementById('msg')
    let boldTxt = ""
    if(type==='success'){
        boldTxt = 'Success : '
    }else{
        boldTxt = 'Error : '
    }
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

  setTimeout(()=>{

    msg.innerHTML = ''

  },2000)
}


//Add submit eventListener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;

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


