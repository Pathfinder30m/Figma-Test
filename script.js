const selectedList = document.getElementById('chkbx');

function showChecked(){
  selectedList.innerHTML = document.querySelectorAll('input[name=ckb]:checked').length;
}

document.querySelectorAll("input[name=ckb]").forEach(i=>{
 i.onclick = () => showChecked()
});