let preloader = document.querySelector( '#loader' );
setTimeout(function loaderThisPage ()
{
    preloader.style.display = 'none'
},4000)


/* ==================NavBar Scroll Effect Script=====================*/
let nav = document.querySelector( '.navigation-wrap' )
window.onscroll = function ()
{
    if ( document.documentElement.scrollTop > 20 )
    {
        nav.classList.add( 'scroll-on' );
    } else
    {
        nav.classList.remove('scroll-on')
    }
}



/* ==================NavBar Hide Script====================*/
let NavBar = document.querySelectorAll ( '.nav-link' );
let navCollapse = document.querySelector( '.collapse.navbar-collapse' );

NavBar.forEach(function (a) {
    a.addEventListener( 'click', function ()
    {
        navCollapse.classList.remove('show')
    })
});



/* ==================Counter Section Script====================*/
document.addEventListener( 'DOMContentLoaded', () =>
{
    function counter ( id, start, end, duration )
    {
        let obj = document.getElementById( id ),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs( Math.floor( duration / range ) ),
            timer = setInterval( () =>
            {
                current += increment;
                obj.textContent = current;
                if ( current == end )
                {
                    clearInterval( timer )
                }
            }, step )
    }
    counter( 'counter1', 0, 1287, 3000 );
    counter( 'counter2', 100, 5786, 2500 );
    counter( 'counter3', 0, 1400, 3000 );
    counter( 'counter4', 0, 7110, 3000 );
} );