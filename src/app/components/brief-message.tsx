import { FC, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { BsSignStop } from "react-icons/bs";

interface BriefMessageProps {
  type: 'success' | 'error' | 'warning';
  text: string
}

const BriefMessage:FC<BriefMessageProps> = ({ type, text }) => {
  const [ show, setShow ] = useState<boolean>(true);

  const removeHandler = () => setShow(false)
  
  if(!show)
    return <></>

  const colors  = ({
    success: 'bg-green-100 text-green-600',
    error: 'bg-red-100 text-red-600',
    warning: 'bg-yellow-100 text-yellow-600'
  })[type]

  const Icon = ({
    success: BsCheckLg,
    error: BsSignStop,
    warning: BsExclamationCircle
  })[type]

  

  return(
    <div className={`${colors} animate-brief-message text-center py-2 px-4 mb-2 fixed rounded-md flex flex-row items-center gap-4 -bottom-24 transition-transform`}>
      <Icon />
      { text }
    <button 
      className="p-2 text-xs"
      onClick={removeHandler}>
        <BsXLg />
      </button>
  </div>
  )
}

export default BriefMessage;