import { Typewriter } from 'react-simple-typewriter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import crest from './assets/dartmouth-crest.png.jpg'
import crestDeer from './assets/dartmouth-crest-deer.jpg'
import signatureImg from './assets/thesignature.png'
import leafImg from './assets/leaf.png'
import './App.css'
import { useEffect, useState } from 'react';

const IvyLeafSVG = ({ style }) => (
  <svg className="ivy-leaf" style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 2C24 10 18 22 20 34C22 46 32 62 32 62C32 62 42 46 44 34C46 22 40 10 32 2Z" fill="#00693e" stroke="#004d2c" strokeWidth="2"/>
    <path d="M32 62 Q28 50 32 38 Q36 50 32 62Z" fill="#bfa14a" opacity="0.2"/>
  </svg>
)

const visitedCountries = [
  'US', // USA
  'CA', // Canada
  'GB', // England, Scotland (UK)
  'FR', // France
  'IT', // Italy
  'MC', // Monaco
  'NL', // Netherlands
  'ES', // Spain
  'SE', // Sweden
  'CZ', // Czech Republic
  'DK', // Denmark
  'KY', // Cayman Islands
];

const countryPaths = {
  US: 'M130,80 L170,80 L170,120 L130,120 Z', // placeholder path for US
  CA: 'M110,40 L150,40 L150,80 L110,80 Z', // placeholder path for Canada
  GB: 'M250,70 L260,70 L260,80 L250,80 Z', // placeholder path for UK
  FR: 'M270,110 L280,110 L280,120 L270,120 Z',
  DE: 'M290,110 L300,110 L300,120 L290,120 Z',
  IT: 'M310,130 L320,130 L320,140 L310,140 Z',
  ES: 'M250,130 L260,130 L260,140 L250,140 Z',
  JP: 'M500,130 L510,130 L510,140 L500,140 Z',
  CN: 'M420,110 L440,110 L440,130 L420,130 Z',
  BR: 'M220,220 L240,220 L240,240 L220,240 Z',
  AU: 'M520,260 L540,260 L540,280 L520,280 Z',
};

function flagEmoji(code) {
  const codePoints = code
    .replace('UK', 'GB') // UK is not a valid flag, use GB
    .toUpperCase()
    .split('')
    .map(c => 127397 + c.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function SP500Widget() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchSP = async () => {
      try {
        const res = await fetch('https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=demo');
        const json = await res.json();
        if (!json[0]) throw new Error('No data');
        setData(json[0]);
        setError(false);
      } catch (e) {
        setData(null);
        setError(true);
      }
    };
    fetchSP();
    const interval = setInterval(fetchSP, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);
  if (error) return <div className="sp500-widget" style={{ color: '#bfa14a', background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '0.7em 1.5em', margin: '1.5em auto 0 auto', fontWeight: 600, fontSize: '1.1em', boxShadow: '0 2px 8px #bfa14a22' }}>S&P 500: Unable to load data. Check your API key or rate limits.</div>;
  if (!data) return <div className="sp500-widget">S&P 500: Loading...</div>;
  const changeColor = data.change >= 0 ? '#00693e' : '#bfa14a';
  return (
    <div className="sp500-widget" style={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '0.7em 1.5em', margin: '1.5em auto 0 auto', display: 'inline-block', fontWeight: 600, fontSize: '1.2em', color: '#004d2c', boxShadow: '0 2px 8px #bfa14a22' }}>
      S&P 500: <span style={{ fontWeight: 700 }}>{data.price.toLocaleString()}</span>
      <span style={{ color: changeColor, marginLeft: 12 }}>{data.change >= 0 ? '▲' : '▼'} {data.change.toFixed(2)} ({data.changesPercentage.toFixed(2)}%)</span>
    </div>
  );
}

