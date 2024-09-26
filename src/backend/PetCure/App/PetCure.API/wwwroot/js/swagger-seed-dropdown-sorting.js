$(document).ready(function () {

    var swaggerUi = document.getElementById('swagger-ui');

    var observerOptions = { attributes: true, childList: true, characterData: true, subtree: true };

    var mutationObserver = new MutationObserver(function (changes) {

        var seedDropdown = $('[data-param-name="seeds"] select');

        console.log(seedDropdown);

        if (seedDropdown && seedDropdown.length > 0) {

            mutationObserver.disconnect();

            var options = seedDropdown.children();

            var arr = options.map(function (_, o) { return { t: $(o).text(), v: o.value }; }).get();
            arr.sort(function (o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
            options.each(function (i, o) {
                o.value = arr[i].v;
                $(o).text(arr[i].t);
            });

            mutationObserver.observe(swaggerUi, observerOptions);
        }
    });

    mutationObserver.observe(swaggerUi, observerOptions);
});
