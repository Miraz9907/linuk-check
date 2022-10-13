/**
 * 
 * INITIAL SETUP
 1. visit -> console,firebase.google.com
 2. create a new firebase projects
 3. visit doc (go to docs): -> Build -> Authentication -> Web -> get started
 4. Register web app > firebase project home > click Web > gave name and register
 5. install firebase (npm install firebase)
 6. DANGEROUS: get firebase config and put it in firebase.init.js
 7. export app from firebase.init.js 
 -----------------------
        SETUP THE PROVIDER
 ------------------------
 8. create auth using getAuth from firebase by using app from firebase.init.js
 9. create a google auth provider
 10. go to firebase > build > Authentication > get started > sign in method
 11. Enable google sign in method 
 12. Create a button for google sign in method with a click handler
 13. inside the event handler, call singInwithpopup with auth , provider
 14. after signInwithpopo .then result, error
 -------------------------------
    DISPLAY DATA
    ---------------------------
    dynamically data show in ui..similarlly simple react


    -------------------------------
    ADD A NEW SIGN IN METHOD
 15. enable the new sign in method
 16. Create method(github, twitter, fb) etc. app create
 17. get clientId and secret
 */