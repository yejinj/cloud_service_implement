function hidden_function(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_2(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_3(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_4(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_5(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_6(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_7(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_8(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_9(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

function hidden_function_10(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
}

//x 버튼
function hide_function() {
    var a = document.getElementById("sign_in_hidden");
    a.style.display = "none"
}

function hide_function_2() {
    var a = document.getElementById("log_in_hidden");
    a.style.display = "none"
}

function hide_function_3() {
    var a = document.getElementById("music_hidden");
    a.style.display = "none"
}

function hide_function_4() {
    var a = document.getElementById("photo_hidden");
    a.style.display = "none"
}

function hide_function_5() {
    var a = document.getElementById("document_hidden");
    a.style.display = "none"
}

function hide_function_6() {
    var a = document.getElementById("all_hidden");
    a.style.display = "none"
}

function hide_function_7() {
    var a = document.getElementById("download_music");
    a.style.display = "none"
}

function hide_function_8() {
    var a = document.getElementById("download_photo");
    a.style.display = "none"
}

function hide_function_9() {
    var a = document.getElementById("download_document");
    a.style.display = "none"
}

function hide_function_10() {
    var a = document.getElementById("download_all");
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
    document.querySelector("div#cloud_photo_container").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}