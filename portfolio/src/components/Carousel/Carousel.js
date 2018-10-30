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

// Images for the Carousel
import bamazon from "../../assets/images/portfolioImages/bamazon.jpeg";
import bot from "../../assets/images/portfolioImages/bot.png";
import burger from "../../assets/images/portfolioImages/burger.jpeg";
import career from "../../assets/images/portfolioImages/career.jpg";
import crystalball from "../../assets/images/portfolioImages/crystalball.jpg";
import friend from "../../assets/images/portfolioImages/friend.jpeg";
import leagueG2G from "../../assets/images/portfolioImages/leaguelogo.jpg";
import news from "../../assets/images/portfolioImages/news.jpg";
import oneRing from "../../assets/images/portfolioImages/oneRing.jpg";
import OnTap from "../../assets/images/portfolioImages/OnTapT.png";
import rupee from "../../assets/images/portfolioImages/rupee.png";
import marvel from "../../assets/images/portfolioImages/marvel.png";
import train from "../../assets/images/portfolioImages/train.jpg";
import giftastic from "../../assets/images/portfolioImages/giftastic.png";

// Array of images
const items = [
    {
        src: bamazon,
        altText: "bamazon cli",
        href: "https://drive.google.com/file/d/1Y-l9u6fBnzQXPuAuZByleXnXEyS60zOY/view"
    },
    {
        src: bot,
        altText: "chatbot cli",
        href: "https://github.com/KirdMNKY/liri-bot"   
    }, 
    {
        src: burger,
        altText: "eat da burger",
        href: ""    
    },
    {
        src: career,
        altText: "career finder",
        href: "https://kirdmnky.github.io/project-one/"    
    },
    {
        src: crystalball,
        altText: "psychic game",
        href: "https://kirdmnky.github.io/Psychic-Game/"    
    },
    {
        src: friend,
        altText: "friend finder",
        href: "https://mnkyfriendfinder.herokuapp.com/"   
    }, 
    {
        src: leagueG2G,
        altText: "lol g2g group finder",
        href: "https://lolg2g.herokuapp.com/"   
    }, 
    {
        src: news,
        altText: "monster hunter newser",
        href: ""   
    }, 
    {
        src: oneRing,
        altText: "lord of the rings trivia",
        href: "https://kirdmnky.github.io/triviaGame/"   
    }, 
    {
        src: OnTap,
        altText: "on tap entertainment app",
        href: "https://ontapp.herokuapp.com/home"    
    },
    {
        src: rupee,
        altText: "crystal collector",
        href: "https://kirdmnky.github.io/crystal-collector/"    
    },
    {
        src: marvel,
        altText: "mavel react clicky game ",
        href: ""    
    },
    {
        src: train,
        altText: "train scheduler",
        href: "https://kirdmnky.github.io/train-time/"    
    },
    {
        src: giftastic,
        altText: "giftastic",
        href: "https://kirdmnky.github.io/gif-tastic"    
    },

    
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
                    <a href={ item.href } target="_blank"><img src={ item.src } alt={ item.altText } width="410" height="380" /></a>
                    <br />
                    <div className="altText">
                    <h2>{ item.altText }</h2>
                    </div>
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
