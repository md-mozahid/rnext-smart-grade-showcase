const ClassStudent = ({ student }) => {
  const { id, name, score, percentage, thumbnail } = student
  return (
    <>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{id}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src={thumbnail}
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{score}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
      </tr>
    </>
  )
}

export default ClassStudent
