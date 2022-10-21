import Image from 'next/image'
import MobChallenge from '/components/MobChallenge'

import Link from 'next/link'

export default function Challenge() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top py-0">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link href='/'>
              <Image src={require('/assets/logo.png')} alt='Art of Mob' height={100} width={100} />
            </Link>
          </div>
        </div>
      </nav>

      <MobChallenge key='MobChallenge' />
    </>
  )
}
