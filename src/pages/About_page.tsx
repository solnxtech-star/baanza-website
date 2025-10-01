import { About_hero_section } from "./About/About_hero_section"
import { Mission_section } from "./About/Mission_section"
import { Join_recycle_section } from "./About/Join_recycle_section"
import { Our_team } from "./About/Our_team"
import { Value_section } from "./About/Value_section"


export const About_page: React.FC = () => {
  return (
<>
   <About_hero_section />
   <Mission_section />
   <Value_section />
   <Our_team />
   <Join_recycle_section />
</>
  )
}
