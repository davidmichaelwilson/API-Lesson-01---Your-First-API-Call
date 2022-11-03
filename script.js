async function consoleCall() {
    // Delete this comment and write your code here
  const catFact = await fetch("https://catfact.ninja/fact")
  const jSON = await catFact.json()
  
  console.log(jSON)
  
}


function paragraphCall() {
    // Delete this comment and write your code here
  fetch("https://catfact.ninja/fact")
    .then( (catFact) => catFact.json() )
    .then( (jSON) => document.getElementById("target").innerHTML = jSON.fact)

}

