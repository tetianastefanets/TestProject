function matchpass() {
    var test = document.registrationForm.name.value;

    var test2 = document.registrationForm.password.value;

var splitString = test2.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();

    alert(reverseArray);
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("")


if(test===joinArray){
    //if (test===test2){
   alert("True" );}
   else{
    alert("False");
   }

}





