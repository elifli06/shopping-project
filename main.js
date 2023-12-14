console.log("bağlantı kontrolü")


const harcamaInput = document.querySelector("#harcama");
console.log(harcamaInput)

const fiyatInput = document.querySelector("#fiyat");
console.log(fiyatInput)

const formBtn = document.querySelector(".ekle-btn");
console.log(formBtn)

const list = document.querySelector(".list");
console.log(list)

const totalInfo = document.querySelector("#total-info");
console.log(totalInfo)

const nameInput = document.getElementById("name-input");
console.log(nameInput)


const statusCheck = document.getElementById("status-input");
console.log(statusCheck)

const selectFilter = document.getElementById("filter-select");
console.log(selectFilter)

const userName = localStorage.getItem("name");

nameInput.value = userName;

nameInput.addEventListener("change", (e) => {
   console.log(e.target.value)
  localStorage.setItem("name", e.target.value);
});

//Form butonunda ki tıklanma olayını yakalamak için olay izleyicisi eklendi.
formBtn.addEventListener("click", addExpense);

//harcama kartı listesinde tıklanılan elemanı tespit etmek için tıklanma olayı eklendi.
list.addEventListener("click", handleClick);

//Select box her değiştiğinde dinleme yapabilmek için
selectFilter.addEventListener("change", handleFilter);

//Toplam bilgisini tutmak için bir değişken tanımlandı.
let toplam = 0;

//Her eklenen ürünle birlikte toplam fiyatın güncellenmesi  için bir toplama fonksiyonu eklendi.
function updateToplam(fiyatBilgisi) {
  //Dışardan parametre olarak fiyat bilgisi alınıyor
  console.log(fiyatBilgisi)
  //inputtan gelen veri string olduğu için number hale çevirme işlemi
  toplam += Number(fiyatBilgisi);
  //Elde edilen toplam rakam html tarafına gönderiliyor.
  totalInfo.innerText = toplam;
}
//Yeni ürün ekleme fonksiyonu
function addExpense(e) {
  //Form kendinden gelen sayfa yenileme özelliğini devre dışı bırakma
  e.preventDefault();
  console.log('addExpense')
  console.log(harcamaInput)
  //validation (Doğrulama) eğer inputlardan herhangi biri boş ise alert bastır ve  devam etme
  if (!harcamaInput.value || !fiyatInput.value) {
    alert(" Boş alanları doldurunuz");
  }
  //Eğer inputlar dolu ise devam et
  else {
    //Ekle butonuna basıldğı anda div oluşturulur.
    const harcamaDiv = document.createElement("div");
    //oluştrulan div'e expense class atanır.
    harcamaDiv.classList.add("expense");

    //Eğer ödendi checkbox'ı işaretlenmişse bu koşula gir
    if (statusCheck.checked) {
      console.log(statusCheck.checked);
      //kartın class'larına payed class'ını ekle
      harcamaDiv.classList.add("payed");
    }

    console.log(statusCheck.checked)
    //oluşturulan div'in içeriği ile  ilgili html elemanları veriliyor.
    //tek tırnak ile sadece tek satır yazabildiğimiz ve içerisine dinamik
    //veri ekleyemediğimiz için backtick (``) kullanılır.
    harcamaDiv.innerHTML = `<h2>${harcamaInput.value}</h2>
     <h2 id='value'>${fiyatInput.value}</h2>
         <div class="buttons">
              <img id='payment' src="img/pay.png" alt="money">
              <img id='remove' src="img/remove.png" alt="buy">
         </div>
  `;
    //oluşturulan harcama div'i html tarafına gönderiliyor
    list.appendChild(harcamaDiv);
    console.log(harcamaDiv);
    //tüm işlemler tamamlandıktan sonra toplam fiyat güncelleniyor.
    updateToplam(fiyatInput.value);
  }
  //İnputların içeriğini işlem bittikten sonra temizleme
  harcamaInput.value = "";
  fiyatInput.value = "";
}

//silme işlemi için elemanı tepsit etme
function handleClick(e) {
  console.log(e.target)

  //tıklanılan eleman genel "e" parametresinin target özelliğindedir.
  //tıklanılan elemanı değişkene atıyoruz
  let tiklanilanEleman = e.target;
  //tıklanılan elemanın silme resmi olduğunu tespit ediyoruz.
  if (tiklanilanEleman.id === "remove") {
     console.log(tiklanilanEleman.parentElement.parentElement)
    // not: bir elemanın bir üst kapsayıcı yapısını almak için "parentElement" kullanılır.

    //ilk parentte buttons div'ine ulaştım, 2.sinde ise harcama div'ine ulaştım.
    const kapsayiciElement = tiklanilanEleman.parentElement.parentElement;
    console.log(kapsayiciElement)
    //div içerisinde fiyat bilgisine belirlediğimiz id özelliği ile ulaşıyoruz.
    const deletedPrice = kapsayiciElement.querySelector("#value").innerText;
    console.log(deletedPrice);
    //ulaştığım veri string olduğu için önce number ifadeye çeviriyorum daha sonra başına çıkarılmasını
    //istediğim için eksi koyup toplama fonksiyonu yolluyorum.
    updateToplam(-Number(deletedPrice));
    //istenilen bir elemanı  html den kaldırma
    kapsayiciElement.remove();
  }
}


//Selectbox her değiştiğinde çalışacak fonksiyon
function handleFilter(e) {
  //console.log('ilitre fonks')

  const harcamaKartlari = list.childNodes;
  //console.log(items)

  //addEventlistenrdan gelen event yani olay bilgisinin hedefteki değerini
  //filterValue değişkenine atıyorum.

  const filterValue = e.target.value;
  //console.log(filterValue)



  //forEach,map,for,

  //Harcama kartlarının hepsini forEach ile dön
  harcamaKartlari.forEach((harcamaKarti) => {
    //foreach döngüsünden gelen her bir harcama kartı için select box'ın 
    //değerine göre işleme tabi tutma
    console.log(harcamaKarti);
    //switch ile selectbox'ın değerini ele aldım
    switch (filterValue) {

      //filtre değeri  "all" ise yani Hepsi seçili ise
      case "all":
        //bütün harcama kartlarının görünüm özelliğini aktif ettim
        harcamaKarti.style.display = "flex";
        break;

      case "payed":
        if (!harcamaKarti.classList.contains("payed")) {
          harcamaKarti.style.display = "none";
        } else {
          harcamaKarti.style.display = "flex";
        }
        break;

      case "not-payed":
        if (harcamaKarti.classList.contains("payed")) {
          harcamaKarti.style.display = "none";
        } else {
          harcamaKarti.style.display = "flex";
        }

        break;
    }
  });
}

