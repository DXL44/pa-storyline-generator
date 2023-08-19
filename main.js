const { request } = require('undici');

async function getCoolName(letter1,letter2) {
    const randomAdjective = await request(`https://random-word-form.repl.co/random/adejctive`);
    const randomNoun = await request(`https://random-word-form.repl.co/random/noun`);
    console.log(randomAdjective, randomNoun)
}