import React from 'react'
import { Button } from "@/components/ui/Button"
import { DownloadIcon } from '@radix-ui/react-icons'



const Sub = () => {
  return (
    <div className='flex justify-center my-24 gap-9'>
    <Button variant={'destructive'}>&#x25CF; Record</Button>
    <Button><DownloadIcon/>{" "}Download</Button>
    </div>
  )
}

export default Sub