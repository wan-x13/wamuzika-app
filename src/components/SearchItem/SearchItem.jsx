import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { getSearchTerm } from '../../features/searchSlice';









const FormContainer = styled.form`
   
      display : flex;
      align-items : center;
      height : 10vh;

      input{
        width : 500px;
        border-radius: 20px;
        height : 40px;
        padding-left : 60px;
        font-size: 15px;
        color : black;
      }
`
const BsSearchIcon = styled(BsSearch)`
    font-size : 30px;
    font-weight : 600;
    fill : black;
    position : relative;
    left : 40px;
    top: 2px;
    

`
const SearchItem = () => {
    const {isSearch} = useSelector(state=>state.navigate)
    const [search , setSearch] = useState('')
    const dispatch = useDispatch()


      dispatch(getSearchTerm(search))

 

        
    return (
        <FormContainer
         style={{visibility: isSearch ? 'visible' : 'hidden'}}
        >
            <BsSearchIcon/>
            <input 
            type='search'  
            placeholder='search song, artist, playlist' 
            autoFocus
            value={search}
            onChange={(e)=>(

                  setSearch(e.target.value))}

            />
        </FormContainer>
    );
};

export default SearchItem;