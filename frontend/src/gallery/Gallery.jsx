import Scroll from './Scroll'
import { useEffect, useCallback, useState } from 'react';

function Gallery({token}) {

  // console.log("Gallery component has loaded!");
  return (
    <>
    {console.log("Gallery componenet rendered")}
    <Scroll url = "http://127.0.0.1:8000/api/v1/cakes"/>      
    </>
  )
}

export default Gallery