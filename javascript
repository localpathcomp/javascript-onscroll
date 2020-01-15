<script>
    window.onscroll = function() {
        scrollFunction()
    };

    let headerWrap = document.querySelector('#header-wrap');
    let navBar = document.querySelector('#nav');
    let mainContent = document.querySelector('#main-wrap');

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            headerWrap.classList.add('header_bg_show');
            navBar.classList.add('nav_show');
        } else {
            headerWrap.classList.remove('header_bg_show');
            navBar.classList.remove('nav_show');
        }
    }
</script>
