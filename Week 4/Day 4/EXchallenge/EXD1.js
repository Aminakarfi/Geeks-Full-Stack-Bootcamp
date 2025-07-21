    document.getElementById("jsonForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value;
      const lastname = document.getElementById("lastname").value;

      const data = {
        name: name,
        lastname: lastname
      };

      
      document.getElementById("result").textContent = JSON.stringify(data);
    });
