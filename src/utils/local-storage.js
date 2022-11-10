export const initializeLS = (location) => {
  // Calling the schedule array from the local storage
  const listFromLS = JSON.parse(localStorage.getItem(location));

  // If the array is undefined, we create an empty array and push it to the local storage
  if (!listFromLS) {
    localStorage.setItem(location, JSON.stringify([]));
  }
};

// This pushes a value to a array (location) in the LS
export const saveToLS = (location, object) => {
  // Calls the local storage object.
  let arrayFromLS = JSON.parse(localStorage.getItem(location));

  const existingInArray = arrayFromLS.find(
    (moviesInList) => moviesInList.id === object.id
  );

  if (!existingInArray) {
    arrayFromLS.push(object);
  }

  // Adds a new value to the array .
  // Saves the new object to the local storage
  localStorage.setItem(location, JSON.stringify(arrayFromLS));
};

export const deleteFromLS = (location, object) => {
  // Calls the local storage object.
  let arrayFromLS = JSON.parse(localStorage.getItem(location));

  // Adds a new value to the array .
  let newArray = arrayFromLS.filter(
    (moviesInList) => moviesInList.id !== object.id
  );
  console.log(newArray);
  // Saves the new object to the local storage
  localStorage.setItem(location, JSON.stringify(newArray));
};

// This loads the array from the local storage for wish list
export const loadFromLS = (location) => {
  // Getting the object from local storage.
  return JSON.parse(localStorage.getItem(location));
};
