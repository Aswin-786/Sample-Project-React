import React from 'react'

function Mid() {
  const content = [
    {
      imgae: "https://media.gettyimages.com/id/627190001/photo/portrait-of-female-runner-in-start-block.jpg?s=2048x2048&w=gi&k=20&c=n_IHfU33ad5efEeT8mPRh8EXGu0bsvqy6Nt4X7C8C-U=",
      condition: "SoldOut",
      rating: 5.0,
      review: 40,
      title: "Life lessons with Katie Zaferes",
      cost: 136
    },
    {
      imgae: "https://media.gettyimages.com/id/636887598/photo/athlete-running.jpg?s=612x612&w=0&k=20&c=Jt-HCECWiEKRWebmCZoCs2SIuzOj1ea1o5Kg1wTsPoE=",
      condition: "Online",
      rating: 5,
      review: 30,
      title: "Learn wedding photography",
      cost: 125
    },
    {
      imgae: "https://media.gettyimages.com/id/590303275/photo/rear-view-of-businessman-riding-bicycle-on-bridge-in-city.jpg?s=612x612&w=0&k=20&c=vjwUd-PSX8DDW_VdZtgS3JM8JlzYMnxLleNHYWW3lDQ=",
      condition: "",
      rating: 4.8,
      review: 2,
      title: "Group Mountain Biking",
      cost: 50
    },
    {
      imgae: "https://media.gettyimages.com/id/636887598/photo/athlete-running.jpg?s=612x612&w=0&k=20&c=Jt-HCECWiEKRWebmCZoCs2SIuzOj1ea1o5Kg1wTsPoE=",
      condition: "SoldOut",
      rating: 5.0,
      review: 40,
      title: "Life lessons with Katie Zaferes",
      cost: 136
    },
    {
      imgae: "https://media.gettyimages.com/id/627190001/photo/portrait-of-female-runner-in-start-block.jpg?s=2048x2048&w=gi&k=20&c=n_IHfU33ad5efEeT8mPRh8EXGu0bsvqy6Nt4X7C8C-U=",
      condition: "SoldOut",
      rating: 5.0,
      review: 40,
      title: "Life lessons with Katie Zaferes",
      cost: 136
    },
    {
      imgae: "https://media.gettyimages.com/id/636887598/photo/athlete-running.jpg?s=612x612&w=0&k=20&c=Jt-HCECWiEKRWebmCZoCs2SIuzOj1ea1o5Kg1wTsPoE=",
      condition: "Online",
      rating: 5,
      review: 30,
      title: "Learn wedding photography",
      cost: 125
    },
    {
      imgae: "https://media.gettyimages.com/id/590303275/photo/rear-view-of-businessman-riding-bicycle-on-bridge-in-city.jpg?s=612x612&w=0&k=20&c=vjwUd-PSX8DDW_VdZtgS3JM8JlzYMnxLleNHYWW3lDQ=",
      condition: "",
      rating: 4.8,
      review: 2,
      title: "Group Mountain Biking",
      cost: 50
    },
    {
      imgae: "https://media.gettyimages.com/id/636887598/photo/athlete-running.jpg?s=612x612&w=0&k=20&c=Jt-HCECWiEKRWebmCZoCs2SIuzOj1ea1o5Kg1wTsPoE=",
      condition: "SoldOut",
      rating: 5.0,
      review: 40,
      title: "Life lessons with Katie Zaferes",
      cost: 136
    }
  ]

   let mapping = content.map((obj, index) => {
    return (
      <div className=' flex flex-shrink-0'>
        <div className='m-9 rounded-2xl grid-flow-col w-80 shadow-xl '>
          <img className='rounded-2xl w-80 h-80 object-cover ' alt='' src={`${obj.imgae}`}/>
          <div className='p-6'>
            <p key={index} className='text-slate-800'>⭐{obj.rating}<span className='text-slate-300'>({obj.review}).USA</span></p>
            <p className='py-4'>{obj.title}</p>
            <p><span className='font-bold'>From ${obj.cost}</span> / person</p>
          </div>
        </div>

      </div>

    )
  })

  return (
    <div className='grid  md:grid-cols-4 sm:grid-cols-2  overflow-visible  '>
      {mapping}
    </div>
    
  )
}

export default Mid