function FTSE100Widget() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchFTSE = async () => {
      try {
        const res = await fetch('https://financialmodelingprep.com/api/v3/quote/%5EFTSE?apikey=demo');
        const json = await res.json();
        if (!json[0]) throw new Error('No data');
        setData(json[0]);
        setError(false);
      } catch (e) {
        setData(null);
        setError(true);
      }
    };
    fetchFTSE();
    const interval = setInterval(fetchFTSE, 60000);
    return () => clearInterval(interval);
  }, []);
  if (error) return <div className="ftse100-widget" style={{ color: '#bfa14a', background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '0.7em 1.5em', margin: '1.5em auto 0 auto', fontWeight: 600, fontSize: '1.1em', boxShadow: '0 2px 8px #bfa14a22' }}>FTSE 100: Unable to load data. Check your API key or rate limits.</div>;
  if (!data) return <div className="ftse100-widget">FTSE 100: Loading...</div>;
  const changeColor = data.change >= 0 ? '#00693e' : '#bfa14a';
  return (
    <div className="ftse100-widget" style={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '0.7em 1.5em', margin: '1.5em auto 0 auto', display: 'inline-block', fontWeight: 600, fontSize: '1.2em', color: '#004d2c', boxShadow: '0 2px 8px #bfa14a22' }}>
      FTSE 100: <span style={{ fontWeight: 700 }}>{data.price.toLocaleString()}</span>
      <span style={{ color: changeColor, marginLeft: 12 }}>{data.change >= 0 ? '▲' : '▼'} {data.change.toFixed(2)} ({data.changesPercentage.toFixed(2)}%)</span>
    </div>
  );
}

function WorldClocks() {
  const cities = [
    { name: 'Tokyo', tz: 'Asia/Tokyo' },
    { name: 'San Diego', tz: 'America/Los_Angeles' },
    { name: 'Chicago', tz: 'America/Chicago' },
    { name: 'New York', tz: 'America/New_York' },
    { name: 'London', tz: 'Europe/London' },
    { name: 'Copenhagen', tz: 'Europe/Copenhagen' },
    { name: 'Helsinki', tz: 'Europe/Helsinki' },
  ];
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="world-clocks-row" style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '1.5em 0 1.5em 0', flexWrap: 'wrap' }}>
      {cities.map(city => {
        const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.tz }));
        const hours = cityTime.getHours() % 12;
        const minutes = cityTime.getMinutes();
        const seconds = cityTime.getSeconds();
        const hourAngle = (hours + minutes / 60) * 30;
        const minuteAngle = (minutes + seconds / 60) * 6;
        const secondAngle = seconds * 6;
        return (
          <div key={city.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }}>
            <svg width="64" height="64" viewBox="0 0 64 64" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '50%', boxShadow: '0 2px 8px #bfa14a22', border: '1.5px solid #bfa14a' }}>
              <circle cx="32" cy="32" r="30" fill="#fff" stroke="#bfa14a" strokeWidth="2" />
              {/* Hour hand */}
              <line x1="32" y1="32" x2={32 + 14 * Math.sin(Math.PI * hourAngle / 180)} y2={32 - 14 * Math.cos(Math.PI * hourAngle / 180)} stroke="#004d2c" strokeWidth="3" strokeLinecap="round" />
              {/* Minute hand */}
              <line x1="32" y1="32" x2={32 + 20 * Math.sin(Math.PI * minuteAngle / 180)} y2={32 - 20 * Math.cos(Math.PI * minuteAngle / 180)} stroke="#00693e" strokeWidth="2" strokeLinecap="round" />
              {/* Second hand */}
              <line x1="32" y1="32" x2={32 + 22 * Math.sin(Math.PI * secondAngle / 180)} y2={32 - 22 * Math.cos(Math.PI * secondAngle / 180)} stroke="#bfa14a" strokeWidth="1" strokeLinecap="round" />
              <circle cx="32" cy="32" r="2.5" fill="#bfa14a" />
            </svg>
            <div style={{ marginTop: 6, fontSize: '1em', color: '#004d2c', fontWeight: 600 }}>{city.name}</div>
          </div>
        );
      })}
    </div>
  );
}

