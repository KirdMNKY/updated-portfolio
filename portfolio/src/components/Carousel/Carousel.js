import React, {Component} from "react";
import "./Carousel.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardBody
} from 'reactstrap';

import bamazon from "../../assets/images/portfolioImages/bamazon.jpeg";

const items = [
    {
        src: { bamazon }
    },
    {
        src:"../../assets/images/portfolioImages/bot.jpeg"
    },
    {
        src:"../../assets/images/portfolioImages/burger.jpeg"
    },
    {
        src:"../../assets/images/portfolioImages/career.jpg"
    },
    {
        src:"../../assets/images/portfolioImages/cyrstalball.jpg"
    },
    {
        src:"../../assets/images/portfolioImages/friend.jpeg"
    },
    {
        src:"../../assets/images/portfolioImages/leaguelogo.jpg"
    },
    {
        src:"../../assets/images/portfolioImages/news.jpg"
    },
    {
        src:"../../assets/images/portfolioImages/oneRing.jpg"
    },
    {
        src:"../../assets/images/portfolioImages/OnTapT.png"
    },
    {
        src:"../../assets/images/portfolioImages/rupee.png"
    },
    {
        src:"../../assets/images/portfolioImages/Starlord.png"
    },
    {
        src:"../../assets/images/portfolioImages/train.jpg"
    }
  ];

class CarouselPortfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }

      onExiting() {
        this.animating = true;
      }

      onExited() {
        this.animating = false;
      }

      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }

      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }

      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >

            <Card
                className="Carousel-card"
            >
                <CardBody>
                    <iframe title="Portfolio Carousel" src={item.src} width="410" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </CardBody>
            </Card>

            </CarouselItem>
          );
        });

        return (
            <div>

                <div className="Carousel-img">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={false}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default CarouselPortfolio;
