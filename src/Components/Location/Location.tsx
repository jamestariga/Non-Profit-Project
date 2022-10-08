const Location = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-10 space-y-10'>
        <h1 className='text-4xl text-center leading-loose text-white font-bold'>
          Class Schedule & Location
        </h1>
        <div className='grid xl:grid-cols-2 space-y-10 xl:space-y-0 xl:space-x-10'>
          <div className='flex flex-col xl:flex-row xl:justify-center gap-6'>
            <a
              href='https://www.google.ca/maps/place/209+Jackson+St,+Coquitlam,+BC+V3K+4C1/@49.2358645,-122.8794907,17z/data=!3m1!4b1!4m2!3m1!1s0x5486780e25615d51:0xb767a830a434e655'
              target='_blank'
            >
              <img
                src='https://static.wixstatic.com/media/32a12e_cd39b9deb59740298e509276c7c23117~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_303,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/TOZENJI%20GOOD%20PHOTO%202018.jpg'
                alt=''
                className='rounded-2xl transition-all hover:scale-[1.05] duration-300'
              />
            </a>
            <div className='flex flex-col items-center gap-4'>
              <h1 className='text-xl xl:text-2xl text-center leading-loose text-white font-bold'>
                Tozenji Dojo
              </h1>
              <p className='text-white text-lg leading-loose'>
                209 Jackson St Coquitlam, BC
              </p>
              <h1 className='text-xl xl:text-2xl text-center leading-loose text-white font-bold'>
                Children's Classes
              </h1>
              <p className='text-white text-lg leading-loose'>
                Saturday: 1:00PM-2:30PM
              </p>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row justify-center gap-6'>
            <a
              href='https://www.google.ca/maps/place/Trout+Lake+Community+Centre/@49.2553604,-123.0675337,17z/data=!3m1!4b1!4m2!3m1!1s0x548676af388900e3:0x7c99f6f1b811a0cd'
              target='_blank'
            >
              <img
                src='https://static.wixstatic.com/media/32a12e_721fd677f9764e2bbfefc1f2dcd5e1f1~mv2_d_6016_4016_s_4_2.jpg/v1/crop/x_430,y_0,w_5156,h_4016/fill/w_303,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/trout%20lake%20community%20centre.jpg'
                alt=''
                className='rounded-2xl transition-all hover:scale-[1.05] duration-300'
              />
            </a>
            <div className='flex flex-col items-center gap-4'>
              <h1 className='text-xl xl:text-2xl text-center leading-loose text-white font-bold'>
                Trout Lake Community Centre
              </h1>
              <p className='text-white text-lg leading-loose'>
                3350 Victoria Drive Vancouver, BC
              </p>
              <h1 className='text-xl xl:text-2xl text-center leading-loose text-white font-bold'>
                Children's Classes
              </h1>
              <p className='text-white text-lg leading-loose'>
                Saturday: 10:00AM-11:30AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
