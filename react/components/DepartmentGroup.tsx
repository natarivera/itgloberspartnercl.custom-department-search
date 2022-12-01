import React from "react"
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("mi grupo:", departments);

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  };

  const CSS_HANDLES = [
    "department_group--container",
    "department_group--element",
    "department_group--option"
  ]

  const handles = useCssHandles(CSS_HANDLES)

  const departmentOptions: any = departments.map((department: Category) => {

    return (
      <option
        value={department.slug}
        key={department.id}
      >
        {department.name}
      </option>
    )
  })
  return (
    <div className={handles["department__group--container"]}>
      <select className={handles["department_group--element"]}
        onChange={onHandleSetSlug}
        defaultValue="value0"
      >
        <option className={handles["department_group--option"]} disabled value="value0">Ver categorías</option>
        {departmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup;