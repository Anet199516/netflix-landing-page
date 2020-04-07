const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const removeBorder = () => {
    tabItems.forEach(item => item.classList.remove('active-tab'));
}

const removeShow = () => {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectedItem));

function selectedItem(e) {
    removeBorder();
    this.classList.add('active-tab');

    removeShow();

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(tabContentItem, this);
    tabContentItem.classList.add('show');
}




