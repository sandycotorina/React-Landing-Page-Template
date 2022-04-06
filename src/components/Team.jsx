export const Team = (props) => {
  return (
    <div id='team'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>struktur Organisasi</h2>
        </div>
      
       <center>
              <button type='submit' className='btn btn-custom btn-lg'>  
                Direktur Utama
              </button>
       </center>

        <center>
        <img src="img/struktur.jpg" className="img-responsive"/>
        </center>

         <center>
              <button type='submit' className='btn btn-custom'>
                Wakil Direktur Operasional
              </button>
              <button type='submit' className='btn btn-custom'>
              Wakil Direktur Marketing
              </button>
              <button type='submit' className='btn btn-custom'>
              Wakil Direktur Manajemen
              </button>
              <button type='submit' className='btn btn-custom'>
                Bendahara 
              </button>
           </center>
                  </div>
                </div> 
  )
}
