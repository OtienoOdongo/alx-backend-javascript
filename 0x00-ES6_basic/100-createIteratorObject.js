export default function combineEmployeeLists(report) {
  let combinedEmployees = [];

  for (const departmentEmployees of Object.values(report.allEmployees)) {
    combinedEmployees = [
      ...combinedEmployees,
      ...departmentEmployees,
    ];
  }

  return combinedEmployees;
}
