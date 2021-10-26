gsap.from(".header", { duration: 0.5, opacity: 0, y: 50 });

let tlCorvus = gsap.timeline({ paused: true });

tlCorvus
  .to(".modalOverlay.corvusModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".corvusModal .modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .addLabel("reverseStartingPoint")
  .from(".corvusModal .fadeInTop", {
    duration: 0.3,
    opacity: 0,
    y: 10,
    stagger: 0.2,
  });

let tlCorvusReverse = gsap.timeline({ paused: true });

tlCorvusReverse
  .to(".corvusModal .modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .to(".modalOverlay.corvusModal", {
    duration: 0.3,
    opacity: 0,
    backgroundColor: "transparent",
    pointerEvents: "none",
  });

let isFirstPlay = true;
$(".location.corvus").click((event) => {
  console.log("test");
  if (tlCorvus.isActive() || tlCorvusReverse.isActive()) {
    return;
  }

  // tlCorvus.play(0);

  if (isFirstPlay) {
    tlCorvus.play();
    isFirstPlay = false;
    return;
  }

  tlCorvus.reversed()
    ? tlCorvus.play()
    : tlCorvus.reverse("reverseStartingPoint");
});

$(".modalOverlay.corvusModal").click(() => {
  if (tlCorvus.isActive() || tlCorvusReverse.isActive()) {
    return;
  }
  tlCorvus.reverse("reverseStartingPoint");
  // tlCorvusReverse.play(0);
});

// UMN

let tlUMN = gsap.timeline({ paused: true });

tlUMN
  .to(".modalOverlay.UMNModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".UMNModal .modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .addLabel("reverseStartingPoint")
  .from(".UMNModal .fadeInTop", {
    duration: 0.3,
    opacity: 0,
    y: 10,
    stagger: 0.2,
  });

let tlUMNReverse = gsap.timeline({ paused: true });

tlUMNReverse
  .to(".UMNModal .modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .to(".modalOverlay.UMNModal", {
    duration: 0.3,
    opacity: 0,
    backgroundColor: "transparent",
    pointerEvents: "none",
  });

let isUMNFirstPlay = true;
$(".location.UMN").click((event) => {
  if (tlUMN.isActive() || tlUMNReverse.isActive()) {
    return;
  }

  // tlCorvus.play(0);

  if (isUMNFirstPlay) {
    tlUMN.play();
    isUMNFirstPlay = false;
    return;
  }

  tlUMN.reversed() ? tlUMN.play() : tlUMN.reverse("reverseStartingPoint");
});

$(".modalOverlay.UMNModal").click(() => {
  if (tlUMN.isActive() || tlUMNReverse.isActive()) {
    return;
  }
  tlUMN.reverse("reverseStartingPoint");
  // tlCorvusReverse.play(0);
});

let tlDazzling = gsap.timeline({ paused: true });

tlDazzling
  .to(".modalOverlay.DazzlingModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".DazzlingModal .modalContent", {
    duration: 0.5,
    opacity: 0,
    x: "100%",
  })
  .addLabel("reverseStartingPoint")
  .from(".DazzlingModal .fadeInTop", {
    duration: 0.3,
    opacity: 0,
    y: 10,
    stagger: 0.2,
  });

let tlDazzlingReverse = gsap.timeline({ paused: true });

tlDazzlingReverse
  .to(".DazzlingModal .modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .to(".modalOverlay.DazzlingModal", {
    duration: 0.3,
    opacity: 0,
    backgroundColor: "transparent",
    pointerEvents: "none",
  });

let isDazzlingFirstPlay = true;
$(".location.Dazzling").click((event) => {
  if (tlDazzling.isActive() || tlDazzlingReverse.isActive()) {
    return;
  }

  // tlCorvus.play(0);

  if (isDazzlingFirstPlay) {
    tlDazzling.play();
    isDazzlingFirstPlay = false;
    return;
  }

  tlDazzling.reversed()
    ? tlDazzling.play()
    : tlDazzling.reverse("reverseStartingPoint");
});

$(".modalOverlay.DazzlingModal").click(() => {
  if (tlDazzling.isActive() || tlDazzlingReverse.isActive()) {
    return;
  }
  tlDazzling.reverse("reverseStartingPoint");
  // tlCorvusReverse.play(0);
});

let tlPhoenix = gsap.timeline({ paused: true });

tlPhoenix
  .from(".phoenixHeader", { duration: 0.2, opacity: 0 })
  .to(".modalOverlay.phoenixModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".imageBanner", { duration: 0.5, opacity: 0, x: -100, stagger: 0.3 })
  .from(".imageBanner img", {
    duration: 0.5,
    opacity: 0,
    x: "-100%",
    y: -50,
    scale: 1.5,
    stagger: 0.3,
  });

$(".location.phoenix").click(() => {
  if (tlPhoenix.reversed()) {
    tlPhoenix.play();
  } else {
    tlPhoenix.reverse();
  }
});

$(".modalOverlay.phoenixModal").click(() => {
  tlPhoenix.reverse();
});

let tlExtra = gsap.timeline({ paused: true });
let tlExtra2 = gsap.timeline({ paused: true });
let tlExtra3 = gsap.timeline({ paused: true });
let isPlayExtraTl = false;
let timeline = "";

tlExtra
  .from(" .extraModal .extraHeader", { duration: 0.2, opacity: 0 })
  .to(".modalOverlay.extraModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".extraModal .productCard", { duration: 0.2, opacity: 0, y: -50 });

tlExtra2
  .from(".extraModal2 .extraHeader", { duration: 0.2, opacity: 0 })
  .to(".modalOverlay.extraModal2", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".extraModal2 .productCard", { duration: 0.2, opacity: 0, y: -50 });

tlExtra3
  .from(".extraModal3 .extraHeader", { duration: 0.2, opacity: 0 })
  .to(".modalOverlay.extraModal3", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".extraModal3 .productCard", { duration: 0.2, opacity: 0, y: -50 });

$(".modalOverlay.extraModal").click(() => {
  tlExtra.reverse();
});

$(".modalOverlay.extraModal2").click(() => {
  tlExtra2.reverse();
});

$(".modalOverlay.extraModal3").click(() => {
  tlExtra3.reverse();
});

tlPhoenix.eventCallback("onReverseComplete", () => {
  console.log("ON REVERSE");
  if (isPlayExtraTl) {
    isPlayExtraTl = false;

    switch (timeline) {
      case "extra":
        tlExtra.play();
        return;
      case "extra2":
        tlExtra2.play();
        return;
      case "extra3":
        tlExtra3.play();
        return;
      default:
        tlExtra.play();
    }
    // tlExtra.play();
  }
});

$(".phoenixModal .firstBanner").click(() => {
  isPlayExtraTl = true;
  timeline = "extra";
  tlPhoenix.reverse();
});

$(".phoenixModal .secondBanner").click(() => {
  isPlayExtraTl = true;
  timeline = "extra2";
  tlPhoenix.reverse();
});

$(".phoenixModal .thirdBanner").click(() => {
  isPlayExtraTl = true;
  timeline = "extra3";
  tlPhoenix.reverse();
});

let currentDate = new Date().getTime();
let targetDateValue = "August 21, 2021 20:00";
let targetDate = new Date(targetDateValue).getTime();

$("#countdown").hide();
$(".Regist").show();

if (targetDate > currentDate) {
  $("#countdown").show();
  // $(".recruitBtn").addClass("recruitBtn-disabled");
  $(".btn-reg").hide();
  $(".Regist").hide();
  var x = setInterval(function () {
    let countDownDate = new Date(targetDateValue).getTime();
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    (document.getElementById("days").innerText = days),
      (document.getElementById("hours").innerText = hours),
      (document.getElementById("minutes").innerText = minutes),
      (document.getElementById("seconds").innerText = seconds);

    // document.getElementById("countdown").innerHTML =
    //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      $("#countdown").hide();
      $(".recruitBtn").removeClass("recruitBtn-disabled");
      $(".btn-reg").show();
      $(".Regist").show();
    }
  }, 1000);
}
