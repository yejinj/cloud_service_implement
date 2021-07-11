function hidden_function(a){
	var b = document.getElementById(a);
	if(b.style.display=="block"){ b.style.display = "none"; }
	 else{ b.style.display = "block"; }
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