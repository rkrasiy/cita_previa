'use server'
import { redirect } from 'next/navigation'
import nodemailer from 'nodemailer'

export async function sendEmail(prevState: any, formData: FormData) {
  try{
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEEMAILER_EMAIL,
        pass: process.env.NODEEMAILER_PW
      }
    })
  
    transporter.sendMail({
      from: process.env.NODEEMAILER_EMAIL,
      to: formData.get('to') as string,
      subject: formData.get('subject') as string,
      text: formData.get('text') as string,

    }, function(error, info) {
      console.log(error, info)
      if(error)
        throw new Error()
      
      redirect("/")
    })
    return {type: 'success'}
  }catch(e){
    return {type: 'error'}
  }
}