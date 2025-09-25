import { Featured_baanza } from "./Home/Featured_baanza"
import { Hero_section } from "./Home/Hero_section" 
import { Market_price } from "./Home/Market_price"
import  { Ready_to_start } from "./Home/Ready_to_start"
import { Service } from "./Home/Service"
import { Stay_updated } from "./Home/Stay_updated"

export const Home_page: React.FC = () => {
  return (
<>
   <Hero_section />
   <Service />
   <Market_price />
   <Ready_to_start />
   <Featured_baanza /> 
   <Stay_updated />
</>
  )
}
