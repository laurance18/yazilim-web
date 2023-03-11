import React from 'react';

const Event = ({ title, image, miniDesc, url, style}) => {
  return (
    <div className={`${style} bg-yellow-500 max-h-96 h-96 rounded-md p-2`}>
      {title}
    </div>
  )
}

const Events = () => {
  return (
    <div className='bg-white py-4'>
      <div className='container max-w-4xl mx-auto flex justify-center flex-col'>
        <h1 className='text-center text-4xl font-semibold my-12'>Etkinlikler</h1>
        <div className='grid grid-cols-3 gap-4'>
          <Event title={"Python Eğitimi"} />
          <Event title={"GitHub Eğitimi"} />
          <Event title={"Docker Eğitimi"} />
          <Event title={"Code Night"} style={"col-span-2"} />
          <Event title={"Oyun Geliştirme Eğitimi"} />
          <Event title={"Oyun Geliştirme Eğitimi"} />
          <Event title={"Genç İzmir Dijital Akademi"} style={"col-span-2"} />
        </div>
      </div>
    </div>
  )
}

export default Events