// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.first_name + " " + res.last_name;
              message += " lives in ";
              message += res.address + " ";
              message += res.postal_code + ".";

              console.log(res);

              var message1 = 
                res.sections[1].name + ", type " + res.sections[1].type;  

              document.querySelector("#content")
                .innerHTML =  "<h2>" + message + "</h2>" +
                              "<h3>" + message1 + "</h3>";    

            });
      });
  }
);