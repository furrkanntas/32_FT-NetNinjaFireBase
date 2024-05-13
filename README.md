# Firestore ile Basit Bir Kitap Takip Uygulaması

Bu proje, Firestore kullanarak basit bir kitap takip uygulaması oluşturmayı göstermektedir. Uygulama, kullanıcılara kitapları eklemek, silmek ve güncellemek için bir arayüz sunar. Ayrıca, Firestore'un gerçek zamanlı güncelleme özelliğini kullanarak, mevcut kitapları otomatik olarak günceller.

## Kurulum

1. Bu projeyi bilgisayarınıza klonlayın veya indirin.
2. Firestore bağlantısı sağlamak için Firebase Console'da yeni bir proje oluşturun ve projenize özgü Firebase yapılandırma bilgilerini alın.
3. Alınan Firebase yapılandırma bilgilerini `app.js` dosyasına yapıştırın.
4. Firestore ve gerekli diğer Firebase servislerini kullanmak için Firebase SDK'larını projenize dahil edin.
5. Projenin ana dizininde bir terminal açın ve gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
6. Projenizi başlatmak için `npm start` komutunu çalıştırın.

## Kullanım

- Uygulamayı başlattıktan sonra, ekleme, silme ve güncelleme formlarını kullanarak kitaplarınızı yönetebilirsiniz.
- Eklenen kitaplar otomatik olarak listelenir ve gerçek zamanlı olarak güncellenir.
- Firestore konsolunu kullanarak mevcut kitapları doğrulayabilir ve gerektiğinde verileri düzenleyebilirsiniz.

## Katkıda Bulunma

1. Bu projeyi çatallayın (fork).
2. Yeni bir dal (branch) oluşturun (`git checkout -b feature/YeniÖzellik`).
3. Yaptığınız değişiklikleri adlandırın (`git commit -am 'Yeni özellik: ...'`).
4. Değişikliklerinizi dalınıza itin (push) (`git push origin feature/YeniÖzellik`).
5. Bir birleştirme isteği (pull request) gönderin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LİSANS](LICENSE) dosyasına bakın.
