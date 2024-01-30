function load(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function (){
    if (this.status == 200) {
      document.getElementById('p1').innerHTML = this.responseText
    }
  }
  request.open('GET',"./index.txt")
  request.send()
}