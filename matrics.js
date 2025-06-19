
document.addEventListener("DOMContentLoaded", function() {
const Search = document.getElementById("search");
const statsContainer = document.getElementById("input_container");
const easyProgressCircle =document.querySelector(".easy-progress");
const mediumProgressCircle = document.querySelector(".medium-progress");
const hardProgressCircle = document.querySelector(".hard-progress");
const easyLevel = document.getElementById("easy-level");
const mediumLevel = document.getElementById("medium-level");
const hardLevel = document.getElementById("hard-level");
const cardStatsContainer = document.querySelector(".stats-cards");
function validateusername(username) {}

if(username.trim() === "") {
    alert("Please enter a username");
    return false;
}
const regex =/^[a-zA-Z0-9_]{1,15}$/;
const isMatching = regex.test(username);
if(!isMatching) {
    alert("invalid username, please enter a valid username");
    return false;
}
async function fetchUserDetails(username) {
    const url = `https://leetcode.com/${username}/`;
    try{
        Search.textContent = "Searching...";
        Search.disabled = true;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("User not found");
        }
        const data = await response.json();
        console.log("logging data:", data);
    }
    catch (error) {


Search.addEventListener("click", function() {
    const username =usernameInput.value;
    console.log(" loggin Username:", username);
    if (validateusername(username)) {
        fetchUserDetails(username);
    }

})
}}

})