function adicionarItem() {
    produto_digitado = document.getElementById('nome_do_produto').value
    preco_digitado = document.getElementById('preco_do_produto').value
    data_produto = document.getElementById('data')
    hora_produto = document.getElementById('hora')
    if (produto_digitado.length > 0 && preco_digitado.length > 0){
        
    var tabela = document.getElementById('estoque')
    var nova_linha = tabela.insertRow(0)
    var nova_celula_prod = nova_linha.insertCell(0)
    var nova_celula_preco = nova_linha.insertCell(1)
    var nova_celula_data = nova_linha.insertCell(2)
    var nova_celula_hora = nova_linha.insertCell(3)
    let data = new Date()
    let data_produto = (adicionarZero(data.getDate())) + "/" + (adicionarZero(data.getMonth() + 1)) + "/" + (adicionarZero(data.getFullYear())); 
    let hora = new Date()
    let hora_produto = (adicionarZero(hora.getHours())) + ":" + (adicionarZero(hora.getMinutes())) + ":" + (adicionarZero(hora.getSeconds()));
    nova_celula_prod.innerHTML = produto_digitado
    nova_celula_preco.innerHTML = preco_digitado
    nova_celula_data.innerHTML = data_produto
    nova_celula_hora.innerHTML = hora_produto
    document.getElementById('nome_do_produto').value = ''
    document.getElementById('preco_do_produto').value = ''
    }
    // função para adicionar o zero na data e hora
    function adicionarZero(numero){
      if(numero <= 9)
         return "0" + numero;
      else
         return numero;   
    }
    
 
}

function removerItem() {
    var tabela = document.getElementById('estoque').deleteRow(0)
}


$(function() {
  $(".exportToExcel").click(function(e){
    var table = $(this).prev('.table2excel');
    if(table && table.length){
      var preserveColors = (table.hasClass('table2excel_with_colors') ? true : false);
      $(table).table2excel({
        exclude: ".noExl",
        name: "Excel Document Name",
        filename: "estoque" + "_" + new Date().toISOString() + ".xls",
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true,
        preserveColors: preserveColors
      });
    }
  });
  
});

// ICONES
feather.replace()