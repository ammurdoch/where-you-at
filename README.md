# where-you-at
Konumunu kaydetmek için basit bir react-native app

Uygulamada iki sekme olacak.  Birince sekmede "Konumumu kaydet" diye bir düğme olacak.  Konum kaydedilmeden önce konuma bir renk ve ad verilmeli.  Kullanıcı sadece 9 renkten seçebilmeli.  Ad, bu regexin kapsadığı karakterlerle oluşturulan herhangi bir şey olabilir: `/^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ \-!$%*_+|=:;?,./]+$/` .  Kaydedilince kullanıcının konumunun boylam, enlem, renk, ad ve herhangi gereken başka verileri aşağıda belirlenen MongoDB veritabanına kaydedilecek.

İkinci sekmede bir harita olacak.  Bu uygulamayı kullanan herkesin kaydettiği konumlar kendi adlarıyla haritada gösterilecek.  Konumların işaretleri (Marker), konumlarla kaydedilen farklı farklı renkler olmalı.

## Kullanılan Platformlar
1.  React Native
- https://facebook.github.io/react-native/docs/getting-started.html
2.  MongoDB
- https://www.mongodb.com
- https://www.npmjs.com/package/mongodb
3.  react-native-maps veya başka bir harita/konum kütüphanesi
- https://github.com/react-community/react-native-maps
- https://medium.com/quick-code/react-native-location-tracking-14ab2c9e2db8

## Mongo DB
Ayrıntıları özelden attım

## Nasil teslim edilir
Bu projenin kodu bu git repoya push edilecek.  Uygulamayı en az Android veya iOS simülatöründa çalıştırılabilir.

## Bitti mi?
Aşağıdaki kullanıcı hikayeler gerçekleşince bu proje bitirilmiş olarak sayılır.

Bir kullanıcı olarak ...
1.  Benim şu an ki konumuma bir ad ve renk verip onu kaydedebilirim.
2.  Her hangi bir cihazdan daha önce kaydedilen konumları bir haritada görebiliyorum.
