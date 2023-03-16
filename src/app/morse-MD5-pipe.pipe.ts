import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from 'ts-md5';

@Pipe({
  name: 'morseMD5Pipe'
})
export class MorsePipePipe implements PipeTransform {
    

    morseAlphabet: Record<string, string> = {
    'A': '.-', 
    'B': '-...', 
    'C': '-.-.', 
    'D': '-..', 
    'E': '.', 
    'F': '..-.', 
    'G': '--.', 
    'H': '....', 
    'I': '..', 
    'J': '.---', 
    'K': '-.-', 
    'L': '.-..', 
    'M': '--', 
    'N': '-.', 
    'O': '---', 
    'P': '.--.', 
    'Q': '--.-', 
    'R': '.-.', 
    'S': '...', 
    'T': '-', 
    'U': '..-', 
    'V': '...-', 
    'W': '.--', 
    'X': '-..-', 
    'Y': '-.--', 
    'Z': '--..',
    'Æ': '.-.-',
    'Ø': '---.',
    'Å': '.--.-',
    '0': '-----', 
    '1': '.----', 
    '2': '..---', 
    '3': '...--', 
    '4': '....-', 
    '5': '.....', 
    '6': '-....', 
    '7': '--...', 
    '8': '---..', 
    '9': '----.', 
    '.': '.-.-.-', 
    ',': '--..--', 
    '?': '..--..', 
    '!': '-.-.--', 
    '/': '-..-.', 
    '-': '-....-', 
    '(': '-.--.', 
    ')': '-.--.-'
  };
  transform(value: string, args: string = ""): string {
    var inputAsMorsecode = '';
    var inputAsMD5Hash = '';
    const inputAsUppercase = value.toUpperCase();
    const MD5Converter = new Md5();
    
    if(!value){
      return '';
    }

    if(args == 'Morsecode'){
      for(var i = 0; i < inputAsUppercase.length; i++){
      
        const charFromInput = inputAsUppercase[i];
        const charAsMorse = this.morseAlphabet[charFromInput];
  
        if(charAsMorse) {
          inputAsMorsecode += charAsMorse + ' ';
        }
      }
      return inputAsMorsecode;
    }

    else if( args == 'MD5'){
      inputAsMD5Hash = MD5Converter.appendStr(value).end()?.toString()!;
      return inputAsMD5Hash;
    }
    return 'Please type either \'Morsecode\' or \'MD5\''
    
  }
}
