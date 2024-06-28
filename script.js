document.querySelectorAll('.food').forEach(food => {
    food.addEventListener('dragstart', dragStart);
  });
  
  document.querySelectorAll('.dropzone').forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
  });
  
  document.getElementById('reset-button').addEventListener('click', resetPlates);
  
  function dragStart(event) {
    const imgSrc = event.target.src;
    event.dataTransfer.setData('text/uri-list', imgSrc); // Define o URI da imagem
    event.dataTransfer.setData('text/plain', event.target.dataset.calories); // Define as calorias
    event.dataTransfer.setData('text/html', event.target.outerHTML); // Define o HTML completo (opcional)
  }
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const calories = event.dataTransfer.getData('text/plain');
    const imgSrc = event.dataTransfer.getData('text/uri-list');
    const dropzone = event.target;
  
    // Create a new image element
    let newFoodElement = new Image();
    newFoodElement.src = imgSrc;
  

    newFoodElement.style.width = '70px'; 
    newFoodElement.style.height = 'auto'; 
  
    // Append the image element to the dropzone
    dropzone.appendChild(newFoodElement);
  
    // Update the calories display for the respective plate
    const plateId = dropzone.parentNode.parentNode.id;
    const caloriesSpan = document.querySelector(`#${plateId} .calories span`);
    let currentCalories = parseInt(caloriesSpan.textContent);
    currentCalories += parseInt(calories);
    caloriesSpan.textContent = currentCalories;
  }
  
  
  
  
  function resetPlates() {
    document.querySelectorAll('.dropzone').forEach(zone => {
      zone.innerHTML = '';
    });
    document.getElementById('calories1').textContent = '0';
    document.getElementById('calories2').textContent = '0';
  }
  
  
  
  
  
  