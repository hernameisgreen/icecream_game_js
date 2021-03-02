let name;
let btn=document.querySelector("#btn");
btn.addEventListener("click", ini)
let points;

function ini() {
  Swal.fire({
    title:
      "歡迎來到奇妙冰淇淋店❤\n在這裡點完甜筒就會附送一個歌單想問你的名字是..?",
    imageUrl: "images/ice-cream-bar.jpg",
    imageHeight: 300,
    input: "text",
    inputValue: "巧達",
    confirmButtonText: "取好了",
    cancelButtonText: "Pass",
    showCancelButton: true,
  }).then(function (res) {
    if (res.dismiss === "cancel") {
      name = "神秘客";
      Swal.fire({
        title: `其實你是來默默評鑑我們冰淇淋的吧?`,
        text: `那就叫你${name}吧，今天想來點什麼呢?`,
        allowOutsideClick: false,
        imageUrl: "images/vincent-adultman.jpg",
        imageHeight: 300,
      }).then(quiz);
    } else {
      name = res.value;
      Swal.fire({
        title: `哈囉${name}!`,
        text: "今天想來點什麼呢?",
        allowOutsideClick: false,
        imageUrl: "images/diane.jpg",
        imageHeight: 300,
      }).then(quiz);
    }
  });
  function quiz() {
    Swal.fire({
      title: `${name}，先選個口味吧!`,
      showCancelButton: true,
      allowOutsideClick: false,
      imageUrl: "images/base.jpg",
      confirmButtonText: "薄荷巧克力!",
      cancelButtonText: "檸檬好了~",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#3eb489 ",
      cancelButtonColor: "#fcc200",
    }).then((result) => {
      if (result.dismiss != "cancel") {
        points = 2;
        Swal.fire({
          title: "好選擇!",
          text: `清涼的薄荷，配上濃郁的牛奶基底，加上巧克力碎片，真的是絕佳的三重享受ʕ•ᴥ•ʔ`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/mint-ps.png",
          imageHeight: 300,
          confirmButtonColor: "#3eb489 ",
        }).then(secondFlavor);
      } else {
        points = 1;
        Swal.fire({
          title: "有眼光!",
          text: `清爽，微酸的檸檬冰淇淋是店裡的熱門口味呢(ᵔᴥᵔ)`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/lemon.jpg",
          imageHeight: 300,
          confirmButtonColor: "#fcc200",
        }).then(secondFlavor);
      }
    });
  }
  function secondFlavor() {
    Swal.fire({
      title: `${name}，再選個口味吧!`,
      showCancelButton: true,
      allowOutsideClick: false,
      imageUrl: "images/base2.jpg",
      confirmButtonText: "抹茶抹茶❤",
      cancelButtonText: "經典巧克力~",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#69bf64 ",
      cancelButtonColor: "#d2691e",
    }).then((result) => {
      if (result.dismiss === "cancel") {
        points += 1;
        Swal.fire({
          title: "識貨識貨!",
          text: `經典的巧克力最對味!略帶苦澀及可可香氣的大人味ʕ•ᴥ•ʔ`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/choco.jpg",
          imageHeight: 300,
          confirmButtonColor: "#3eb489 ",
        }).then(sauce);
      } else {
        points += 2;
        Swal.fire({
          title: "讚讚!",
          text: `來自京都的抹茶，配上台灣本地的醇濃鮮奶，十足過癮的好吃!(ᵔᴥᵔ)`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/matcha.jpg",
          imageHeight: 300,
          confirmButtonColor: "#69bf64",
        }).then(sauce);
      }
    });
  }
  function sauce() {
    Swal.fire({
      title: `選個醬料吧，${name}!`,
      showCancelButton: true,
      allowOutsideClick: false,
      imageUrl: "images/sauce.png",
      confirmButtonText: "海鹽焦糖醬(ᵔᴥᵔ)",
      cancelButtonText: "覆盆子果醬˙ ͜ʟ˙",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#85461e ",
      cancelButtonColor: "#e30b5d",
    }).then((result) => {
      if (result.dismiss === "cancel") {
        points += 2;
        Swal.fire({
          title: "yay!",
          text: `香甜又帶有果酸的覆盆子醬為冰淇淋添加新的層次ʕ•ᴥ•ʔ`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/raspberry-sauce.jpg",
          imageHeight: 300,
          confirmButtonColor: "#e30b5d ",
        }).then(firstTopping);
      } else {
        points += 1;
        Swal.fire({
          title: "wowww!",
          text: `加上海鹽的焦糖，不再甜膩，鹹甜交錯的滋味，為味蕾奏起交響樂(ᵔᴥᵔ)`,
          connfirmButtonText: `選擇下一球`,
          showCancelButton: false,
          imageUrl: "images/salted-caramel.jpg",
          imageHeight: 300,
          confirmButtonColor: "#85461e",
        }).then(firstTopping);
      }
    });
  }
  function firstTopping() {
    Swal.fire({
      title: `來來來~選個配料吧，${name}!`,
      showCancelButton: true,
      allowOutsideClick: false,
      imageUrl: "images/first-topping.jpg",
      confirmButtonText: "堅果(◕‿◕✿)",
      cancelButtonText: "水果▼・ᴥ・▼",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#904b1d ",
      cancelButtonColor: "#CC3333",
    }).then((result) => {
      if (result.dismiss === "cancel") {
        points += 2;
        Swal.fire({
          title: "不錯喔!",
          text: `水果是冰淇淋不可或缺的好夥伴ʕ•ᴥ•ʔ`,
          connfirmButtonText: `選擇下一個配料`,
          showCancelButton: false,
          imageUrl: "images/fruit.jpg",
          imageHeight: 300,
          confirmButtonColor: "#CC3333 ",
        }).then(secTopping);
      } else {
        points += 1;
        Swal.fire({
          title: "很健康哦",
          text: `聽說堅果可以補腦呢(ᵔᴥᵔ)`,
          connfirmButtonText: `選擇下一個配料`,
          showCancelButton: false,
          imageUrl: "images/nuts.jpg",
          imageHeight: 300,
          confirmButtonColor: "#904b1d",
        }).then(secTopping);
      }
    });
  }
  function secTopping() {
    Swal.fire({
      title: `來來來~再選個配料吧，${name}!`,
      showCancelButton: true,
      allowOutsideClick: false,
      imageUrl: "images/toppings-2.jpg",
      confirmButtonText: "巧克力米◕‿↼",
      cancelButtonText: "小熊軟糖ʕ•ᴥ•ʔ",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#7F00FF",
      cancelButtonColor: "#9acd32",
    }).then((result) => {
      if (result.dismiss === "cancel") {
        points += 2;
        Swal.fire({
          title: "酷!",
          text: `我也喜歡加小熊呢ʕ•ᴥ•ʔ`,
          connfirmButtonText: `結帳`,
          showCancelButton: false,
          imageUrl: "images/gummies.jpg",
          imageHeight: 300,
          confirmButtonColor: "#9acd32 ",
        }).then(checkout);
      } else {
        points += 1;
        Swal.fire({
          title: "Nice!",
          text: `想到冰淇淋，怎麼能忘記巧克力米呢(ᵔᴥᵔ)`,
          connfirmButtonText: `結帳`,
          showCancelButton: false,
          imageUrl: "images/sprinkles.jpg",
          imageHeight: 300,
          confirmButtonColor: "#7F00FF",
        }).then(checkout);
      }
    });
  }
  function checkout() {
    if (points >= 5 && points < 8) {
      Swal.fire({
        title: `這樣結帳金額總共是${points}元`,
        text: `從你的選擇中，可以發現你可能喜歡復古的曲風\n
                比起變化莫測的潮流，你更喜歡經典的永恆`,
        connfirmButtonText: `看看我的歌單`,
        showCancelButton: false,
        imageUrl: "images/godmother.jpg",
        imageHeight: 300,
        confirmButtonColor: "#008080",
      }).then(playlistOne);
    } else {
      Swal.fire({
        title: `這樣結帳金額總共是${points}元`,
        text: `從你的選擇中，可以發現你可能喜歡流行，具玩味曲風\n
                比起一成不變的經典，你更喜歡出乎意料的驚喜`,
        connfirmButtonText: `看看我的歌單`,
        showCancelButton: false,
        imageUrl: "images/new.jpg",
        imageHeight: 300,
        confirmButtonColor: "#f7022a",
      }).then(playlistTwo);
    }
  }
  function playlistOne() {
    Swal.fire({
      title: `屬於你的歌單，${name}`,
      confirmButtonText: `再度光臨`,
      showCancelButton: false,
      html: `<iframe src="https://open.spotify.com/embed/playlist/4zu8NlMDoFjoaXplJFfeUE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
      confirmButtonColor: "#008080",
    }).then(function () {
        finish(1);
      });
  }
  function playlistTwo() {
    Swal.fire({
      title: `屬於你的歌單，${name}`,
      confirmButtonText: `歡迎再度光臨`,
      showCancelButton: false,
      html: `<iframe src="https://open.spotify.com/embed/playlist/5O048H1peeD1KQ68QjCTCL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
      confirmButtonColor: "#008080",
    }).then(function () {
        finish(1);
      });
  }
}
function finish(re) {
    if (re) {
      btn.removeEventListener("click", start);
      btn.addEventListener("click", function(){
        location.reload();
      });
      btn.value = "再來一次";
    }
  }
ini();