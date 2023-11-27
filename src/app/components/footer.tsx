export default function Footer() {
  return(
    <footer className="bg-slate-800 p-4">
      <div className="w-full max-w-screen-xl xl:mx-auto">
        <div className="flex flex-row text-slate-200 justify-between">
          <div>
            <p>Contact</p>
            <ul>
              {
                ["Email", "Phone", "Facebook", "Instagramm"].map( (item:string) => (
                  <p className="text-sm" key={item}>{item}</p>
                ))
              }
            </ul>
          </div>
          <div>
            <p>Contact</p>
            <ul>
              {
                ["Email", "Phone", "Facebook", "Instagramm"].map( (item:string) => (
                  <p className="text-sm" key={item}>{item}</p>
                ))
              }
            </ul>
          </div>
          <div>
            <p>Contact</p>
            <ul>
              {
                ["Email", "Phone", "Facebook", "Instagramm"].map( (item:string) => (
                  <p className="text-sm" key={item}>{item}</p>
                ))
              }
            </ul>
          </div>
          <div>
            <p>Contact</p>
            <ul>
              {
                ["Email", "Phone", "Facebook", "Instagramm"].map( (item:string) => (
                  <p className="text-sm" key={item}>{item}</p>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center text-xs text-slate-300 mt-4">Designed by Ruslan Krasiy</p>
        </div>
      </div>
    </footer>
  )
}