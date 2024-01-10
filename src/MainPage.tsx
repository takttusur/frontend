import WallpaperCarousel from './components/WallpaperCarousel'
import CurrentEventsWidget from './components/CurrentEvents/CurrentEventsWidget'
import EquipmentWidget from './components/Equipment/EquipmentWidget'
import NewsWidget from './components/News/NewsWidget'
import { Stack } from '@chakra-ui/react'

export default function MainPage(): JSX.Element {
    const slides = [
        'https://sun9-78.userapi.com/impg/LjIeEz0ME5wW7IjXNinsEstnKlW1wWQfSyJ_uA/IaYGsj-CoZY.jpg?size=2560x1706&quality=95&sign=bdd53cb3634957565062b067d8a65faf&type=album',
        'https://sun9-52.userapi.com/impg/nqVab7xYhP-3KIEKUJAy7hxAm4rUoxWp3Z3_pA/oLYVoglGJW8.jpg?size=1600x1158&quality=95&sign=96d93862fab54114f7cd76a7af0d2ee4&type=album',
    ]
    return (
        <Stack>
            <WallpaperCarousel slides={slides} />
            <CurrentEventsWidget />
            <EquipmentWidget />
            <NewsWidget />
        </Stack>
    )
}
