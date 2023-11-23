function showDetails(model, imageSrc, price, description) {
    document.getElementById('details-model').textContent = model;
    document.getElementById('details-image').src = imageSrc;
    document.getElementById('details-price').textContent = price;
    document.getElementById('details-description').textContent = description;

    
    document.getElementById('details').classList.remove('hidden');
}

function hideDetails() {    
    document.getElementById('details').classList.add('hidden');
}

  var meuTextoElemento = document.getElementById("meuTexto");

  meuTextoElemento.style.fontStyle = "italic";
  meuTextoElemento.style.fontWeight = "bold"; 
