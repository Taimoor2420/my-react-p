import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
      <div className="card-body">
        <h1 className={`${props.color}`}>{props.icon}</h1>
        <h2 className="card-title">{props.title}</h2>
        <p className={`card-text text-${props.red}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum distinctio quam ut inventore laudantium rem ab corrupti odio dignissimos consequuntur asperiores non, reiciendis qui nemo obcaecati nihil temporibus deserunt. Aliquid nostrum debitis eum ipsam delectus quidem, laudantium pariatur omnis error in qui at voluptatibus officiis fugiat. Animi, non ipsam.</p>
      </div>
    </div>
  )
}

export default Card
