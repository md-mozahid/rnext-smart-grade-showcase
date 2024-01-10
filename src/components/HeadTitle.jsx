export default function HeadTitle({ children }) {
  return (
    <>
      <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
        <span className="text-[#00CC8C]">{children}</span> of the Year
      </h2>
    </>
  )
}
