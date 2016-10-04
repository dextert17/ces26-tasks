$(document).ready(function(){
	// Explorando um pouco a árvore DOM e o efeito Show e o tooltip com fade de 250
  $(".form_input").on('keyup', function(){
  	var $this = $(this);
   	$this.nextAll(':input').first().show();
  });
  $("#last_personal").change(function(){
  	var $this = $(this);
   	$this.css("color", "black");
   	$this.nextAll('p').first().show();
   	$this.nextAll(':input').first().show();
  });
  $("#professional_exp").on('mouseover', function(){
  	var $this = $(this);
  	$this.find('span').tooltip({fade: 250});
  });

  // Tratando o Submit, transformando-o em um JSON
	$.fn.serializeObject = function() {
  	var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
     	if (o[this.name] !== undefined) {
      	if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
    	  o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
   	return o;
	};

	// Usando o JSON pra promover alterações na página
	$(function() {
		$("#curriculum_form").submit(function(e) {
   		e.preventDefault();
 		});
   	$('#uploadButton').click(function() {
   		var jsonText = JSON.stringify($("#curriculum_form").serializeObject());
   		var obj = $.parseJSON(jsonText);
   		var r = confirm(
   			"▬▬▬▬▬▬▬▬▬Dados Pessoais▬▬▬▬▬▬▬▬▬\n"
   			+ "Nome: " + obj.nome
    		+ "\nIdade: " + obj.idade + " anos"
    		+ "\nCargo Pretendido: " + obj.cargo_pretendido
    		+ "\n\n▬▬▬▬▬▬▬▬Experiência Profissional▬▬▬▬▬▬▬"
    		+ "\nEmpresa: " + obj.empresa
    		+ "\nCargo: " + obj.cargo
   			+ "\nTempo na Empresa: " + obj.tempo
    		+ "\n\n\nConfirme para enviar"
    	);
    	// Aproveitando pra treinar um pouco mais de árvore DOM e explorar o efeito hide
    	if (r == true) {
   			var $this = ($("#after_curriculum"));
       	$this.siblings('div').hide();
       	$this.show();
       	var str = "<p><b>Nome: </b></p>" + obj.nome
       			+ "<p><b>Idade: </b></p>" + obj.idade + " anos</p>"
       			+ "<p><b>Cargo Pretendido: </b></p>" + obj.cargo_pretendido + "</p>"
       			+ "<h4>Experiência Profissional</h4>"
       			+ "<p><b>Empresa: </b></p>" + obj.empresa
       			+ "<p><b>Cargo: </b></p>" + obj.cargo
       			+ "<p><b>Tempo na Empresa: </b></p>" + obj.tempo + "<br/>";
       	var html = $.parseHTML(str);
       	$this.find('button').before(html);
   		}
   });
	});

	// Permitir o preenchimento de mais de um currículo e percorrendo mais a árvore
	$(function() {	
		$('#new_form').click(function() {
   		var $this = ($("#new_form"));
   		$this.parent('div').hide();
   		$this.parent('div').siblings('div').show();
   		$this.parent('div').siblings('div').find("#last_personal").css("color", "#999");
   		document.getElementById("curriculum_form").reset();
  	});
  });
});
