import Logo from '/assets/logo.svg'

import Image from 'next/image'

import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react'
import { useState } from 'react'

const CHALLENGE_TYPES = [
  { name: 'Salute The Mob', image: '/markers/selected/salute.png' },
  { name: 'Wear The Mob', image: '/markers/selected/wear.png' },
  { name: 'Post The Mob', image: '/markers/selected/post.png' },
  { name: 'Spray The Mob', image: '/markers/selected/spray.png' },
]

import DATA from './data'
import MAP_STYLES from './map_styles'

const MobChallenge = ({ google }) => {
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [selectedMarkerProps, setSelectedMarkerProps] = useState(null)

  const onMarkerClick = (props, marker, e) => {
    setSelectedMarker(marker)
    setSelectedMarkerProps(props)
  }

  return (
    <section id='mob_challenge' className='mob-challenge py-5'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col text-center">
            <h1>MOB CHALLENGE</h1>
          </div>
        </div>

        {selectedMarker && (
          <style>{`
            .gm-style-iw-c {
              background-image: url(${selectedMarkerProps.image});
              background-size: cover;
              background-repeat: no-repeat;
              padding: 0 !important;
              background-position: center center;
            }
          `}</style>
        )}

        <div className="row py-5">
          <div className='map-box'>
            <Map
              className='map-container'
              key='challengeMap'
              style={{ position: 'relative' }}
              google={google}
              zoom={3}
              initialCenter={{ lng: 1.8883335, lat: 46.603354 }}
              onReady={(_mapProps, map) => {
                map.setOptions({
                  styles: MAP_STYLES
                })
              }}
            >
              {DATA.map((datum, index) => {
                let icon = {
                  url: `/markers/pin/${datum.challengeType}.png`,
                  anchor: new google.maps.Point(5, 5),
                  scaledSize: new google.maps.Size(10, 10)
                }

                if (index == selectedMarker?.id) {
                  icon = {
                    url: `/markers/selected/${datum.challengeType}.png`,
                    anchor: new google.maps.Point(15, 15),
                    scaledSize: new google.maps.Size(30, 30)
                  }
                }

                return (
                  <Marker
                    id={index}
                    challengeType={datum.challengeType}
                    key={`mob_challenge_${index}`}
                    onClick={onMarkerClick}
                    location={datum.location}
                    image={datum.image.default.src}
                    position={{ lat: datum.latitude, lng: datum.longitude }}
                    icon={icon}
                  />
                )
              })}

              <InfoWindow
                className='info-window'
                marker={selectedMarker}
                visible={Boolean(selectedMarker)}
                onClose={() => {
                  setSelectedMarker(null)
                  setSelectedMarkerProps(null)
                }}
              >
                <p className={`info-window-text ${selectedMarker?.challengeType}-the-mob`}>
                  <img src='/markers/pin.png' />
                  <span>{selectedMarker?.location}</span>
                </p>
              </InfoWindow>
            </Map>
          </div>
        </div>

        <div className='row description'>
          <div className="col-md-8 offset-md-2 text-center  py-5">
            <h4>{`MOB INITIATION - MORE SACRED THAN OMERTA'S OATH`}</h4>
          </div>
        </div>

        <div className="row justify-content-center">
          {CHALLENGE_TYPES.map(challengeType => (
            <div
              key={`challeng_type_${challengeType.name}}`}
              className="d-flex align-items-center challenge-type py-2 col-6 col-md-3 justify-content-md-center"
            >
              <Image src={challengeType.image} width={45} height={45} alt='Salute The Mob' />
              <h5>{challengeType.name}</h5>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDRxR_ZHO7vYYtQny3wQ1tF-Vd9SLil9AE'
})(MobChallenge)