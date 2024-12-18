function corrigerQuiz() {
    const reponsesCorrectes = {
      q1: "console.log",
      q2: "let",
      q3: "push()",
      q4: "Number()",
      q5: "function myFunction()",
      q6: "const",
      q7: "typeof variable !== 'undefined'"
    };
  
    let score = 0; 
  
    for (let question in reponsesCorrectes) {
      // Sélectionner l'élément HTML correspondant à la réponse sélectionnée
      const reponseUtilisateur = document.querySelector(`input[name="${question}"]:checked`);
      const correctionDiv = document.getElementById(`correction-${question}`);
  
      if (reponseUtilisateur) { 
        // Vérifier si la réponse sélectionnée est correcte
        if (reponseUtilisateur.value === reponsesCorrectes[question]) {
          correctionDiv.innerHTML = "<span style='color:green;'>Vrai</span>";
          score++;
        } else {
          correctionDiv.innerHTML = "<span style='color:red;'>Faux</span> - La bonne réponse est : " + reponsesCorrectes[question];
        }
      } else {
        correctionDiv.innerHTML = "<span style='color:red;'>Pas de réponse sélectionnée.</span>";
      }
    }
  
    // Afficher le score final
    document.getElementById("score").innerHTML = `<h3>Votre score est : ${score} / ${Object.keys(reponsesCorrectes).length}</h3>`;
  }
  