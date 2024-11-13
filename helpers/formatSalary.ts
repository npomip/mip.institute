const formatSalary = salary => {
  return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default formatSalary
