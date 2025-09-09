'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Home = () => {
  const navigate=useRouter()
  useEffect(()=>{
      navigate.push('/dashboard')
  },[])
 
}

export default Home