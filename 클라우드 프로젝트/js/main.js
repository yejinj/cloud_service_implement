function event0() {
    var a = document.getElementById("sign_in_form");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event1() {
    var a = document.getElementById("log_in_form");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event2() {
    var a = document.getElementById("upload_music");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event3() {
    var a = document.getElementById("upload_photo");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event4() {
    var a = document.getElementById("upload_document");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event5() {
    var a = document.getElementById("upload_all");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event6() {
    var a = document.getElementById("download_music");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event7() {
    var a = document.getElementById("download_photo");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event8() {
    var a = document.getElementById("download_document");
    a.style.display = "";
    a.style.zIndex = 9999;
}

function event9() {
    var a = document.getElementById("download_all");
    a.style.display = "";
    a.style.zIndex = 9999;
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
    document.querySelector("div#cloud_photo_container_1").appendChild(img); };
    reader.readAsDataURL(event.target.files[0]);
}