function SpaceXWidget() {
  const [launch, setLaunch] = useState(null);
  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const res = await fetch('https://api.spacexdata.com/v5/launches/next');
        const data = await res.json();
        setLaunch(data);
      } catch (e) {
        setLaunch(null);
      }
    };
    fetchLaunch();
    const interval = setInterval(fetchLaunch, 60000);
    return () => clearInterval(interval);
  }, []);
  if (!launch) return <div className="spacex-widget">SpaceX: Loading...</div>;
  const date = new Date(launch.date_utc);
  return (
    <div className="spacex-widget" style={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '1em 2em', margin: '1.5em auto 0 auto', display: 'inline-flex', alignItems: 'center', fontWeight: 500, fontSize: '1.1em', color: '#004d2c', boxShadow: '0 2px 8px #bfa14a22', maxWidth: 500, gap: 18 }}>
      {launch.links.patch.small && <img src={launch.links.patch.small} alt="SpaceX Patch" style={{ width: 48, height: 48, marginRight: 16, background: '#fff', borderRadius: 8, border: '1px solid #bfa14a' }} />}
      <div>
        <span style={{ fontWeight: 700, color: '#00693e', marginRight: 8 }}>Next SpaceX Launch:</span>
        <span style={{ fontWeight: 700 }}>{launch.name}</span>
        <div style={{ fontSize: '0.98em', color: '#bfa14a', marginTop: 2 }}>{date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })} UTC</div>
      </div>
    </div>
  );
}

