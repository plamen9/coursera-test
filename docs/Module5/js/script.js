// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    //Datepicker
    $( function() {
          $( "#datepicker" ).datepicker({
              dateFormat: "dd-mm-yy",
              changeYear: true,
              changeMonth: true
            });
        });

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
         // .sendGetRequest("data/name.json", 
         .sendGetRequest("https://apexea.oracle.com/pls/apex/gamma_dev/raspberry/get_measures/" + $("#datepicker").val() , //13-01-2018",
            function (res) {

              console.log(res);

              var_content = "";

              for (var item in res.items) {
                
                var message = "<div class = \"col-sm-4\"><ul class=\"list-group\">";

  /*                res.first_name + " " + res.last_name;
                message += " lives in ";
                message += res.address + " ";
                message += res.postal_code + ".";*/

                message = message + "<li class=\"list-group-item\"><span class=\"badge\">" 
                                  + res.items[item].time + "</span>"  
                                  + "Time"
                                  + "</li>"

                message = message + "<li class=\"list-group-item\"><span class=\"badge\">" 
                                  + res.items[item].temp + "</span>"  
                                  + "Temperature"
                                  + "</li>"

                message = message + "<li class=\"list-group-item\"><span class=\"badge\">" 
                                  + res.items[item].humidity + "</span>"  
                                  + "Humidity"
                                  + "</li>"                  
                  
                /* "<p>Time: " + res.items[item].time + "</p>"; 
                message = message + "<p>Temp: " + res.items[item].temp + "</p>" ;
                message = message + "<p>Humidity: " + res.items[item].humidity + "</p>" ;*/

                message = message + "</ul></div>";
             /*     res.sections[1].name + ", type " + res.sections[1].type; */ 
                var_content = var_content + message;

               } 

              document.querySelector("#content")
                .innerHTML = var_content;    

            });
      });
  }
);