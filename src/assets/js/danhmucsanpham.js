
// Đóng mở của danh mục bộ sưu tập,tác giả ...
$(document).ready(function () {
    function togglePanel(buttonSelector, panelSelector) {
        var statusPanel = true;

        $(buttonSelector).click(function () {
            if (statusPanel) {
                $(buttonSelector).addClass('open-panel');
                $(buttonSelector).removeClass('close-panel');
                $(panelSelector).css('display', 'none');
            } else {
                $(buttonSelector).removeClass('open-panel');
                $(buttonSelector).addClass('close-panel');
                $(panelSelector).css('display', 'block');
            }
            statusPanel = !statusPanel;
        });
    }

    togglePanel('.collection-categories-btn', '.collection-categories-panel');
    togglePanel('.collection-filter-price-btn', '.collection-filter-price-panel');
    togglePanel('.collection-filter-vendor-btn', '.collection-filter-vendor-panel');
    togglePanel('.collection-filter-type-btn', '.collection-filter-type-panel');

    // Phân trang
    var pages = $('.page');

    pages.click(function (event) {
        event.preventDefault();
        pages.removeClass('page-active');
        $(this).addClass('page-active');
    });
  
});

