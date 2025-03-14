// The Word Translator
// Usage: Use simple conditional statements
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
// If the user enters anything but those four language codes, the application should default to English. The result should be (for example):
// Hello World translated in French is: Bonjour le monde

let languageCode = prompt("Enter language code (\"es\", \"de\",\"en\",\"fr\"): ")
let result = "Hello World translated in "

if (languageCode === "es") {
    console.log(result + "Spanish is: Hola Mundo")
} else if (languageCode === "de") {
    console.log(result + "German is: Hallo Welt")
} else if (languageCode === "fr") {
    console.log(result + "French is: Bonjour le monde")
}  else {
    console.log(result + "English is: Hello World")
}
