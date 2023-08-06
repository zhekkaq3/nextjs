'use client'

export default function ErrorWrapper({ error }: {error: Error}){
  return <h1>Ooop`s {error.message}</h1>
}