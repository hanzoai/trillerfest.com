import React from 'react'

const onDonate = () => {
  console.log('donate clicked')
}

export default (props) => (
  <div className='charities' >
    <h2 className='section-title'>Benefiting:</h2>
    <div className='cards-outer'>
      <div className='card ram-card'>
        <div className='logo-outer'>
          <img src='assets/ram-logo-242x241.png' alt='ram' width='242px' height='241px' />
          <p className='title title-1'>Recording Academy<span className='copyright'>&reg;</span></p>
          <p className='title title-2'>Musicares<span className='copyright'>&reg;</span></p>
        </div>
        <button onClick={onDonate}>Donate Now</button>
        <p className='copy'>
          The Recording Academy&reg; and its affiliated charitable foundation
          MusiCares&reg; have established the COVID-19 Relief Fund to help our
          peers in the music community affected by the Coronavirus pandemic.
        </p>
      </div>
      <div className='card nkh-card'>
        <div className='logo-outer'>
          <img src='assets/nkh-logo-313x297.png' alt='nkh' width='313px' height='297px' />
        </div>
        <button onClick={onDonate}>Make Donation</button>
        <p className='copy'>
          No Kid Hungry is working to end child hunger in Amercia today my ensuring
          that all children get the healthy food they need every day to thrive.
        </p>
      </div>
    </div>
    <p className='outer-copy' >
      We're driving donations for those deeply affected by COVID-19
    </p>
  </div>
)
