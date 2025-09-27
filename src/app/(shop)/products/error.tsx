"use client"
import React from 'react'

export default function error({ error} : {error : Error}) {
  return (
    <div className='text-red-500 flex flex-col items-center justify-center'>
        <h1 >Somthing went wrong</h1>
        <p>{error.message}</p>
    </div>
  )
}
