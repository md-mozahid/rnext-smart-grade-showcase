
import HeadTitle from '../components/HeadTitle'
import Search from '../components/Search'
import Students from '../container/Students'

export default function StudentTable() {
  return (
    <>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <HeadTitle>Students</HeadTitle>
            <Search />
          </div>
          <Students />
        </div>
      </section>
    </>
  )
}
