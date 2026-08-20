# Kick Yayın Takip Eklentisi

Kick yayıncılarını takip etmenizi sağlayan basit bir tarayıcı eklentisidir.
Eklenti, takip ettiğiniz yayıncıların canlı olup olmadığını kontrol eder.

## Özellikler

- Kick kullanıcı adı ekleme ve silme
- Takip edilen yayıncıların canlı/çevrimdışı durumunu görme
- Canlı yayınlardaki izleyici sayısını görme
- Yayıncıların profil fotoğrafını isminin yanında gösterme
- Canlı yayın sayısını eklenti simgesinde rozet olarak gösterme
- Yayıncı adına tıklayarak Kick kanalını açma
- Yaklaşık iki dakikada bir otomatik durum kontrolü

## Güvenlik ve gizlilik

Eklenti yalnızca Kick API'sinden yayın durumu, izleyici sayısı ve profil
fotoğrafı bilgilerini alır. Profil fotoğrafı yalnızca `https://kick.com` veya
alt alan adlarından geliyorsa gösterilir; diğer adresler reddedilir.

Takip listesi yerel tarayıcı depolamasında tutulur. Eklentinin çalışması için
gerekli izinler `manifest.json` dosyasında tanımlıdır. Kaynak kodu incelemek
ve eklentiyi kendiniz paketlemek, güvenlik açısından önerilen yöntemdir.

## Kurulum (.crx Dosyası İle)

Eklentiyi bilgisayarınıza indirip manuel olarak yüklemek için aşağıdaki adımları izleyin:

    Bu depodaki veya Releases bölümündeki güncel .crx dosyasını bilgisayarınıza indirin.
    Chromium tabanlı (Chrome, Edge, Brave, Helium vb.) tarayıcınızı açın.
    Adres çubuğuna chrome://extensions/ yazıp Enter tuşuna basın.
    Sağ üstten geliştirici modunu aktifleştirin.
    İndirdiğiniz .crx dosyasını sürükleyin ve bırakın, ardından eklentiyi ekle diyin ve kullanmaya başlayın!!!

## Kullanım

1. Eklenti simgesine tıklayın.
2. Kick kullanıcı adını yazın ve **Ekle**ye basın.
3. Listedeki yayıncıya tıklayarak kanalını açın.
4. Takipten çıkarmak için yayıncının yanındaki **Sil** düğmesine basın.
