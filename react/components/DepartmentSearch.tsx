import React, { useState } from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import { SearchBar } from "vtex.store-components"
import DepartmentGroup from './DepartmentGroup'
import { useCssHandles } from 'vtex.css-handles'
// import styles from './styles.css'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState("")

  const CSS_HANDLES = [
    "departmentSearch__categories"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return loading
    ?
    <div className={handles["departmentSearch__categories"]}>Loading ...</div>
    :
    <div className="flex">
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placehoder="¿Qué estás buscando hoy?"
        displayMode="search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch;