gsap.from(".header", { duration: 0.5, opacity: 0, y: 50 });

let tlCorvus = gsap.timeline({ paused: true });

tlCorvus
  .to(".modalOverlay.corvusModal", {
    duration: 0.3,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "auto",
  })
  .from(".modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .addLabel("reverseStartingPoint")
  .from(".fadeInTop", { duration: 0.3, opacity: 0, y: 10, stagger: 0.2 });

let tlCorvusReverse = gsap.timeline({ paused: true });

tlCorvusReverse
  .to(".modalContent", { duration: 0.5, opacity: 0, x: "100%" })
  .to(".modalOverlay.corvusModal", {
    duration: 0.3,
    opacity: 0,
    backgroundColor: "transparent",
    pointerEvents: "none",
  });

let isFirstPlay = true;
$(".location.corvus").click((event) => {
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
