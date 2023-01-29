import "./KaoriWiki.css";

export default function KaoriWiki(props: KaoriWikiProps) {
  return (
    <div className="kaori-wiki-kaori-wiki" style={props.style}>
      <div>
        <div className="kaori-wiki-bg" />
      </div>
      <div className="kaori-wiki-layout-3">
        <p className="kaori-wiki-kaori-sonsuza-kadar">
          Kaori sonsuza kadar bizimle...
        </p>
      </div>
      <div>
        <div className="kaori-wiki-pngwing-3x" />
      </div>
      <div>
        <div className="kaori-wiki-pngwing-2x" />
      </div>

      <div>
        <div className="kaori-wiki-kaori">
          <div className="kaori-wiki-ellipse-11x" />
          <div className="kaori-wiki-oldurecegim-1x" />
        </div>
      </div>

      <div>
        <div className="kaori-wiki-resimler">
          <div className="kaori-wiki-component" />
          <div className="kaori-wiki-component-1" />
          <div className="kaori-wiki-component-2" />
          <div className="kaori-wiki-component-3" />
          <div className="kaori-wiki-filtre" />
        </div>
      </div>

      <div className="kaori-wiki-layout-8">
        <p className="kaori-wiki-hiroko">Hiroko</p>
      </div>

      <div className="kaori-wiki-layout-9">
        <p className="kaori-wiki-watari">Watari</p>
      </div>
      <div className="kaori-wiki-layout-10">
        <p className="kaori-wiki-kousei">Kousei</p>
      </div>
      <div className="kaori-wiki-layout-11">
        <p className="kaori-wiki-tsubaki">Tsubaki</p>
      </div>

      <div>
        <div className="kaori-wiki-summary-bg" />
      </div>
      <div className="kaori-wiki-layout-13">
        <p className="kaori-wiki-kaori-alma-tarz-k">
          Kaori, çalma tarzı kişiliğine yansıyan özgür ruhlu bir kemancıdır.
          Bağımsız, öngörülemez ve çabuk sinirlenir. Zaman zaman pasif agresif
          olduğu da dile getiriliyor. Kaori kendine ve yalnızca kendisine
          güvenmeyi sever ama çok dışa dönüktür ve daha çok başkaları için bir
          destek olarak görülebilir.
          <br />
          <br />
          Kaori, nota kağıtlarını yazıldığı gibi takip etmemek gibi teknik
          açıdan gerçekten özensiz bir kemancı olarak görülse de, inanılmaz bir
          kemancıdır. Serinin ilk yarışması sırasında Towa Hall'daki jüri
          üyelerinden biri tarafından not edilen saf yetenekleri, yarışmadaki
          diğerlerinin çok ötesinde. Orijinal olarak besteci tarafından
          amaçlanan belirli tempolarda ve dinamiklerde çalma gibi, müziğin saf
          mekaniği yerine duyguları ve sanatı vurgulayan özgür ruhlu bir
          performans tarzı kullanıyor. Onun müzik tarzı, Kousei'nin piyano
          tutkusunu yeniden alevlendiren ve ona kendisini bir müzisyen olarak
          yeniden tanımlaması için ilham veren şeydir.
          <br />
          <br />
          Şekerleri ve oyuncakları o kadar çok seviyor ki, hastaneden geçici
          olarak taburcu edildiğinde ilk yaptığı şey Kousei'yi hemen şeker ve
          oyuncaklarla dolu bir dükkana sürüklemek oldu.
          <br />
          <br />
          Çok çabuk öfkelenmesine rağmen, Kaori çok nazik ve anlayışlı bir
          kişidir, bu, Kousei ile olan etkileşimleri boyunca gösterilir, çünkü
          onun istismarcı annesine karşı ne hissettiğini ve piyano çalmaktan
          nasıl korktuğunu sık sık anlardı, sözleri Kousei'ye yardımcı oldu. Bu
          karanlık zamanları atlatırken, şefkati onun depresyonundan
          kurtulmasına yardım etti. Çocuklarla birlikteyken nezaketi de
          gösteriliyor, onlarla seksek oynarken görüldüğü gibi ve ondan önce
          onları mutlu etmek için diğer çocuklarla piyano çalması için Kousei'ye
          yalvarıyor ve son olarak Kousei ile alışveriş merkezindeyken gördü.
          kayıp bir çocuk ve annesi onu bulmaya gelene kadar çocuğun elini tuttu
          ve yeniden bir araya geldiklerini görmekten mutlu oldu. Genel olarak,
          Kousei'ye olan öfkesine ve biraz da kötü niyetli davranışına rağmen,
        </p>
      </div>
      <div className="kaori-wiki-layout-14">
        <p className="kaori-wiki-kaori-miyazono">Kaori Miyazono</p>
      </div>
      <div className="kaori-wiki-layout-15">
        <p className="kaori-wiki-elohim-essaim-el">
          Elohim, Essaim... Elohim, Essaim I implore you
        </p>
      </div>
      <div className="kaori-wiki-layout-16">
        <p className="kaori-wiki-yourlie-in-april">YOUR LIE IN APRIL</p>
      </div>
      <div>
        <div className="kaori-wiki-your-lie-in-april-5db-1c-49300e-8d-1x" />
      </div>
      <div>
        <div className="kaori-wiki-pngwing-4x" />
      </div>
      <div>
        <div className="kaori-wiki-pngwing-5x" />
      </div>
    </div>
  );
}

KaoriWiki.defaultProps = {
  style: {}
};

interface KaoriWikiProps {
  style: Object;
}
