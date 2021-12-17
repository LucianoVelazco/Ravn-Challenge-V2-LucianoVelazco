import React from 'react';
import Spinner from '../assets/icons/spinner.svg'
import '../styles/common/Loader.scss'

const Loader = () => (
    <div className='loading'>
    <img className='loading__icon'src={Spinner} alt='spinner' />
    <h6 className='loading__word'>Loading</h6>
  </div>
  );
export default Loader;