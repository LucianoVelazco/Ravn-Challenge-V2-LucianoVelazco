import React from 'react';
import { useStartWarsAppContext } from '../../context/index'


const PeopleView = () => {
  const { state: { people } } = useStartWarsAppContext()
  return (
    <div>
      {
        people &&
        <>
       <div className='peopleView'>
        <div>
          <div>
            <h5 className='peopleView__info'>General Information</h5>
          </div>
          <div className='peopleView__description'>
            <div className='peopleView__description--specs'>
              <h6 className='peopleView__description--specs--attribute'>Eye Color</h6>
              <p className='peopleView__description--specs--content'> {people.eyeColor.toString()}</p>
            </div>
            <div className='peopleView__description--specs'>
              <h6 className='peopleView__description--specs--attribute'>Hair Color</h6>
              <p className='peopleView__description--specs--content'> {people.hairColor.toString()}</p>
            </div>
            <div className='peopleView__description--specs'>
              <h6  className='peopleView__description--specs--attribute'>Skin Color</h6>
              <p className='peopleView__description--specs--content'> {people.skinColor.toString()}</p>
            </div>
            <div className='peopleView__description--specs' >
              <h6  className='peopleView__description--specs--attribute'>Birth year</h6>
              <p className='peopleView__description--specs--content'> {people.birthYear.toString()}</p>
            </div>
          </div>
        </div>
        <div>
          <h5 className='peopleView__info'>Vehicles</h5>
            {people.vehicleConnection?.vehicles.map((item) => (
              <div className='peopleView__description--specs' key={item.name}>
                <div className='peopleView__description--specs--attribute'>{item.name}</div>
                </div>
              ))
            }
            </div>
        </div>
       </> 
      }
    </div>
  )

}


export default PeopleView;