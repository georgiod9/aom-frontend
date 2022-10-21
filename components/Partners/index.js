import ArtOfMob from '/assets/partners/art-of-mob.png'
import CtrlMovie from '/assets/partners/ctrl-movie.png'
import Robocom from '/assets/partners/robocom.png'

import Image from 'next/image'

const Partners = () => {
  return (
    <section className='partners py-20'>
      <div className='container h-100'>

        <div className='row pb-5'>
          <div className="col text-center">
            <h1>Partners</h1>
          </div>
        </div>

        <div className="row justify-content-center pt-5">
          <div className='col-6 col-offset-3 col-md-3 col-lg-2'>
            <Image src={CtrlMovie} alt='Partners - Art of Mob' />
          </div>

          <div className='col-12 col-md-1 col-lg-2' style={{ height: 40 }}></div>

          <div className='col-6 col-offset-3 col-md-3 col-lg-2'>
            <Image src={ArtOfMob} alt='Partners - Art of Mob' />
          </div>

          <div className='col-12 col-md-1 col-lg-2'></div>

          <div className='col-6 col-offset-3 col-md-3 col-lg-2'>
            <Image src={Robocom} alt='Partners - Art of Mob' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partners