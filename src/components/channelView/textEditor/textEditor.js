import Style from './textEditor.module.scss'
import Image from "../../global/image"
const TextEditor = () => {
  return <div className={Style.textEditor}>
    <div className={Style.container}>
      <div className={Style.editorItemContainer}>

        <Image className={Style.editorItem} src="https://img.icons8.com/material-outlined/15/cacaca/bold.png" alt="bold-icon" />
        <Image className={Style.editorItem} src="https://img.icons8.com/ios-glyphs/15/cacaca/italic.png" alt="italic-icon" />
        <Image className={Style.editorItem} src=" https://img.icons8.com/external-tal-revivo-bold-tal-revivo/15/bcbbbc/external-strikethrough-text-feature-in-word-processing-application-text-bold-tal-revivo.png" alt="strike-through-icon" />
      </div>
      <div contentEditable="true" className={Style.textArea}>

      </div>
      <div className={Style.actionItemContainer}>
        <div className={Style.left}>
          <Image className={Style.editorItem} src="https://img.icons8.com/ios/15/bcbbbc/no-video--v1.png" alt="no-video" />

          <Image className={Style.editorItem} src="https://img.icons8.com/material-outlined/15/bcbbbc/microphone.png" alt="microphone" />
        </div>

        <div className={Style.right}>

          <Image className={Style.editorItem} src="https://img.icons8.com/external-inkubators-glyph-inkubators/15/bcbbbc/external-send-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="send-icon" />
        </div>

      </div>
    </div>

  </div>

}
export default TextEditor