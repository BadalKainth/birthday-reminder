export function getAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  // 2 - 6 = -4
  // 6 - 6 = 0
  const month = today.getMonth() - birthDate.getMonth();

  // 2023 - 2000 = 23
  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
