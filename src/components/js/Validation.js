export function Validation(vatNr, email) {
   const regexVatNr = /^SE[0-9]{10}$/;
   const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

   if (!regexVatNr.test(vatNr)) {
      alert(
         "Wrong format! You need to write SExxxxxxxxxx."
      )
      return false;
   } else
   
   if (!regexEmail.test(email)) {
      alert(
         "You have entered an invalid email address!"
      )
      return false;
   }
}