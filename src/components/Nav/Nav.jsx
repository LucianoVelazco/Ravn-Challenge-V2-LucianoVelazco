/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { useQuery } from '@apollo/client'
import { useStartWarsAppContext } from '../../context/index'
import GET_CHARACTERS from '../../graphQL/Queries'
import PeopleNav from '../PeopleNav/PeopleNav'
import Loader from '../../common/Loader';
import Error from '../../common/Error'

const Nav = () => {
  const { dispatch, state } = useStartWarsAppContext()
  const [canUpdate, setCanUpdate] = useState(true)
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      first: 5,
      after: null
    },
    onCompleted: (dataOnComplete) => {
      handleSetAllPeople([...state.allPeople, ...dataOnComplete.allPeople.people])
    }
  })
  function handleSetAllPeople(allPeople) {
    dispatch({ type: 'SET_CHARACTER_LIST', payload: allPeople})
  }

  const handleFetchMore = () => {
    const { endCursor } = data.allPeople.pageInfo 
    fetchMore({
      variables: {
        first: null,
        after: endCursor
      },
      updateQuery: (prevResult, { fetchMoreResult }) =>{
        if (!fetchMoreResult) return prevResult
        setCanUpdate(false)
        return fetchMoreResult
      }
    })
  }
  
  if(data && canUpdate) {
    handleFetchMore()
  }

  const setPeople = (people) =>{
    dispatch({type: 'SET_CHARACTER', payload: people})
  }

  if(loading) return <Loader/>
  if(error) return <Error/>
  return (
    <div>
      <div>
        {
          state.allPeople.map((people, key) => (
            <div onClick={() => setPeople(people)} key={key}>
              <PeopleNav   {...people}/>
            </div>
          ))
        }
        {
          canUpdate &&
          <Loader/>
        }
      </div>
    </div>
  );
};

export default Nav;