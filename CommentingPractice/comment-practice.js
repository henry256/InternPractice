/**
 * @file Main
 *
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName }  from './services/practice.js';
import * as martin from './services/spaces.js';
import { toPigLatin } from './services/piglatin.js';
import * as luis from './services/backwardsName.js';

import * as ramitha from './services/lowercase.js';
import * as sum from './services/sumOfNumber.js';
import * as sanjana from './services/product.js';
import * as Arithmetic from './services/arithmetic.js';
import * as mitchell from './services/caesarCipher.js';
import * as adil from './services/splitor.js';

( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));

     myName();

     var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));

     let luisMyName = "Luis Moran"
     console.log(luis.backwardsName(luisMyName));

     let greeting = "hello";
     console.log(martin.addSpace(greeting));


     let secretMessage = "Slack Practice";
     console.log(henry.encode(secretMessage));
    
    var word = "WORD";
    console.log(ramitha.lowercase(word));

	  let num = 5;
	  console.log(sum.sumOfNumber(num));


	var num1 = 8;
	var num2 = 9;
    console.log(sanjana.product(num1,num2));
    

    /** Sum function from sum.js imported as adrianna. */
    console.log(adrianna.sum(num1, num2));


    var num1 = 10, num2 = 2;
    console.log(Arithmetic.Add(num1, num2) + " :: " +
                Arithmetic.Subtract(num1, num2) + " :: " +
                Arithmetic.Multiply(num1, num2) + " :: " +
                Arithmetic.Divide(num1, num2));



     let message = "Mitchell";
     console.log(mitchell.caesarCipher(message));


     var MyString = "My name is Adil Merribi";
     console.log(adil.myChars(MyString));


 })();



