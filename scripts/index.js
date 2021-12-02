let viewMore = () => {
    console.log('view more btn clicked');
const moreCity = document.getElementById("more-city");
const viewMoreButtonText = document.getElementById("view-more-btn")
if (viewMoreButtonText.innerText === "View More"){
viewMoreButtonText.innerText =  "View Less";
moreCity.className = ""
}
else{
    viewMoreButtonText.innerText =  "View More";
    moreCity.className += "city-hide"
}
}