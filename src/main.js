import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Marijn van Geest",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Continuous Integration/Development", "Seeing what you did immediately after committing a change", "somewhat real-time update of your changes", "tests to immediately check if you broke something"],
    // Which CI/CD tools do you use in your project?
    tools: "No tools :(",
    // What do you want to learn in this workshop?
    expectations: ["How to manage a CI/CD pipeline", "Decide which approach suits a certain type of project", "How to implement it on your own"],
  },
});
