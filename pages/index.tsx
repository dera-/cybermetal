import {Mokuji} from '../components/Mokuji'
import {Pagination} from '../components/Pagination'

export default function Page() {
  return (
    <Pagination page={1}>
      <h1 style={{marginBottom: '1.2rem', fontSize: '1.5rem'}}>目次</h1>
      <Mokuji
        page={2}
        description={'プロローグ'}
        // 2page
      />
      <Mokuji
        page={4}
        title={'サイバーメタルチンピラとは何か'}
        description={'AIに聞いてみた'}
        author={'OpenAI ChatGPT'}
        // 1page
      />
      <Mokuji
        page={5}
        title={'なぜ人は575が好きなのか'}
        description={'俳句のリズムを心地よく感じる理由を言語・音楽の見地から説明します'}
        author={'tayama0324'}
        // 7page
      />
      <Mokuji
        page={12}
        title={'お酒を蒸留するということ'}
        description={'お酒を蒸留する方法や効果はいろいろあるんだねって話'}
        author={'kinoppyd'}
        // 5page
      />
      <Mokuji
        page={17}
        title={'値段差10倍のメガネを買った話'}
        description={'果たして値段分の差はあるのだろうか'}
        author={'@kusano_k'}
        // 7page
      />
      <Mokuji
        page={24}
        title={'まだ間に合うのできらファン2部を8章まで読んで下さい'}
        description={'きららファンタジア2部やれ。まだまにあう。2020年代きららの片鱗を感じろ'}
        author={'冬椿'}
        // 5page
      />
      <Mokuji
        page={29}
        title={'NFTで億万長者になる方法'}
        description={'巷で話題のNFTを理解して一攫千金を狙います'}
        author={'daichiro.eth'}
        // 6page
      />
      <Mokuji
        page={35}
        title={'スリーカウント転職ルール'}
        description={'3回灯がともったらプレインズウォークする'}
        author={'物入れ狂戦士'}
        // 4page
      />
      <Mokuji
        page={39}
        title={'速くない自転車競技'}
        description={'へんてこ自転車に乗りたい欲がたかまるたかまる'}
        author={'おめが'}
        // 4page
      />
      <Mokuji
        page={43}
        title={'田舎に引越したので自動車を買った'}
        description={'田舎暮らしにクルマは必需品でしょ？持っていなかったら人権ないよね？'}
        author={'かえで@office_acer'}
        // 2page
      />
      <Mokuji
        page={45}
        title={'東京に住む貧乏人どもへの提言'}
        description={'東京とかいう金持ちのための街に住む貧乏人どもへの有益なアドバイス'}
        author={'ちんぴらD'}
        // 11page
      />
      <Mokuji
        page={56}
        title={'秋葉原に10年ぐらい住んでみた＆後日譚'}
        description={'オタクの聖地に住んでみよう'}
        author={'なのくろ'}
        // 8page
      />
      <Mokuji
        page={64}
        title={'繁殖する技術'}
        description={'子どもをつくってみた話'}
        author={'ながいたん'}
        // 10page
      />
      <Mokuji
        page={74}
        description={'編集後記'}
        // 1page
      />
    </Pagination>
  )
}
