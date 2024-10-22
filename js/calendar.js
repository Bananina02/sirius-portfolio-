var days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
var months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function pad(input) {
  var BASE = "00";
  return input ? BASE.substr(0, 2 - Math.ceil(input / 9)) + input : BASE;
}

Date.prototype.getDayName = function () {
  return days[this.getDay()];
};

Date.prototype.getMonthName = function () {
  return months[this.getMonth()];
};

var dat = new Date();

$(".currentMonth").text(dat.getMonthName());

var curMonthDays = new Date(dat.getFullYear(), dat.getMonth() + 1, 0).getDate();
var nextMonthDays = new Date(
  dat.getFullYear(),
  dat.getMonth() + 2,
  0
).getDate();

var curMonthUl = $("#curMonth");

for (i = dat.getDate(); i <= curMonthDays; i++) {
  var nextDate = new Date(dat.getFullYear(), dat.getMonth(), i);

  var strDate = '<span class ="date">' + pad(nextDate.getDate()) + "</span>";
  var strDay = '<span class ="day" >' + nextDate.getDayName() + "</span>";

  if (nextDate.getDayName() === "СБ" || nextDate.getDayName() === "ВС") {
    strDay =
      '<span class ="day dateWeekend" style="color: #F05253;">' +
      nextDate.getDayName() +
      "</span>";
  }

  curMonthUl.append(
    "<li>" + "<button class='calendar__btn btn-reset'>" + strDate + strDay + "</button>" + "</li>"
  );
}

var nextMonthUl = $("#nextMonth");

for (i = 1; i <= nextMonthDays; i++) {
  var nextDate = new Date(dat.getFullYear(), dat.getMonth() + 1, i);

  var strDate = '<span class ="date">' + pad(nextDate.getDate()) + "</span>";
  var strDay = '<span class ="day" >' + nextDate.getDayName() + "</span>";

  if (nextDate.getDayName() === "СБ" || nextDate.getDayName() === "ВС") {
    strDay =
      '<span class ="day dateWeekend" style="color: #F05253;">' +
      nextDate.getDayName() +
      "</span>";
  }

  if (pad(nextDate.getDate()) === "01") {
    var nextMonth = new Date(
      dat.getFullYear(),
      dat.getMonth() + 1,
      1
    ).getMonthName();
    $(".nextMonth").text(nextMonth);
    nextMonthUl.append(
      "<li>" +
        "<button class='calendar__btn btn-reset'>" +
        "<span class='nextMonth'>" +
        nextMonth +
        "</span>" +
        strDate +
        strDay +
        "</button>" +
        "</li>"
    );
  } else {
    nextMonthUl.append(
      "<li>" + "<button class='calendar__btn btn-reset'>" + strDate + strDay + "</button>" + "</li>"
    );
  }
}

$("#curCard").append(curMonthUl);
$("#nextCard").append(nextMonthUl);

$(".nextMonth").detach().prependTo("#nextCard");

//control
$('<button class="calendar__btn-next btn-reset"></button>').appendTo(
  ".calendar__control"
);

$(".calendar__btn-next").click(function () {
  var posLeft = $(".calendar__slider-wrap").scrollLeft();
  $(".calendar__slider-wrap").animate({ scrollLeft: posLeft + 44 }, 300);
});

// grab
[...document.querySelectorAll(".calendar__slider-wrap")].forEach(
  (container, n = !1, i = void 0, r = void 0, a = !1, t = 0) => {
    container.addEventListener("mousedown", function (e) {
      (n = !0), this.classList.add("active");
      (i = e.pageX - this.offsetLeft), (r = this.scrollLeft);
    });
    container.addEventListener("mouseleave", function (e) {
      (n = !1), this.classList.remove("active");
    });
    container.addEventListener("mouseup", function (e) {
      a && (e.preventDefault(), (a = !1)),
        (n = !1),
        this.classList.remove("active");
    });
    container.addEventListener("mousemove", function (e) {
      var t;
      n &&
        (e.preventDefault(),
        (t = e.pageX - this.offsetLeft),
        (t = r - 3 * (t - i)),
        5 < Math.abs(this.scrollLeft - t) && (a = !0),
        (this.scrollLeft = t));
    });
  }
);
