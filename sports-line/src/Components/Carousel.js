import Carousel from 'react-bootstrap/Carousel';

function PromotionCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://finishline.a.bigcontent.io/v1/static/FNL_HP_Slider_Desktop_1213x600_Flush_11923"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://finishline.a.bigcontent.io/v1/static/FNL_122322_Nike_MustHaves_Homepage_Hero_Slider_Desktop_1213x600"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://finishline.a.bigcontent.io/v1/static/FNL_121922_OSP_NewBalance_HP_Slider_Desktop_1213x600"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export {PromotionCarousel}