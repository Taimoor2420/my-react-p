import React from 'react'
import Card from '../components/Card'
import { FaLaugh, FaLaughSquint, FaLaughWink } from "react-icons/fa";
const Skills = () => {
  return (
    <div className='container-fluid bg-c'>
      <div className='row py-5'>
        <div className='col-12 text-center'>
          <h1 className='pb- line'>My Skills</h1>
          <h3 className='py-3'>My Skills In Average percentage</h3>
        </div>
      </div>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-4 card1'>
            <Card title="HTML5"  icon={<FaLaugh />} color="sss" red="xs" />
          </div>
          <div className='col-4 card2'>
            <Card title="CSS3" icon={<FaLaughSquint />} color="ssss" />
          </div>
          <div className='col-4 card3'>
            <Card title="Javascript" icon={<FaLaughWink />} color="sss" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
