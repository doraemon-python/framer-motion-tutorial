import MyLink from '@/components/myLink'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MyLink href={"normal/"} text={"普通のアニメーション"} />
      <MyLink href={"variant/"} text={"変数を使ったアニメーション"} />
      <MyLink href={"gesture/"} text={"ジェスチャーのアニメーション"} />
      <MyLink href={"drag/"} text={"ドラッグ機能"} />
      <MyLink href={"scroll/"} text={"スクロールに関連したアニメーション"} />
      <MyLink href={"exit/"} text={"アンマウント時のアニメーション"} />
      <MyLink href={"layout/"} text={"自動のアニメーション"} />
      <MyLink href={"tmp/"} text={"自分のお試し用リンク"} />
    </>
  )
}
