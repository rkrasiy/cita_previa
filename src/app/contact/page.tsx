import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact',
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
        <div>
          <label htmlFor='email'>Correo electrónico</label>
          <input id="email" type="email" name='email'/>
        </div>
        
        <div>
          <label htmlFor='message'>Mensaje</label>
          <textarea id="message"  name='message'/>
        </div>
        
        <button>Confirm</button>
      </form>
    </>
  )
}