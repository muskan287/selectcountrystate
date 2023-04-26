const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const submitButton = document.getElementById("submit-btn");

// Define the states for each country
const states = {
  USA: ["-- Select a state --", "California", "Texas", "Florida"],
  Canada: ["-- Select a state --", "Ontario", "Quebec", "British Columbia"]
};

// Populate the state dropdown based on the selected country
countryDropdown.addEventListener("change", () => {
  const selectedCountry = countryDropdown.value;
  if (selectedCountry !== "") {
    stateDropdown.disabled = false;
    stateDropdown.innerHTML = "";
    const stateOptions = states[selectedCountry];
    for (let i = 0; i < stateOptions.length; i++) {
      const option = document.createElement("option");
      option.text = stateOptions[i];
      option.value = stateOptions[i];
      stateDropdown.add(option);
    }
  } else {
    stateDropdown.disabled = true;
    stateDropdown.innerHTML = "<option value=''>-- Select a state --</option>";
  }
});

// Handle form submission
submitButton.addEventListener("click", () => {
  const selectedCountry = countryDropdown.value;
  const selectedState = stateDropdown.value;
  if (selectedCountry === "") {
    alert("Please select a country.");
  } else if (selectedState === "" || selectedState === "-- Select a state --") {
    alert("Please select a state.");
  } else {
    const url = `result.html?country=${encodeURIComponent(selectedCountry)}&state=${encodeURIComponent(selectedState)}`;
    window.location.href = url;
  }
});