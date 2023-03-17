import { useContext, useState } from 'react';
import { dataContext } from "../context/dataContext"
import { GalleryItem } from "./galleryItem";

function Gallery() {
    const data = useContext(DataContext)
  
    const display = data.map((item, index) => {
      return (
        <GalleryItem item={item} key={index} />
      )
    })
    return (
      <div>
        {display}
      </div>
    )
  }
  
  export default Gallery