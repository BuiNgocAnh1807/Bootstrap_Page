window.onscroll = function()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
    	document.getElementById("scroll-btn").style.display = "block";
    }
    else
    {
    	document.getElementById("scroll-btn").style.display = "none";
    }
};

function scrollToTop()
{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0; 
}