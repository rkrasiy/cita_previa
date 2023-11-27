import Footer from "./components/footer"
import Header from "./components/header"

const Section = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='h-screen bg-slate-300 flex items-center justify-center'>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-grow mt-12'>
        {
          ["1", "2", "3", "4"].map(item => (
            <Section key={item}><h1>{item}</h1></Section>
          ))
        }
      </main>
      <Footer />
    </>
  )
}