import React, { useEffect, useRef } from 'react'

const App = () => {
  const redRef = useRef()
  const yellowRef = useRef()
  const greenRef = useRef()

  const trafficCycle = () => {
    setTimeout(() => {
      redRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
      yellowRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
      greenRef.current.className =
        'w-20 h-20 rounded-full bg-green-600 shadow-lg shadow-green-500/50 transition duration-300 ease-in-out'
    }, 2000)

    setTimeout(() => {
      redRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
      yellowRef.current.className =
        'w-20 h-20 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/70 transition duration-300 ease-in-out'
      greenRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
    }, 7000)

    setTimeout(() => {
      redRef.current.className =
        'w-20 h-20 rounded-full bg-red-600 shadow-lg shadow-red-400/50 transition duration-300 ease-in-out'
      yellowRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
      greenRef.current.className =
        'w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out'
    }, 8000)
  }

  useEffect(() => {
    trafficCycle()
    const interval = setInterval(() => {
      trafficCycle()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-end justify-center">

      {/* Moon */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-100 rounded-full shadow-2xl animate-pulse opacity-80"></div>

      {/* Parallax Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 2}s ease-in-out infinite`,
          }}
        ></div>
      ))}

      {/* Slow moving clouds */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-500 opacity-20 rounded-full blur-xl"
          style={{
            width: `${200 + Math.random() * 200}px`,
            height: `${60 + Math.random() * 40}px`,
            top: `${20 + Math.random() * 30}%`,
            left: `${-300 + i * 500}px`,
            animation: `moveCloud ${40 + Math.random() * 20}s linear infinite`,
          }}
        ></div>
      ))}

      {/* City Silhouette */}
      <div className="absolute bottom-20 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-700"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 60 + 20}px`,
              marginRight: '6px',
            }}
          ></div>
        ))}
      </div>

      {/* Foreground Trees */}
      <div className="absolute bottom-16 flex gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-4 h-12 bg-green-900 rounded-t-full"></div>
        ))}
      </div>

      {/* Moving Cars */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute bottom-10 flex gap-2 animate-carMove"
          style={{
            animationDelay: `${i * 2}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        >
          <div className="w-14 h-4 bg-yellow-200 rounded-full blur-sm opacity-80"></div>
          <div className="w-14 h-4 bg-yellow-200 rounded-full blur-sm opacity-80"></div>
        </div>
      ))}

      {/* Traffic Light */}
      <div className="flex flex-col items-center mb-12 z-10">
        <div className="flex flex-col gap-6 p-6 bg-gray-800 rounded-2xl shadow-xl border-4 border-gray-700">
          <button
            ref={redRef}
            className="w-20 h-20 rounded-full bg-red-600 shadow-lg shadow-red-500/50 transition duration-300 ease-in-out"
          ></button>
          <button
            ref={yellowRef}
            className="w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out"
          ></button>
          <button
            ref={greenRef}
            className="w-20 h-20 rounded-full bg-gray-700 transition duration-300 ease-in-out"
          ></button>
        </div>
        <div className="w-4 h-64 bg-gray-700 mt-2 rounded-b"></div>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-2 bg-gray-700"></div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes carMove {
            0% { left: -200px; }
            100% { left: 110%; }
          }
          .animate-carMove {
            position: absolute;
            animation-name: carMove;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes moveCloud {
            0% { left: -400px; }
            100% { left: 110%; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  )
}

export default App
