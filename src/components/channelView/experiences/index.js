import { MY_INFO } from "../../../constants"
import ChannelIntro from "../channelIntro"
import TextMessage from "../singleMessage/textMessage"
import TimeCapsule from "../singleMessage/timeCapsule"
import DurbarExperience from "./dubar.experience.json"
import MoneybrainExperience from "./moneybrain.experience.json"
import TeracomixExperience from "./teraark.experience.json"
import MghExperience from "./mgh.experience.json"
import airAsiaExperience from "./move.experience.json"

const Projects = () => {


  const companies = [...DurbarExperience, ...MghExperience, ...MoneybrainExperience, ...TeracomixExperience,...airAsiaExperience]

  return <>
    {/* <LinkMessage {...blog} /> */}
    <ChannelIntro
      channelName="experiences"
      body="This is the very beginning of the experiences channel. Here listed are the companies I worked for and their respective timelines."
      imgSrc="https://img.icons8.com/sf-regular/20/000000/hashtag.png"

    />


    {companies.map((company, idx) => {

      const { messages, name, avatar } = company

      return messages.map(item => {
        return <div key={item.time}>

          {item.time && <TimeCapsule time={item.time} />}
          {item.msg && <TextMessage

            message={item.msg}
            senderInfo={{ name: name, avatar: avatar }}


          />}
        </div>
      })


    }
    )}





    {/* <LinkMessage {...pointAvenue} /> */}
  </>
}
export default Projects