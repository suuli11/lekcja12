$(document).ready(function() {

    // =====================
    // parent() / parents() / children()
    // =====================

    // Zmiana koloru tła elementu nadrzędnego wybranego p
    $("p").click(function() {
        $(this).parent().css("background-color", "#d0f0c0");
    });

    // Zaznaczenie wszystkich przodków wybranego elementu
    $("p").dblclick(function() {
        $(this).parents().css("border", "1px solid #ff0000");
    });

    // Podświetlenie dzieci konkretnego div
    $(".container").hover(function() {
        $(this).children().css("background-color", "#f0f0f0");
    }, function() {
        $(this).children().css("background-color", "");
    });


    // =====================
    // siblings()
    // =====================

    $("#container1 ul li, #container2 ul li").click(function() {
        $(this).siblings().css("background-color", "#ffe0e0");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).css("background-color", "#ffcccc");
    });


    // =====================
    // find()
    // =====================

    // Wszystkie span w div → kolor czerwony
    $(".container").find("span").css("color", "red");

    // Wszystkie linki a → target="_blank"
    $(".container").find("a").attr("target", "_blank");


    // =====================
    // Nawigacja w drzewie DOM
    // =====================

    $("#showParentsBtn").click(function() {
        const selected = $("#container1 p:first");
        const parentsList = selected.parents().map(function() {
            return this.tagName;
        }).get().join(" > ");
        $("#output").text("Przodkowie wybranego p: " + parentsList);
    });

    $("#showChildrenBtn").click(function() {
        const selected = $("#container2");
        const childrenList = selected.children().map(function() {
            return this.tagName;
        }).get().join(", ");
        $("#output").text("Dzieci wybranego div: " + childrenList);
    });

});
