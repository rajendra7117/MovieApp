import React, {useState, useEffect} from 'react'

import { FaHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Tippy from '@tippyjs/react';
import { toast } from "react-toastify";
import { favActions } from '../store/FavSlice'
export default function FavBookMark(props) {
    const favList = useSelector(state => state.favList)
    const [onList, setOnList] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const onList = favList.favMovies.find((ele) => {
            if (ele.id === props.movie.id) {
              return true;
            }
          });
          if (onList) {
            setOnList(true);
          }
    },[favList])

    const addToFav = (e) => {
        toast.success("movie added to Fav List", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(favActions.addToFav(props.movie));
        setOnList(true)
      };
    
      const removeFromFav = (e) => {
        toast.success("movie removed from Fav List", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        dispatch(favActions.removeFromFav(props.movie.id));
        setOnList(false)
      };
  return (
    <div className='fav-div'>
        <Tippy content={<span>{onList ? "Remove From List" : "Add to Favourites"}</span>}>
            <div>
              <FaHeart onClick={onList ? removeFromFav : addToFav} />
            </div>
          </Tippy>
    </div>
  )
}
