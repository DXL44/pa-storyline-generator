function getWord(wordType)
{
    axios.get(`https://random-word-form.repl.co/random/${wordType}`)
    .then(response =>
        {
            console.log(response.data);
            document.getElementById(`${wordType}Word`).innerHTML = response.data;
        })
        .catch(error =>console.error(error))
}

function getCoolName()
{ // this wasnt working because i was misspelling adjective.......
    getWord("adjective") 
    getWord("noun")
}
/*async function getCoolName()
{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json()
    return data;
}*/


/* function getCoolName()
{
let request = new XMLHttpRequest();
request.open("GET", "https://random-word-form.repl.co/random/adejctive")
request.send();
request.onload = () =>{
    console.log(request);
    console.log(request.response);
    if (request.status == 200) {
        console.log(JSON.parse(request.response))
    }  else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}
}  */ 

/*
async function getCoolName(letter1,letter2) {
    const randomAdjective = await Request(`https://random-word-form.repl.co/random/adejctive`);
    const randomNoun = await Request(`https://random-word-form.repl.co/random/noun`);
    console.log(randomAdjective, randomNoun)
}*/
// CURRENT: https://builtin.com/software-engineering-perspectives/javascript-api-call


// https://stackoverflow.com/questions/54445033/how-to-use-node-modules-on-a-traditional-website
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
// https://random-word-form.repl.co/