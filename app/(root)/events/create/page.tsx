import EventForm from '@/components/shared/EventForm'
import React from 'react'


const CreateEvent = () => {
   
  return (
    <>
    <section className='bg-yellow-100 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <h3 className='wrapper h3-bold text-center text-blue-950 sm:text-left'>Create Event</h3>
    </section>
    <div className="wrapper my-8">
        <EventForm  type="Create" />
      </div>
    </>
  )
}

export default CreateEvent