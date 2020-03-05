function validate(){
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  if(title === "" || body === "" ){
    return false;
  }
}