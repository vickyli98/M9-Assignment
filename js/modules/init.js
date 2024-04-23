async function loadEmployeeData() {
  try {
    const response = await fetch('data/employees.json');
    if (!response.ok) {
      throw new Error ('Failed to load employee data');
    }
    const { employees } = await response.json();
    if (!Array.isArray(employees)) {
      throw new Error ('Invalid employee data format');
    }
    return employees;
  } catch (error) {
    console.error('Error loading employee data', error);
    return [];
  }
}

export { loadEmployeeData };