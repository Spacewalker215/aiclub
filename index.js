document.querySelectorAll('.accordion-item-header').forEach(item => {
    item.addEventListener('click', function() {
        const accordionItem = this.parentNode;
        const isActive = accordionItem.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });

        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});
