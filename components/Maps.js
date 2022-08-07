import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from "../node_modules/react-map-gl/dist/es6/index"
import { getCenter } from 'geolib'

const Maps = ({searchResults}) => {


const [SelectedLocation, setSelectedLocation] = useState({})


const CoOrdinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
}))


const Center = getCenter(CoOrdinates)

const [ViewPort, setViewPort] = useState({
  width: "100%",
  height: "100%",
  longitude: Center.longitude,
  latitude:  Center.latitude,
  zoom:11
}); 


  return <ReactMapGL
  mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE}
  mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}

{...ViewPort}
onViewportChange={(nextViewport) => setViewPort(nextViewport)}
  >
  {searchResults.map(result => (
    <div key={result.long}><Marker longitude={result.long} latitude={result.lat} offsetLeft={-10} offsetTop={-5}
    
    ><p className='cursor-pointer text-lg animate-bounce' role="img"  aria-label='push-pin' onClick={() => setSelectedLocation(result)}>📌</p></Marker>
    
    
    {SelectedLocation.long === result.long ? ( <Popup onClose={() => setSelectedLocation({})} closeOnClick={true} longitude={result.long} latitude={result.lat} >{result.title}</Popup>) : false}

    </div>
  ))}

  </ReactMapGL>
}


export default Maps