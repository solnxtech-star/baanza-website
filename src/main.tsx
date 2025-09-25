import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)






// import { Search } from "lucide-react"; // using lucide-react icons (lightweight)
// import hero_banner from '../assets/hero_banner.png'
//  import Button from '../components/Button' 
 
//  type inPut = { type: string }

// export const Home_page: React.FC<inPut> = () => {
//   return (
//     <section
//       className="home_page h-[110vh] flex justify-center items-center flex-col gap-6 px-4"
//       style={{
//         background: `linear-gradient(0deg , rgba(71, 117, 90, 0.8), rgba(34, 167, 71, 0.20)), url(${hero_banner})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "top",
//       }}
//     >
//       {/* Gradient text */}
//      

//     

//       {/* Search bar */}
//      

//       {/* Action buttons */}
//       <div className="flex gap-4 mt-6">
//         <Button
//           type="button"
//           label="Get Started"
//           className="bg-[#22A747] hover:bg-[#1d8c3d] px-6 py-3 text-white font-bold rounded-xl"
//         />
//         <Button
//           type="button"
//           label="Find a Pro"
//           className="border border-[#E9F6ED] bg-[#EEFAF233] hover:bg-[#22A747] px-6 py-3 text-white font-bold rounded-xl"
//         />
//       </div>
//     </section>
//   );
// };

