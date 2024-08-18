interface Category {
  title: string
  tags: string[]
}
function Category(props: Category) {
  return (
    <div className="mb-2">
      <div className="font-bold text-1xl md:text-3xl ">{props.title}</div>
      <div className="flex flex-wrap text-gray-500 align-middle mt-4">
        {props.tags.map((tag, index) => {
          return (
            <div key={index}>
              <a className="">{tag}</a>
              {index < props.tags.length - 1 && (
                <a className="h-5 w-1 border-r-gray-500 border-r-[1px] mx-1"></a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
