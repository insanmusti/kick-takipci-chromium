# Kick Yayın Bildirici (Chromium)
# Kick Yayın Takip Eklentisi

Kick platformundaki favori yayıncılarınızın canlı yayın durumlarını anlık olarak takip etmenizi sağlayan Chromium tabanlı tarayıcı eklentisi (Chrome, Edge, Brave, Opera vb.).
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

## Kurulum (Geliştirici Modu)

1. Bu klasörü bilgisayarınızda tutun (zip olarak indirdiğiniz için çıkartın).
2. Tarayıcınızda `chrome://extensions` adresine gidin.
3. Sağ üst köşedeki **Geliştirici modu** anahtarını açın.
4. **Paketlenmemiş öğe yükle** (*Load unpacked*) butonuna tıklayın.
5. Bu klasörü (`kick-takipci-chromium`) seçin.

---

## Kullanım

1. Eklenti simgesine tıklayın.
2. Kick kullanıcı adını yazın ve **Ekle**ye basın.
3. Listedeki yayıncıya tıklayarak kanalını açın.
4. Takipten çıkarmak için yayıncının yanındaki **Sil** düğmesine basın.
* **Anlık Bildirim Rozeti:** Pop-up'ı açmanıza gerek kalmadan simge üzerinde kaç yayıncının canlıda olduğunu gösterir.
* **Canlı Yayın Bildirimleri:** Takip ettiğiniz bir yayıncı canlı yayına geçtiğinde profil fotoğrafı ve yayın başlığıyla sistem bildirimi alırsınız. Bildirime tıklayınca yayın açılır.
* **Ayarlar Sekmesi:** Tema seçimi (Kick Yeşili, Okyanus, Mor Gece, Gün Batımı, Kızıl Fırtına, Buz), bildirim ve öneri ayarları.
* **Önerilen Kanallar:** Beğenebileceğiniz kanal önerileri; istenirse tamamen kapatılabilir.
* **Hızlı ve Paralel Yükleme:** İstekleri eşzamanlı atarak yayın durumlarını saniyeler içinde günceller.
* **Düşük Kaynak Kullanımı:** Arka planda yalnızca periyodik alarmlarla çalışan service worker ile çalışır.
* **Gizlilik Odaklı:** Kişisel verilerinizi toplamaz ve üçüncü taraf sunuculara aktarmaz.

---

## Firefox Sürümü

Firefox sürümüne şu depodan ulaşabilirsiniz: https://github.com/insanmusti/kick-yayin-takipcisi
