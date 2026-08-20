# Kick Takipçisi

Kick yayıncılarını takip etmenizi sağlayan basit bir tarayıcı eklentisidir.
Eklenti, takip ettiğiniz yayıncıların canlı olup olmadığını kontrol eder ve
canlı yayın sayısını eklenti simgesinde gösterir.

## Özellikler

- Kick kullanıcı adı ekleme ve silme
- Takip edilen yayıncıların canlı/çevrimdışı durumunu görme
- Canlı yayınlardaki izleyici sayısını görme
- Yayıncıların profil fotoğrafını isminin yanında gösterme
- Profil fotoğrafı yüklenemezse güvenli bir baş harfli alternatif gösterme
- Canlı yayın sayısını eklenti simgesinde rozet olarak gösterme
- Yayıncı adına tıklayarak Kick kanalını açma
- Takip listesini tarayıcı depolamasında saklama
- Yaklaşık iki dakikada bir otomatik durum kontrolü

## Güvenlik ve gizlilik

Eklenti yalnızca Kick API'sinden yayın durumu, izleyici sayısı ve profil
fotoğrafı bilgilerini alır. Profil fotoğrafı yalnızca `https://kick.com` veya
alt alan adlarından geliyorsa gösterilir; diğer adresler reddedilir.

Takip listesi yerel tarayıcı depolamasında tutulur. Eklentinin çalışması için
gerekli izinler `manifest.json` dosyasında tanımlıdır. Kaynak kodu incelemek
ve eklentiyi kendiniz paketlemek, güvenlik açısından önerilen yöntemdir.

## Kaynak klasörden yükleme

`.crx` dosyası oluşturmadan önce eklentiyi test etmek için:

1. Chromium veya Chrome'da `chrome://extensions` adresini açın.
2. Sağ üstten **Geliştirici modu**nu etkinleştirin.
3. **Paketlenmemiş öğe yükle** düğmesine tıklayın.
4. Bu README dosyasının bulunduğu ana klasörü seçin.
5. Araç çubuğundaki eklenti simgesinden **Kick Takipçisi**ni açın.

## CRX dosyasına dönüştürme

Chrome/Chromium'da CRX üretmek için:

1. `chrome://extensions` adresini açıp **Geliştirici modu**nu etkinleştirin.
2. **Uzantıyı paketle** düğmesine tıklayın.
3. **Uzantının kök dizini** alanında bu projenin ana klasörünü seçin.
   `manifest.json` dosyası doğrudan bu klasörün içinde olmalıdır.
4. İlk paketlemede özel anahtar alanını boş bırakıp **Paketle**ye tıklayın.
5. Oluşan `.crx` dosyası dağıtılabilir eklenti paketidir. Yanında oluşan
   `.pem` dosyasını güvenli bir yerde saklayın; aynı eklentiyi güncellerken
   aynı anahtarın kullanılması gerekir.

> Doğru dosya uzantısı Chrome/Chromium için `.crx`'tir. Bazı araçlar bunu
> yanlışlıkla `.crxe` olarak adlandırabilir; yükleme ekranında beklenen
> standart paket uzantısı `.crx` dosyasıdır.

## CRX dosyasını yükleme

1. `chrome://extensions` adresini açın.
2. **Geliştirici modu**nu etkinleştirin.
3. `.crx` dosyasını uzantılar sayfasına sürükleyip bırakın.
4. Onay ekranında **Ekle** veya **Uzantıyı yükle** seçeneğini seçin.

Kurumsal veya güvenlik politikaları CRX sürükleyerek yüklemeyi engellerse,
aynı sayfadaki **Paketlenmemiş öğe yükle** seçeneğini kullanarak proje
klasörünü yükleyebilirsiniz.

## Kullanım

1. Eklenti simgesine tıklayın.
2. Kick kullanıcı adını yazın ve **Ekle**ye basın.
3. Listedeki yayıncıya tıklayarak kanalını açın.
4. Takipten çıkarmak için yayıncının yanındaki **Sil** düğmesine basın.

## Proje yapısı

```text
kick-takipci-chromium/
├── background.js          # Periyodik canlı yayın kontrolü ve rozet
├── manifest.json          # Eklenti ayarları ve izinler
├── icon/icon.png          # Eklenti simgesi
└── popup/
    ├── popup.html         # Eklenti penceresinin yapısı
    ├── popup.css          # Eklenti penceresinin görünümü
    └── popup.js           # Liste, API ve kullanıcı işlemleri
```
