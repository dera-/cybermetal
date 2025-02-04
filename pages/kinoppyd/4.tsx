import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={15}>
      <h3>ウイスキー</h3>
      <p>
        ウイスキーは、大きく二つの種類に分けられます。大麦麦芽（モルト）を使ったモルトウイスキーと、トウモロコシや小麦など大麦以外の穀物を使ったグレーンウイスキーです。それら二つを混ぜ合わせたブレンデッドウイスキーもありますが、蒸留という工程で見るとモルトウイスキーとグレーンウイスキーの二つに分けられます。
      </p>
      <p>
        モルトウイスキーは、原料の風味を残すために単式蒸留が行われます。一回だけではアルコール濃度が十分に上がらないため、一般的に再留と呼ばれる二回目の蒸留を行います。使われる蒸留器は銅製のポットスチルです。スコットランド、アイルランド、を筆頭に、スコットランドでのウイスキー作りをベースにしている日本、台湾、インドではこの方式が使われます。
      </p>
      <p>
        グレーンウイスキーは、原料の風味をあまり残さずすっきりと仕上げるために、連続蒸留が行われます。一回の蒸留で純度の高いエタノールを取りだますが、アメリカのバーボンなどは原料の風味を残すべく精製されるエタノールの濃度を８０パーセント以下にするよう法律で決められたりしています。アメリカ、カナダではこの方法がメインでウイスキーが作られており、スコットランド、アイルランド、日本、台湾、インドでもブレンド用のウイスキーとして一部で作られています。
      </p>
      <h3>焼酎・泡盛</h3>
      <p>
        焼酎は日本で造られているお酒で、米、麦、芋などの原料を使っています。泡盛はタイ米を原料としています。酒税法では単式蒸留と連続蒸留をした場合の要件が定められており、それぞれ単式蒸留焼酎と連続式蒸留焼酎と呼ばれています[5]。一般的には、昔の酒税法の区分である乙類（本格焼酎）、甲類という呼び方が有名です。名前からわかるように、原料の風味を残すように作られた単式蒸留の焼酎は本格と呼ばれ、焼酎単体で飲むことが多いです。一方で、雑味の少ない連続式蒸留焼酎はチューハイなどのベースとして使用されることが多いです。泡盛は法律での制限はありませんが、ほぼ全てが単式蒸留で作られています。
      </p>
      <p>
        面白いことに、焼酎や泡盛の蒸留器は銅で作られているものは少なく、特に泡盛を造っている沖縄県では一カ所しか存在しません[6]。蒸留の際に出る硫黄臭は、熟成の過程で揮発するようです。
      </p>
      <h3>ジン</h3>
      <p>
        ジンは珍しい作り方をされます。原料は穀物であれば特に決まりはなく、様々なものが用いられます。まず、連続式蒸留を行い９０パーセントほどの無味無臭なニュートラルスピリッツとよばれるお酒を造ります。その後、ニュートラルスピリッツにボタニカルと呼ばれる原料で香り付けを行います。ボタニカルには、ジュニパーベリーをはじめとした様々な植物が使われますが、これも特に決まりはなく、各ブランドが独自の香り付けを行うクラフトジンが流行しています。
      </p>
    </Pagination>
  )
}
