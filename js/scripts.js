/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  //modal
  function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement("div");
    bg.setStyle({
      position: "fixed",
      zIndex: zIndex,
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      overflow: "auto",
      // 레이어 색갈은 여기서 바꾸면 됨
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal
      .querySelector(".modal_close_btn")
      .addEventListener("click", function () {
        bg.remove();
        modal.style.display = "none";
      });

    modal.setStyle({
      position: "fixed",
      display: "block",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

      // 시꺼먼 레이어 보다 한칸 위에 보이기
      zIndex: zIndex + 1,

      // div center 정렬
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      msTransform: "translate(-50%, -50%)",
      webkitTransform: "translate(-50%, -50%)",
    });
  }

  // Element 에 style 한번에 오브젝트로 설정하는 함수 추가
  Element.prototype.setStyle = function (styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
  };

  document
    .getElementById("popup_open_btn_ugf")
    .addEventListener("click", function () {
      // 모달창 띄우기
      modal("my_modal_ugf");
    });

  document
    .getElementById("popup_open_btn_jimat")
    .addEventListener("click", function () {
      // 모달창 띄우기
      modal("my_modal_jimat");
    });
});
