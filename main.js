document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box');
  const listContainer = document.getElementById('list-container');
  const addButton = document.getElementById('add-btn');

  function addTask() {
    if (inputBox.value === "") {
      alert("Input box is empty");
    } else {
      let li = document.createElement('li');
      li.textContent = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    }
    inputBox.value = ""; 
    saveDataToLocalStorage();
  }

  addButton.addEventListener('click', addTask);

  listContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
      e.target.classList.toggle('checked');
      saveDataToLocalStorage();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveDataToLocalStorage();
    }
  }, false)

  function saveDataToLocalStorage(){
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showDataFromLocalStorage(){
    listContainer.innerHTML = localStorage.getItem("data");
  }

  showDataFromLocalStorage();
});

