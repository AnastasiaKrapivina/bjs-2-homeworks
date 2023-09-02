const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);

const getUsersNamesInAgeRange = (users, gender) => {
  const selectedUsers = users.filter((user) => user.gender === gender);
  const sumAge = selectedUsers.reduce((sum, item) => sum + item.age, 0);
  
  return selectedUsers.length ? sumAge / selectedUsers.length : 0;
};
