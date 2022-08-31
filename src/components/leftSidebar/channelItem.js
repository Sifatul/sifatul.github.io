import Style from './leftSidebar.module.scss';

const ChannelItem = (props) => {
  const { label, imgSrc, activeSidebarLabel, onClick } = props



  return <>
    <div

      className={`${Style.channelItem} ${Style.hasLink} ${activeSidebarLabel === label && Style.active}`}
      onClick={onClick}>
      <img
        className={`${Style.channelIcon} ${Style.addIcon}`}
        src={imgSrc} alt={label} />
      <span > {label}</span>
    </div>
  </>
}
export default ChannelItem