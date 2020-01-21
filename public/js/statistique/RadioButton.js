// COCHEZ DECOCHEZ LES RADIO BUTTONS
Array.prototype.forEach.call(document.querySelectorAll('[type=radio]'), function(radio) {
    radio.addEventListener('click', function(){
        var self = this;
        // get all elements with same name but itself and mark them unchecked
        Array.prototype.filter.call(document.getElementsByName(this.name), function(filterEl) {
            return self !== filterEl;
        }).forEach(function(otherEl) {
            delete otherEl.dataset.check
        })

        // set state based on previous one
        if (this.dataset.hasOwnProperty('check')) {
            this.checked = false
            delete this.dataset.check
        } else {
            this.dataset.check = ''
        }
    }, false)
})
