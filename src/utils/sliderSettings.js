export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 7,
                dots: false
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                initialSlide: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
};