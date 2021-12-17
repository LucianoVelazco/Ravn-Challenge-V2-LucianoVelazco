import React from 'react';
import Vector  from '../../assets/icons/Vector.svg'

const PeopleNav = ({ 
  name, 
  homeworld,
  species
  }) => (
      <div className='peopleNav'>
        <div className='peopleNav__character'>
          <h2 className='peopleNav__character--name'>{name}</h2>
          <h2 className='peopleNav__character--spec'>{species?.name} from {homeworld.name}</h2>
        </div>
        <div className='peopleNav__icon'>
          <img  className='peopleNav__icon--vector' src={Vector} alt='vector' />
        </div>
      </div>
    
    );
   

export default PeopleNav;