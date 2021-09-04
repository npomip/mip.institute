type handleSearch = {
  e: any
  setSearchTerm: any
  programs: any[]
}

const handleSearch = ({ e, setSearchTerm, programs }: handleSearch) => {
  setSearchTerm(programs, e.target.value)
}

export default handleSearch
