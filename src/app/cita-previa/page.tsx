
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cita prevía',
}

export default function CitaPrevia(){
  return (
    <>
      <form>
      <div>
          <label htmlFor='name'>Nombre</label>
          <input id="name" type="text" name='name'/>
        </div>
        <div>
          <label htmlFor='surname'>Apellido</label>
          <input id="surname" type="text" name='surname'/>
        </div>
        <div>
          <label htmlFor='phone'>Núm. móvil</label>
          <input id="phone" type="text" name='phone'/>
        </div>
        <button>Confirm</button>
      </form>
    </>
  )
}