// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians: string[]): void {
     for(const magician of magicians) {
        console.log(magician);
     }
}
 const magicianNames: string[] =["Penn Jillette", "Criss Angel", "Teller"];
 showMagicians(magicianNames);


 