import { useMemo } from 'react'
import { useStore } from '../../store'
import { channels } from "../leftSidebar/channelList"
import { peopleArr } from '../leftSidebar/peopleList'
import { apps } from '../leftSidebar/appList'
import Style from './channelView.module.scss'
import Header from "./header"
import IntroMessage from "./intro/introMessage"
import Projects from './projects'
import Experiences from './experiences'
import TextEditor from "./textEditor/textEditor"
import Github from "./github"
import GithubPage from './github'
import LeetCodePage from './leetcode'
import HackerRankPage from './hackerrank'
import GuestPage from "./guestPage"
const ChannelView = () => {

  const { activeSidebarItem } = useStore();
  const { activeSidebarLabel } = activeSidebarItem;

  const activePage = useMemo(() => {
    switch (activeSidebarLabel) {
      case peopleArr[0].label:
        return <IntroMessage />;
      case channels[0].label:
        return <Projects />
      case channels[1].label:
        return <Experiences />
      case apps[2].label:
        return <HackerRankPage />
      case apps[0].label:
        return <GithubPage />
      case apps[1].label:
        return <LeetCodePage />
      default:
        return <GuestPage />
    }

  }, [activeSidebarLabel])


  return <>

    <div className={Style.channelView}>
      <Header />

      <div className={Style.wrapper}>
        {activePage}


      </div>
      <TextEditor />

    </div>

  </>

}
export default ChannelView