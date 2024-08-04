'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <CountUp 
    end={amount} 
    duration={2}
    decimals={2}
    decimal='.'
    separator=','
    prefix='$'
    />
  )
}

export default AnimatedCounter