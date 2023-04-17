import noUiSlider from 'nouislider';

(function () {
    var priceSliders = document.querySelectorAll('.filter-price') || [];

    const createPriceSlider = (priceSlider) => {
        const parentElem = priceSlider.closest('.widget-filter-price');

        noUiSlider.create(priceSlider, {
            start: [18, 32],
            connect: true,
            tooltips: [true, true],
            range: {
                'min': 18,
                'max': 50
            },
            pips: {
                mode: 'values',
                values: [18, 26, 42, 50],
                density: 100
            }
        });

        var filterMinInput = parentElem ? parentElem.querySelector('.filter-min') : false;
        var filterMaxInput = parentElem ? parentElem.querySelector('.filter-max') : false;
        const inputs = [filterMinInput, filterMaxInput]

        priceSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        filterMinInput.addEventListener('change', function () {
            priceSlider.noUiSlider.set([this.value, null]);
        });

        filterMaxInput.addEventListener('change', function () {
            priceSlider.noUiSlider.set([null, this.value]);
        });
    }

    priceSliders.forEach((priceSlider) => {
        createPriceSlider(priceSlider);
    });
})();