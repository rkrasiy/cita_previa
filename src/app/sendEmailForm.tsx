'use client'
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { sendEmail } from "./action"


const initialState: { type: 'success' | 'error' | null } = {
  type: null
}

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      aria-disabled={pending}>
      {pending ? 'pending' : 'Add'}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState)
  console.log(state)
  const { pending } = useFormStatus()
  const message = state?.type ? state.type === 'success' ? 'Has been send successfull' : 'Something went wrong' :  null
  return (
    <form action={formAction}>
      <div>
        <label>
          Subjet
          <input type="text" name='subject' required disabled={pending}/>
        </label>
      </div>
      <div>
        <label>
          Correo electrónico
          <input type="email" name='to' required disabled={pending}/>
        </label>
      </div>

      <div>
        <label>
          Mensaje
          <textarea name='text' required disabled={pending}/>
        </label>
      </div>
      <SubmitButton />
      <p>
        {message}
      </p>
    </form>
  )
}