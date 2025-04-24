import React from 'react';
import Logo from './assets/Daco_240.png';


const LiveStreamingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header style={{ backgroundColor: '#272221', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={Logo} alt="Logo" style={{ height: '3rem', width: '4rem' }} />
          <span style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white' }}>STREAM</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            LIVE STREAMING
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            ON-DEMAND
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            DASHBOARD
          </a>
        </nav>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            transition: 'background-color 0.3s',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#c2410c'}
          onMouseOut={e => e.target.style.backgroundColor = 'red'}
        >
          SUBSCRIBE
        </button>
      </header>


      {/* Main Content */}
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Video Player */}
        <div className="col-span-2 bg-gray-800 rounded-lg overflow-hidden">
          <video
            controls
            className="w-[1100px] h-[550px] object-cover"
            poster="https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg"
          >
            <source src="https://media.istockphoto.com/id/2178925563/video/drone-footage-of-a-packed-american-football-stadium-at-night-showcasing-the-field-goalposts.mp4?s=mp4-640x640-is&k=20&c=V4-NmORyglDad7XbN0C6cfPx7zUo5as_-4FuagbRI5E=" type="video/mp4" />
          </video>

        </div>

        {/* Chat Section */}
        <div className="bg-gray-800 rounded-lg p-8 text-white ml-10">
  <h2 className="text-4xl font-bold mb-4">CHAT</h2>

  <div className="flex flex-col gap-2">
    <div className="bg-gray-700 p-2 rounded-md">Message 1</div>
    <div className="bg-gray-700 p-2 rounded-md">Message 2</div>
    <div className="bg-gray-700 p-2 rounded-md">Message 3</div>
    <div className="bg-gray-700 p-2 rounded-md">Message 3</div>
  </div>

  <form className="mt-4">
    <input
      type="text"
      placeholder="Add a comment..."
      className="w-full p-2 border border-gray-600 rounded-md outline-none focus:border-orange-600 box-border"
    />
  </form>

  <section className="bg-gray-700 p-4 mt-8 rounded-lg">
    <button className="bg-orange-600 text-white px-4 py-2 mt-2 w-full h-[90px] rounded-md text-5xl border-none cursor-pointer transition-colors duration-300 hover:bg-orange-700">
      SUBSCRIBE
    </button>
  </section>
</div>


        {/* Related Matches */}

        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-2 text-left">RELATED MATCHES</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://www.fcbarcelona.com/photo-resources/2025/04/02/08a3ee8d-3cfb-4e6f-8f9d-743254322665/web-COPA_REY-FINAL.jpg?width=640&height=400"
                alt="Match 1"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://cdn.mos.cms.futurecdn.net/U8deJYzeoPJkawwkVZiDpa-1200-80.jpg"
                alt="Match 2"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/4c84461909038f4a278d606c89dfea17d0c2e76a5f2d0d5ebba65eaa6c0a0248.jpg"
                alt="Match 3"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://assets.khelnow.com/news/uploads/2024/04/Al-Hilal-vs-Al-Nassr-copy.jpg"
                alt="Match 4"
                className="rounded-lg object-cover w-full h-60"
              />
            </div>
          </div>
        </div>


      </main>
    </div>
  );
};

export default LiveStreamingPage;