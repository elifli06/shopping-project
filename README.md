# shopping-project
HTML,CSS VE JAVASCRİPT ile geliştirildi.

js'de

-Form butonunda ki tıklanma olayını yakalamak için olay izleyicisi eklendi.
-Harcama kartı listesinde tıklanılan elemanı tespit etmek için tıklanma olayı eklendi.
-Toplam bilgisini tutmak için bir değişken tanımlandı.
-Her eklenen ürünle birlikte toplam fiyatın güncellenmesi  için bir toplama fonksiyonu eklendi.
-Dışardan parametre olarak fiyat bilgisi alındı.
-İnputtan gelen veri string olduğu için number hale çevirme işlemi yapıldı.
-Elde edilen toplam rakam html tarafına gönderildi.
-Yeni ürün ekleme fonksiyonu tanımlandı.
-Form kendinden gelen sayfa yenileme özelliğini devre dışı bırakma işlemi ve
validation yapıldı. Eğer inputlardan herhangi biri boş ise alert bastırma ve  devam etmeme işlemi yapıldı.

-Eğer inputlar dolu ise devam etme işlemi yapıldı.
-Eğer ödendi checkbox'ı işaretlenmişse koşula girme işlemi yapıldı.
-İnputların içeriğini işlem bittikten sonra temizleme işlemi yapıldı.
-Silme işlemi için elemanı tepsit etme yapıldı.
-Tıklanılan elemanı değişkene atama işlemi yapıldı.
-ilk parentte buttons div'ine ulaşma, 2.sinde ise harcama div'ine ulaşma işlemi gerçekleşti.
-Div içerisinde fiyat bilgisine belirlediğimiz id özelliği ile ulaşma işlemi yapıldı.
-Ulaştığım veri string olduğu için önce number ifadeye çevirme daha sonra başına çıkarılmasını
istediğim için eksi koyup toplama fonksiyonuna gönderme işlemi yapıldı.

-İstenilen bir elemanı  html den kaldırma işlemi yapıldı.
-Selectbox her değiştiğinde çalışacak fonksiyonu tanımla işlemi yapıldı.
addEventlistenrdan gelen event yani olay bilgisinin hedefteki değerini
"filterValue" değişkenine atama ilemi yapıldı.

-Harcama kartlarının hepsini forEach ile dönme işlemi ve
foreach döngüsünden gelen her bir harcama kartı için select box'ın 
değerine göre işleme tabi tutma olayı gerçekleşti.

-Switch ile selectbox'ın değerini ele alma işlemi yapıldı.

-Filtre değeri  "all" ise yani Hepsi seçili ise,
bütün harcama kartlarının görünüm özelliğini aktif etme işlemi yapıldı.
       

      
       