function function_1(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function function_2(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function function_3() {
    var a = document.getElementById("upload_photo");
    a.style.display = "none"
}

function function_4() {
    var a = document.getElementById("download_photo");
    a.style.display = "none"
}

// 파일 미리보기
// input 태그에서 onchange 속성에 실행될 메소드를 정해줍니다.
// 메소드 내에서 FileReader 객체를 생성하고 onload 됐을 시 발생할 이벤트를 작성해줍니다.
// FileReader 가 로드 됐을 때 img 엘리먼트를 생성하고 src 속성을 설정해줍니다.
// 그리고 이미지가 들어갈 div에 넣어줍니다.
// 리더에서 input 태그에서 선택한 파일을 읽어오도록 설정
function upload_photo(event){
    var reader = new FileReader();
    reader.onload = function(event){
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#container").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}

function upload_photo_2(event){
    var reader = new FileReader();
    reader.onload = function(event){
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#container_2").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}

function upload_photo_3(event){
    var reader = new FileReader();
    reader.onload = function(event){
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#container_3").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}

function upload_photo_4(event){
    var reader = new FileReader();
    reader.onload = function(event){
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#container_4").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}

function change(photo){
    var a = document.getElementById("container");
	a.style.position= "absolute"
    a.style.transform = "scale(0.5)"
	a.style.marginTop = "0px"
	a.style.float = "left"

	var b = document.getElementById("container_2");
	b.style.position= "absolute"
    b.style.transform = "scale(0.5)"
	b.style.marginTop = "50px"
	b.style.float = "left"

	var c = document.getElementById("container_3");
	c.style.position= "absolute"
    c.style.transform = "scale(0.5)"
	c.style.marginTop = "100px"
	c.style.float = "left"

	var d = document.getElementById("container_4");
	d.style.position= "absolute"
    d.style.transform = "scale(0.5)"
	d.style.marginTop = "150px"
	d.style.float = "left"
}

function remove_unfold(){
	var a = document.getElementById("remove_unfold");
	a.style.display	= ""
}

function remove_1(){
	var el = document.getElementById('container');
	el.remove();
}

function remove_2(){
	var el = document.getElementById('container_2');
	el.remove();
}

function remove_3(){
	var el = document.getElementById('container_3');
	el.remove();
}

function remove_4(){
	var el = document.getElementById('container_4');
	el.remove();
}
