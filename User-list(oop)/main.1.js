//jshint esversion: 6

(function() {

    const userList = document.querySelector('#user-list');
    const selectAll = document.querySelector('#select-all');
    const statsInfo = document.querySelector('#stats');

    const search = document.querySelector('#inputSearch');
    const emailDropdown = document.querySelector('#dropdown-email');
    const roleDropdown = document.querySelector('#dropdown-role');
    const nextBtn = document.querySelector('#next-page');

    let userListData = [];
    let pageConfig = {
        itemsPerPage: 10,
        currentPage: 0
    }

    function prepareUserListData() {
        userListData = listService.duplicateArray(users, 1);
    }

    function initListeners() {
        selectAll.addEventListener('click', selectAllItems);
        userList.addEventListener('click', selectTableLine);

        search.addEventListener('keyup', searchHandler);
        emailDropdown.addEventListener('click', sortingHandler);
        roleDropdown.addEventListener('click', sortingHandler);
        nextBtn.addEventListener('click', getNextPageHandler);
    }

    function getNextPage() {
        let start = pageConfig.itemsPerPage * pageConfig.currentPage;
        let end = pageConfig.itemsPerPage + start;
        pageConfig.currentPage++;
        return userListData.slice(start, end);
    }

    function buildUsersList(filterSortFunction) {
        let page = getNextPage();
        filterSortFunction && (page = filterSortFunction(page));
        let result  = page.map(item => listService.tableTemplate(item));
        userList.innerHTML += result.join("");
        listService.initTooltip();
    }


    function init() {
        initListeners();
        prepareUsersListData();
        buildUsersList();
    }
    init();
})();