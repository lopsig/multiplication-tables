const createTable = () => {
  const table = document.getElementById("table");
  table.innerHTML = ""
  
  for (let i = 1; i <= 10; i++){
    const file_i = document.createElement("div")
    file_i.className = "fila";
    file_i.style = "--delay:0.10s"
    const spanOperation_i = document.createElement("span")
    spanOperation_i.className = "operacion";
    const spanFactor1_i = document.createElement("span")
    spanFactor1_i.className = "num-azul";
    spanFactor1_i.textContent = 5
    const spanSimbol_i = document.createElement("span")
    spanSimbol_i.textContent = "  X  "
    const spanFactor2_i = document.createElement("span")
    spanFactor2_i.className = "num-plomo";
    spanFactor2_i.textContent = i
    const spanSimbolResult_i = document.createElement("span")
    spanSimbolResult_i.className = "signo";
    spanSimbolResult_i.textContent = "=";
    const spanResult_i = document.createElement("span")
    spanResult_i.className = "resultado";
    spanResult_i.textContent = 5 * i
  
  
    spanOperation_i.appendChild(spanFactor1_i)
    spanOperation_i.appendChild(spanSimbol_i)
    spanOperation_i.appendChild(spanFactor2_i)
  
  
    file_i.appendChild(spanOperation_i)
    file_i.appendChild(spanSimbolResult_i)
    file_i.appendChild(spanResult_i)
    table.appendChild(file_i)

    
  }

  


};
