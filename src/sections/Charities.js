import React from 'react'

const onDonateKid = () => {
  window.open('http://nokidhungry.org/trillerfest', '_blank')
}
const onDonateRA = () => {
  window.open('https://www.grammy.com/musicares/donations?utm_source=Triller&utm_medium=partner&utm_campaign=TrillerCovid19', '_blank')
}

export default (props) => (
  <div className='charities' >
    <h2 className='section-title'>Benefiting</h2>
    <div className='cards-outer'>
      <div className='card ram-card'>
        <div className='logo-outer'>
          <img src='assets/ram-logo-242x241.png' alt='ram' width='313px' height='313px' />
        </div>
        <button onClick={onDonateRA}>Donate Now</button>
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
        <button onClick={onDonateKid}>Donate Now</button>
        <p className='copy'>
          No Kid Hungry is working to end child hunger in Amercia today by ensuring
          that all children get the healthy food they need every day to thrive.
        </p>
      </div>
    </div>
    <p className='outer-copy' >
      We're driving donations for those deeply affected by COVID-19
    </p>
  </div>
)