function NasaApodWidget() {
  const [apod, setApod] = useState(null);
  useEffect(() => {
    const fetchApod = async () => {
      try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await res.json();
        setApod(data);
      } catch (e) {
        setApod(null);
      }
    };
    fetchApod();
  }, []);
  if (!apod) return <div className="nasa-apod-widget">NASA APOD: Loading...</div>;
  return (
    <div className="nasa-apod-widget" style={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid #bfa14a', borderRadius: 10, padding: '1em 2em', margin: '1.5em auto 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 500, fontSize: '1.1em', color: '#004d2c', boxShadow: '0 2px 8px #bfa14a22', maxWidth: 600 }}>
      <span style={{ fontWeight: 700, color: '#00693e', marginBottom: 8 }}>NASA Astronomy Photo of the Day</span>
      {apod.media_type === 'image' && (
        <img src={apod.url} alt={apod.title} style={{ maxWidth: 420, width: '100%', borderRadius: 8, margin: '0.5em 0', boxShadow: '0 2px 8px #bfa14a22' }} />
      )}
      <div style={{ fontWeight: 700, margin: '0.5em 0 0.2em 0', color: '#bfa14a', fontSize: '1.08em' }}>{apod.title}</div>
      <div style={{ fontSize: '0.98em', color: '#004d2c', marginBottom: 4, textAlign: 'center' }}>{apod.explanation}</div>
      <a href={apod.hdurl || apod.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00693e', fontWeight: 600, marginTop: 4, textDecoration: 'underline' }}>View Full Image</a>
    </div>
  );
}

function App() {
  // Weather state
  const [weather, setWeather] = useState({ hanover: null, london: null });
  const [forecast, setForecast] = useState({ hanover: null, london: null });

  useEffect(() => {
    // Hanover, NH: lat=43.7022, lon=-72.2896
    // London, UK: lat=51.5074, lon=-0.1278
    const fetchWeather = async () => {
      const hanoverUrl = 'https://api.open-meteo.com/v1/forecast?latitude=43.7022&longitude=-72.2896&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto';
      const londonUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto';
      const [hanoverRes, londonRes] = await Promise.all([
        fetch(hanoverUrl),
        fetch(londonUrl)
      ]);
      const hanoverData = await hanoverRes.json();
      const londonData = await londonRes.json();
      setWeather({
        hanover: hanoverData.current_weather,
        london: londonData.current_weather
      });
      setForecast({
        hanover: hanoverData.daily,
        london: londonData.daily
      });
    };
    fetchWeather();
  }, []);

  const weatherIcon = (code) => {
    // Open-Meteo weather codes: https://open-meteo.com/en/docs#api_form
    if (!code) return '';
    if (code === 0) return '☀️'; // Clear
    if (code <= 3) return '⛅'; // Mainly clear, partly cloudy
    if (code <= 45) return '🌫️'; // Fog
    if (code <= 57) return '🌧️'; // Drizzle
    if (code <= 67) return '🌦️'; // Rain
    if (code <= 77) return '❄️'; // Snow
    if (code <= 99) return '⛈️'; // Thunderstorm
    return '🌡️';
  };

  // Helper to format date/time
  const formatDateTime = (date, time) => {
    if (!date) return '';
    const dt = time ? new Date(`${date}T${time}`) : new Date(date);
    return dt.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) + ' (local)';
  };

  // Helper to format just the date
  const formatDate = (date) => {
    if (!date) return '';
    const dt = new Date(date);
    return dt.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="ivy-container">
      {/* Navigation Ribbon */}
      <nav className="ivy-nav ivy-nav-white nav-flex-center">
        <img src={crestDeer} alt="Dartmouth Crest Deer" className="nav-crest nav-crest-large" style={{ height: 80, width: 'auto', filter: 'drop-shadow(0 0 12px #fff) drop-shadow(0 2px 6px #004d2c44)' }} />
        <div className="nav-links">
          <a href="#about">About Me</a>
          <a href="#blog">Blog</a>
          <a href="#travel">Travel</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#teams">Teams</a>
          <a href="#academics">Academics</a>
        </div>
        <img src={signatureImg} alt="Jackson A. McLain signature" className="nav-signature" style={{ maxHeight: 56, height: 56, width: 'auto', display: 'block', filter: 'drop-shadow(0 2px 6px #004d2c44)', marginRight: '2.5em' }} />
      </nav>
      <WorldClocks />
      <header className="ivy-header">
        <img
          src={crest}
          alt="Dartmouth College Crest"
          className="ivy-shield"
          style={{ width: 160, marginBottom: 32 }}
        />
        <h1>
          <Typewriter
            words={["Jackson A. McLain", "Product Analyst at Transcard", "MEM Student at Dartmouth"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div style={{ margin: '1.5em 0 0 0', display: 'flex', justifyContent: 'center' }}>
          <iframe
            width="700"
            height="394"
            src="https://www.youtube.com/embed/wQgP9nugt5I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=wQgP9nugt5I"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ borderRadius: 12, boxShadow: '0 2px 12px #004d2c22' }}
          />
        </div>
      </header>
      <SP500Widget />
      <FTSE100Widget />
      <SpaceXWidget />
      {/* Continuous Falling Ivy Leaves Background */}
      <div className="ivy-leaves-bg">
        {Array.from({ length: 22 }).map((_, i) => {
          // Use a seeded random for consistent layout on each render
          const rand = (seed) => {
            let x = Math.sin(seed + 1) * 10000;
            return x - Math.floor(x);
          };
          const left = rand(i * 2.1) * 95 + 2;
          const delay = rand(i * 3.3) * 12;
          const duration = 10 + rand(i * 4.7) * 10;
          const size = 10 + rand(i * 5.9) * 14; // 10-24px
          const opacity = 0.18 + rand(i * 6.2) * 0.18;
          const rotate = rand(i * 7.1) * 360;
          const flip = rand(i * 8.3) > 0.5 ? -1 : 1;
          return (
            <img
              key={i}
              src={leafImg}
              alt="Falling ivy leaf"
              style={{
                position: 'absolute',
                left: `${left}vw`,
                top: '-10vh',
                width: size,
                height: 'auto',
                opacity,
                transform: `rotate(${rotate}deg) scaleX(${flip})`,
                animation: `floatLeafFall ${duration}s linear ${delay}s infinite`,
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'brightness(0.92) saturate(0.85) drop-shadow(0 2px 6px #004d2c44)'
              }}
              className="ivy-leaf-real"
            />
          );
        })}
      </div>
      <main>
        {/* Weather Widget */}
        <section className="ivy-weather">
          <h2>Weather Outlook</h2>
          <div className="weather-cards">
            <div className="weather-card">
              <h3>Hanover, NH</h3>
              {weather.hanover ? (
                <>
                  <div className="weather-icon">{weatherIcon(weather.hanover.weathercode)}</div>
                  <div className="weather-temp">{Math.round(weather.hanover.temperature)}°C</div>
                  <div className="weather-wind">Wind: {Math.round(weather.hanover.windspeed)} km/h</div>
                  {forecast.hanover && (
                    <div className="weather-forecast">
                      {forecast.hanover.time.map((date, i) => (
                        <div className="forecast-day" key={date}>
                          <span className="forecast-date">{formatDate(date)}</span>
                          <span className="forecast-icon">{weatherIcon(forecast.hanover.weathercode[i])}</span>
                          <span className="forecast-temp">{Math.round(forecast.hanover.temperature_2m_max[i])}°/{Math.round(forecast.hanover.temperature_2m_min[i])}°C</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className="weather-card">
              <h3>London, England</h3>
              {weather.london ? (
                <>
                  <div className="weather-icon">{weatherIcon(weather.london.weathercode)}</div>
                  <div className="weather-temp">{Math.round(weather.london.temperature)}°C</div>
                  <div className="weather-wind">Wind: {Math.round(weather.london.windspeed)} km/h</div>
                  {forecast.london && (
                    <div className="weather-forecast">
                      {forecast.london.time.map((date, i) => (
                        <div className="forecast-day" key={date}>
                          <span className="forecast-date">{formatDate(date)}</span>
                          <span className="forecast-icon">{weatherIcon(forecast.london.weathercode[i])}</span>
                          <span className="forecast-temp">{Math.round(forecast.london.temperature_2m_max[i])}°/{Math.round(forecast.london.temperature_2m_min[i])}°C</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </section>
        <section className="ivy-bio" id="about">
          <h2>About Me</h2>
          <p>
            I am Jackson McLain, a Product Analyst at Transcard and a current Master of Engineering Management (MEM) Student at Dartmouth College — a collaborative program taught by faculty from the Thayer School of Engineering and the Tuck School of Business. I am passionate about academic excellence, research, and contributing to the vibrant Ivy League community. My interests span interdisciplinary studies, innovation, and leadership.
          </p>
          <ul className="ivy-links">
            <li><a href="mailto:jackson.mclain@dartmouth.edu">Email</a></li>
            <li><a href="https://www.linkedin.com/in/jacksonmclain" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
        {/* Travel Section with Static SVG World Map */}
        <section className="ivy-travel" id="travel">
          <h2>Travel</h2>
          <p>Countries I have visited:</p>
          <div className="flag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', fontSize: '1.25em', fontWeight: 600, letterSpacing: '0.08em' }}>
            {visitedCountries.map(code => (
              <span key={code} className="country-abbr" style={{ background: '#fffbe9', border: '1.5px solid #bfa14a', borderRadius: 6, padding: '6px 16px', color: '#004d2c', boxShadow: '0 1px 4px #bfa14a22' }}>{code}</span>
            ))}
          </div>
        </section>
      </main>
      <footer className="ivy-footer">
        <div className="footer-crest-wrap">
          <img src={crest} alt="Wax Seal" className="wax-seal" style={{ width: 80, height: 80, boxShadow: '0 6px 24px #bfa14a88, 0 2px 8px #004d2c44', borderRadius: '50%' }} />
        </div>
        <small>&copy; {new Date().getFullYear()} Jackson A. McLain</small>
      </footer>
    </div>
  )
}

export default App

