$(function() {
  $(".ar").on("click", function(){

    var val = $(".info").val();
    var num = $(".number").val();
    var fe = $(".fecha").val();

    if((val !== '') && (num !== '') && (fe !== '')) {
     var elem = $("<li></li>").text(val);
     var elem0 = $("<ul></ul>").text(num);
     var elem1 = $("<ul></ul>").text(fe);

     
     //quitar el elemento <li> correspondiente de la lista.
     $(elem).append("<button class='rem'>X</button>");
     $(elem0).append("<button class='rem'>X</button>");
     $(elem1).append("<button class='rem'>X</button>");

     $(".my").append(elem);
     $(".my").append(elem0);
     $(".my").append(elem1);

     $(".info").val("");
     $(".number").val("");
     $(".fecha").val("");

     $(".rem").on("click", function() {
      $(this).parent().remove();
     });
    }
  });
});


$(function() {
  $(".ad").on("click", function(){

    var vali = $(".infor").val();
    var numb = $(".inst").val();
    var fec = $(".año").val();

if((vali !== '') && (numb !== '') && (fec !== '')) {

     var elemen = $("<li></li>").text(vali);
     var elemen0 = $("<ul></ul>").text(numb);
     var elemen1 = $("<ul></ul>").text(fec);

     $(elemen).append("<button class='rem'>X</button>");
     $(elemen0).append("<button class='rem'>X</button>");
     $(elemen1).append("<button class='rem'>X</button>");


     $(".myli").append(elemen);
     $(".myli").append(elemen0);
     $(".myli").append(elemen1);

     $(".infor").val("");
     $(".inst").val("");
     $(".año").val("");

 $(".rem").on("click", function() {
 $(this).parent().remove();
     });
    }
  });
});


$(function() {
  $(".add").on("click", function(){

    var valiu = $(".curso").val();
    var numbe = $(".inst2").val();
    var fech = $(".dura").val();

if((valiu !== '') && (numbe !== '') && (fech !== '')) {

     var element = $("<li></li>").text(valiu);
     var element0 = $("<ul></ul>").text(numbe);
     var element1 = $("<ul></ul>").text(fech);

     $(element).append("<button class='rem'>X</button>");
     $(element0).append("<button class='rem'>X</button>");
     $(element1).append("<button class='rem'>X</button>");


     $(".mylis").append(element);
     $(".mylis").append(element0);
     $(".mylis").append(element1);

     $(".curso").val("");
     $(".inst2").val("");
     $(".dura").val("");


 $(".rem").on("click", function() {
 $(this).parent().remove();
     });
    }
  });
});


$(function() {
  $(".addd").on("click", function(){

    var valiun = $(".c4").val();
    var number = $(".c5").val();
    var fecha = $(".c6").val();

if((valiun !== '') && (number !== '') && (fecha !== '')) {

     var elemento = $("<li></li>").text(valiun);
     var elemento0 = $("<ul></ul>").text(number);
     var elemento1 = $("<ul></ul>").text(fecha);

     $(elemento).append("<button class='rem'>X</button>");
     $(elemento0).append("<button class='rem'>X</button>");
     $(elemento1).append("<button class='rem'>X</button>");


     $(".mylist").append(elemento);
     $(".mylist").append(elemento0);
     $(".mylist").append(elemento1);

     $(".c4").val("");
     $(".c5").val("");
     $(".c6").val("");

 $(".rem").on("click", function() {
 $(this).parent().remove();
     });
    }
  });
});
