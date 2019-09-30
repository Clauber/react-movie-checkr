import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import {CarouselItem} from '../carousel-item/carousel-item.component'

export  const CarouselList = ({items}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    // console.log(items);
    if(items!== undefined)
    return(
        <ItemsCarousel 
            gutter={12}
            activePosition={'center'}
            chevronWidth={50}
            disableSwipe={false}
            alwaysShowChevrons={true}
            numberOfCards={4}
            slidesToScroll={2}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            activeItemIndex={selectedIndex}
            requestToChangeActive={value => setSelectedIndex(value)}
            rightChevron={'>'}
            leftChevron={'<'}>
                {items.map(x=> <CarouselItem item={x}/>)}
        </ItemsCarousel>
    )
    else
    return null;
}